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

export function ConfirmationCloseButton ({
  isClose,
  projectName,
  organization
}) {
  const { dictionary } = useLang()
  const { user } = useUser()

  const handleChangeStatus = () => {
    try {
      const changeStatus = () => {
        return new Promise((resolve, reject) => {
          (async () => {
            await supabase.from('projects').update({ status: isClose ? 'open' : 'closed' })
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

      toast.promise(changeStatus, {
        loading: dictionary.projectSettings['toast-close-loading'],
        success: () => dictionary.projectSettings['toast-close-success'],
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
          id="close-project"
          variant='secondary'
          className={
            isClose
              ? 'text-green-600 font-medium whitespace-nowrap w-36'
              : 'text-red-600 font-medium whitespace-nowrap w-36'
          }
        >
          {isClose
            ? dictionary.projectSettings['open-project']
            : dictionary.projectSettings['close-project']}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {dictionary.confirmation['confirmation-title']}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {isClose
              ? dictionary.confirmation['confirmation-desc-open']
              : dictionary.confirmation['confirmation-desc-close']}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{dictionary.common.cancel}</AlertDialogCancel>
          <AlertDialogAction
            id="accept-close-project"
            onClick={handleChangeStatus}
            className={
              isClose
                ? 'bg-green-500 hover:bg-green-700'
                : 'bg-red-500 hover:bg-red-700'
            }
          >
            {isClose
              ? dictionary.confirmation['confirmation-open']
              : dictionary.confirmation['confirmation-close']}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog >
  )
}
