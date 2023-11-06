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

export function ConfirmationCloseButton({ isClose }) {
  const { dictionary } = useLang()

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
