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

export function ConfirmationCloseButton ({
  isClose,
  projectName
}) {
  const { dictionary } = useLang()

  const handleChangeStatus = () => {
    try {
      const changeStatus = () => {
        return new Promise((resolve, reject) => {
          (async () => {
            await supabase.from('projects').update({ status: isClose ? 'open' : 'closed' })
              .eq('name', projectName)
              .select()
              .then(() => {
                mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/projects?name=eq.${projectName}&select=*`)
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
