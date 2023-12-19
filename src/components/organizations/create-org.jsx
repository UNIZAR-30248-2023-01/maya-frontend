'use client'

import { Label } from '../ui/label'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import { useLang } from '@/context/language-context'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from '@/components/ui/dialog'
import { useState } from 'react'
import { organizationSchema } from '@/lib/schemas'
import { getForm, supabase } from '@/lib/utils'
import { useUser } from '@/context/user-context'
import { toast } from 'sonner'
import { mutate } from 'swr'
import { Text, TextArea } from '../forms'

export function CreateOrg ({ separator }) {
  const { dictionary } = useLang()
  const { user } = useUser()

  const [form, setForm] = useState(getForm(organizationSchema._def.shape()))

  const setter = ({ key, value }) => setForm({ ...form, [key]: value })

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { name, description } = form

    try {
      organizationSchema.parse({ name, description })
      const createOrganization = () => {
        return new Promise((resolve, reject) => {
          (async () => {
            await supabase.from('organization').insert({ name, description })
              .then(async (res) => {
                if (res.error !== null) return
                await supabase.from('people-org').insert({
                  username: user.username,
                  organization: name,
                  role: 'owner'
                })
                mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people-org?username=eq.${user.username}&select=organization,plan:organization(plan)`)
                resolve()
              }).catch((error) => {
                console.error(error)
                reject(error)
              })
          })()
        })
      }

      toast.promise(createOrganization, {
        loading: dictionary.org['toast-loading'],
        success: () => dictionary.org['toast-success'],
        error: () => dictionary.org['toast-error']
      })
    } catch (error) {
      const { path, message } = JSON.parse(error.message)[0]
      toast.error(path[0] + ': ' + message)
    }
  }

  return (
    <div className='max-w-lg flex flex-col gap-4 items-center'>
      {separator && <div className='w-full flex flex-row gap-4 justify-center items-center'>
        <div className='w-full'>
          <Separator />
        </div>
        <Label>{dictionary.org['create-org-or']}</Label>
        <div className='w-full'>
          <Separator />
        </div>
      </div>
      }
      <Label className='font-bold text-2xl'>{dictionary.org['create-org-title']}</Label>

      <Dialog>
      <DialogTrigger asChild>
        <Button id='create-org' size='lg' className='first-letter:uppercase hover:bg-custom-lighterYellow text-black bg-custom-mustard w-fit font-semibold'>{dictionary.org['create-org-button']}</Button>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={e => handleSubmit(e)}>
          <DialogHeader>
            <DialogTitle className='first-letter:uppercase'>{dictionary.org['dialog-title']}</DialogTitle>
            <DialogDescription>
              {dictionary.org['dialog-description']}
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col w-full  mt-4 gap-6">
              <div className='grid gap-4 w-full'>
                <Text
                  id="name"
                  label={dictionary.org['name-column']}
                  placeholder={dictionary.org['new-table-name-placeholder']}
                  onChange={(e) => setter({ key: 'name', value: String(e.target.value).toLowerCase().split(' ').join('-') })}
                />
                <TextArea
                  id="description"
                  label={dictionary.org['description-column']}
                  placeholder={dictionary.org['new-table-desc-placeholder']}
                  onChange={(e) => setter({ key: 'description', value: e.target.value })}
                />
              </div>
              <DialogClose asChild>
                <Button id='confirm-edit' type="submit" className='first-letter:uppercase hover:bg-custom-lighterYellow text-black bg-custom-mustard font-semibold'>{dictionary.org['create-button']}</Button>
              </DialogClose>
            {/* <RemoveUser username={username} title={deleteTitle} description={deleteDescription} /> */}
          </div>
        </form>
      </DialogContent>
    </Dialog>
    </div>
  )
}
