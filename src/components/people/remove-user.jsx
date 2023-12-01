'use client'

import { useLang } from '@/context/language-context'
import {
  AlertDialog,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
  AlertDialogCancel,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogContent
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Label } from '../ui/label'
import { DialogClose } from '@radix-ui/react-dialog'
import { supabase } from '@/lib/utils'
import { toast } from 'sonner'
import { mutate } from 'swr'

export function RemoveUser ({
  username,
  projectName,
  title,
  description
}) {
  const { dictionary } = useLang()

  const handleDeleteUser = () => {
    try {
      const removeUser = () => {
        return new Promise((resolve, reject) => {
          (async () => {
            await supabase.from('people-project').delete()
              .eq('username', username)
              .eq('project', projectName)
              .then(() => {
              // Actualización de los datos en la interfaz
                mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people-project?project=eq.${projectName}&select=*,people(*)`)
                resolve()
              }).catch((error) => {
                console.error(error)
                reject(error)
              })
          })()
        })
      }

      toast.promise(removeUser, {
        loading: dictionary.people['toast-remove-loading'],
        success: () => dictionary.people['toast-remove-success'],
        error: () => dictionary.people['toast-error']
      })
    } catch (error) {
      const { path, message } = JSON.parse(error.message)[0]
      toast.error(path[0] + ': ' + message)
    }
  }

  return (
    <AlertDialog>
      <div className="w-full flex flex-row items-center justify-between gap-8 p-4 rounded-lg border border-red-600 divide-red-600">
        <div className='flex flex-col'>
          <Label className='text-base'>{title}</Label>
          <Label className='text-muted-foreground text-sm'>{description}</Label>
        </div>

        <AlertDialogTrigger asChild>
            <Button id='delete-member' className={'bg-red-500 hover:bg-red-700 w-32'}>{dictionary.common.delete}</Button>
        </AlertDialogTrigger>
      </div>

      <AlertDialogContent>
          <AlertDialogHeader>
              <AlertDialogTitle>{dictionary.confirmation['confirmation-title']}</AlertDialogTitle>
              <AlertDialogDescription>{dictionary.confirmation['confirmation-desc-delete']}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
          <AlertDialogCancel>{dictionary.common.cancel}</AlertDialogCancel>
          <DialogClose asChild>
            <Button id='confirmation-delete' onClick={handleDeleteUser} className={'bg-red-500 hover:bg-red-700'}>{dictionary.confirmation['confirmation-delete']}</Button>
          </DialogClose>
          </AlertDialogFooter>
      </AlertDialogContent>
  </AlertDialog>
  )
}
