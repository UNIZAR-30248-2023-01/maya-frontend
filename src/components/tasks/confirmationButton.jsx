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
import { useRouter } from 'next/navigation'

export function ConfirmationTaskButton ({
  isEdit,
  taskId,
  projectName,
  form,
  taskPeople,
  setEdit
}) {
  const { dictionary } = useLang()
  const router = useRouter()

  const badForm = !(form.description || form.estimated || form.label || form.status || form.end_date || form.assignees)
  const handleSubmit = () => {
    if (isEdit) {
      try {
        const editTask = () => {
          return new Promise((resolve, reject) => {
            (async () => {
              await supabase.from('tasks').update({
                description: form.description === null ? undefined : form.description,
                estimated: form.estimated === null ? undefined : form.estimated,
                label: form.label === null ? undefined : form.label,
                status: form.status === null ? undefined : form.status,
                end_date: form.end_date === null ? undefined : form.end_date
              }).eq('id', taskId)
                .select()
                .then(async (res) => {
                  if (res.error !== null) return
                  // Segunda inserción en la tabla 'people-tasks'
                  if (form.assignees) {
                    if (form.assignees.length > 0) {
                      form.assignees.forEach(async member => {
                        if (!taskPeople.includes(member)) {
                          await supabase.from('people-tasks').insert({
                            tasks: taskId,
                            username: member
                          }).select()
                            .then(() => {
                              mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people-tasks?tasks=eq.${taskId}&select=*,people(*)`)
                            })
                        }
                      })
                    }
                    taskPeople.forEach(async member => {
                      if (!form.assignees.includes(member.username)) {
                        await supabase.from('people-tasks').delete()
                          .eq('tasks', taskId)
                          .eq('username', member.username)
                          .then(() => {
                            mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people-tasks?tasks=eq.${taskId}&select=*,people(*)`)
                          })
                      }
                    })
                  }
                  // Actualización de los datos en la interfaz
                  mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/tasks?id=eq.${taskId}&select=*`)
                  resolve()
                }).catch((error) => {
                  console.error(error)
                  reject(error)
                })
            })()
          })
        }

        toast.promise(editTask, {
          loading: dictionary.tasks['toast-edit-loading'],
          success: () => dictionary.tasks['toast-edit-success'],
          error: () => dictionary.tasks['toast-error']
        })
      } catch (error) {
        const { path, message } = JSON.parse(error.message)[0]
        toast.error(path[0] + ': ' + message)
      }
      setEdit(false)
      router.refresh()
    } else {
      try {
        const deleteTask = () => {
          return new Promise((resolve, reject) => {
            (async () => {
              await supabase.from('tasks').delete()
                .eq('id', taskId)
                .then(() => {
                  mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/tasks?project=eq.${projectName}&select=*,people-tasks(username)`)
                  resolve()
                }).catch((error) => {
                  console.error(error)
                  reject(error)
                })
            })()
          })
        }

        toast.promise(deleteTask, {
          loading: dictionary.tasks['toast-delete-loading'],
          success: () => dictionary.tasks['toast-delete-success'],
          error: () => dictionary.tasks['toast-error']
        })
      } catch (error) {
        const { path, message } = JSON.parse(error.message)[0]
        toast.error(path[0] + ': ' + message)
      }
      router.back()
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          type="submit"
          disabled={isEdit && badForm}
          className={!isEdit && 'bg-red-500 hover:bg-red-700'}
        >
          {isEdit ? dictionary.common.save : dictionary.common.delete}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {dictionary.confirmation['confirmation-title']}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {isEdit
              ? dictionary.confirmation['confirmation-desc-edit']
              : dictionary.confirmation['confirmation-desc-delete']}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{dictionary.common.cancel}</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleSubmit}
            className={
              isEdit
                ? 'bg-green-500 hover:bg-green-700'
                : 'bg-red-500 hover:bg-red-700'
            }
          >
            {isEdit
              ? dictionary.confirmation['confirmation-edit-task']
              : dictionary.confirmation['confirmation-delete-task']}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
