'use client'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { useLang } from '@/context/language-context'
import { useUser } from '@/context/user-context'
import { supabase } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import useSWR, { mutate } from 'swr'

export default function JoinOrgPage ({ params }) {
  const { dictionary } = useLang()
  const { user } = useUser()
  const router = useRouter()

  const { data: organization, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/organization?uuid=eq.${params.orgHash}&select=*`)
  const { data: people } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people-org?organization=eq.${organization?.at(0)?.name}&select=*`)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const createOrganization = () => {
        return new Promise((resolve, reject) => {
          (async () => {
            if (organization) {
              if (people?.find(e => e.username === user.username)) reject(new Error(dictionary.org['toast-error']))
              await supabase.from('people-org').insert({ username: user.username, organization: organization[0].name })
                .then(() => {
                  mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people-org?username=eq.${user.username}&select=organization,plan:organization(plan)`)
                  mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people-org?organization=eq.${organization.name}&select=username,organization,role,people(firstname,lastname,avatar)`)
                  resolve()
                }).catch((error) => {
                  console.error(error)
                  reject(error)
                })
            }
            reject(new Error('No se ha podido realizar la operación'))
          })()
        })
      }

      toast.promise(createOrganization, {
        loading: dictionary.org['toast-loading-join'],
        success: () => dictionary.org['toast-success-join'],
        error: () => dictionary.org['toast-error']
      })
      router.replace('/organizations')
    } catch (error) {
      const { path, message } = JSON.parse(error.message)[0]
      toast.error(path[0] + ': ' + message)
    }
  }

  return !isLoading && (
    <div className='w-full h-full flex justify-around items-center'>
      <div className='flex flex-col gap-4 items-center'>
        <Label className='font-bold text-2xl'>{String(dictionary.org['join-org-title']).replace('%s', organization[0].name)}</Label>
        <Button onClick={handleSubmit} className='first-letter:uppercase hover:bg-custom-lighterYellow text-black bg-custom-mustard font-semibold w-fit'>{dictionary.org['join-org-button']}</Button>
      </div>
    </div>

  )
}
