import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '@/components/ui/alert-dialog'
import { usePathname } from 'next/navigation'

const spanishDict = {
  delete: 'Si, borrar tarea',
  deleteTitle: '¿Estas completamente seguro?',
  deleteText: 'Esta acción no se puede deshacer. La tarea se borrará de forma permanente.',
  cancel: 'Cancelar'
}

const englishDict = {
  delete: 'Yes, delete task',
  deleteTitle: 'Are you absolutely sure?',
  deleteText: 'This action cannot be undone. This will permanently delete your task .',
  cancel: 'Cancel'
}

export function DeletePopUp () {
  const lang = usePathname().split('/').at(1)

  const dict = lang === 'es' ? spanishDict : englishDict

  return (
    <>
      <AlertDialogHeader>
          <AlertDialogTitle>{dict.deleteTitle}</AlertDialogTitle>
          <AlertDialogDescription>
            {dict.deleteText}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{dict.cancel}</AlertDialogCancel>
          <AlertDialogAction>{dict.delete}</AlertDialogAction>
        </AlertDialogFooter>
    </>
  )
}
