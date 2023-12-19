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
import { useUser } from '@/context/user-context'

export function ConfirmationVisibilityButton ({
  isPublic,
  projectName,
  organization
}) {
  const { dictionary } = useLang()
  const { user } = useUser()

  const handleChangeVisibility = () => {
    try {
      const changeVisibility = () => {
        return new Promise((resolve, reject) => {
          (async () => {
            await supabase.from('projects').update({ visibility: isPublic ? 'private' : 'public' })
              .eq('name', projectName)
              .select()
              .then(() => {
                mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people-project?username=eq.${user.username}&select=project,projectValue:projects(*)`)
                mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/projects?organization=eq.${organization}&visibility=eq.${'public'}&select=*`)
                mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/projects?name=eq.${projectName}&select=*,people:people-project(*)`)

                resolve()
              }).catch((error) => {
                console.error(error)
                reject(error)
              })
          })()
        })
      }

      toast.promise(changeVisibility, {
        loading: dictionary.projectSettings['toast-visibility-loading'],
        success: () => dictionary.projectSettings['toast-visibility-success'],
        error: () => dictionary.projectSettings['toast-error']
      })
    } catch (error) {
      const { path, message } = JSON.parse(error.message)[0]
      toast.error(path[0] + ': ' + message)
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          id="visibility-project"
          variant="secondary"
          className="text-red-600 font-medium whitespace-nowrap w-36"
        >
          {dictionary.projectSettings['change-visibility']}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {dictionary.confirmation['confirmation-title']}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {dictionary.confirmation['confirmation-visibility']}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{dictionary.common.cancel}</AlertDialogCancel>
          <AlertDialogAction
            id="accept-visibility-project"
            onClick={handleChangeVisibility}
            className={
              isPublic
                ? 'bg-red-500 hover:bg-red-700'
                : 'bg-green-500 hover:bg-green-700'
            }
          >
            {isPublic
              ? dictionary.confirmation['confirmation-visibility-private']
              : dictionary.confirmation['confirmation-visibility-public']}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
