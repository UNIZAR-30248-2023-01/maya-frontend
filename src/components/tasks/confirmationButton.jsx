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

export function ConfirmationTaskButton ({
  isEdit
}) {
  const { dictionary } = useLang()

  return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className={!isEdit && 'bg-red-500 hover:bg-red-700'}>{isEdit ? dictionary.common.save : dictionary.common.delete}</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{dictionary.confirmation['confirmation-title']}</AlertDialogTitle>
                    <AlertDialogDescription>{isEdit ? dictionary.confirmation['confirmation-desc-edit'] : dictionary.confirmation['confirmation-desc-delete']}</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>{dictionary.common.cancel}</AlertDialogCancel>
                    <AlertDialogAction className={isEdit ? 'bg-green-500 hover:bg-green-700' : 'bg-red-500 hover:bg-red-700'}>{isEdit ? dictionary.confirmation['confirmation-edit-task'] : dictionary.confirmation['confirmation-delete-task']}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
  )
}
