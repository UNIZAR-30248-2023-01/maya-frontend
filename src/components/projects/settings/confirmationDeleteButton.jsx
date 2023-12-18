'use client'

import { useLang } from '@/context/language-context'
import {
  AlertDialog,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogContent
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { supabase } from '@/lib/utils'
import { toast } from 'sonner'
import { mutate } from 'swr'
import { useRouter, usePathname } from 'next/navigation'
import { useUser } from '@/context/user-context'

export function ConfirmationDeleteButton ({
  projectName,
  organization
}) {
  const { dictionary } = useLang()
  const path = usePathname()
  const router = useRouter()
  const { user } = useUser()

  const handleDeleteProject = () => {
    try {
      const deleteProject = () => {
        return new Promise((resolve, reject) => {
          (async () => {
            await supabase.from('projects').delete()
              .eq('name', projectName)
              .then(() => {
                mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people-project?username=eq.${user.username}&select=project,projectValue:projects(*)`)
                mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/projects?organization=eq.${organization}&visibility=eq.${'public'}&select=*`)
                resolve()
              }).catch((error) => {
                console.error(error)
                reject(error)
              })
          })()
        })
      }

      toast.promise(deleteProject, {
        loading: dictionary.projectSettings['toast-delete-loading'],
        success: () => dictionary.projectSettings['toast-delete-success'],
        error: () => dictionary.projectSettings['toast-error']
      })
    } catch (error) {
      const { path, message } = JSON.parse(error.message)[0]
      toast.error(path[0] + ': ' + message)
    }
    router.replace(`${path.split('/').slice(0, 4).join('/')}`)
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          id="delete-project"
          variant='secondary'
          className='text-red-600 font-medium whitespace-nowrap w-36'
        >
          {dictionary.projectSettings['delete-project']}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{dictionary.confirmation['confirmation-title']}</AlertDialogTitle>
          <AlertDialogDescription>{dictionary.confirmation['confirmation-desc-delete']}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{dictionary.common.cancel}</AlertDialogCancel>
          <AlertDialogAction id="accept-delete-project" onClick={handleDeleteProject} className={'bg-red-500 hover:bg-red-700'}>{dictionary.confirmation['confirmation-delete']}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
