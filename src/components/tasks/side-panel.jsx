'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { Text, TextArea, Number, ComboboxEnum, ComboboxArray, DatePicker } from '@/components/forms'
import { useLang } from '@/context/language-context'
import { tasksLabels, tasksStatuses } from '@/lib/constants'
import { getForm, supabase } from '@/lib/utils'
import { tasksSchema } from '@/lib/schemas'
import { toast } from 'sonner'
import { mutate } from 'swr'

export function SidePanel ({
  title,
  description,
  projectName,
  triggerBtn,
  actionBtn,
  data
}) {
  const { dictionary } = useLang()
  const [form, setForm] = useState(getForm(tasksSchema._def.shape()))

  const badForm = !(form.name && form.estimated && form.label && form.status)

  const setter = ({ key, value }) => {
    return setForm({ ...form, [key]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { assignees, ...task } = form

    try {
      tasksSchema.parse({ ...task, project: projectName })
      const createTask = () => {
        return new Promise((resolve, reject) => {
          (async () => {
            // Primera inserción en la tabla 'tasks'
            await supabase.from('tasks').insert([{ ...task, project: projectName }]).select()
              .then(async (res) => {
                if (res.error !== null) return
                // Segunda inserción en la tabla 'people-tasks'
                if (assignees && assignees.length > 0) {
                  await supabase.from('people-tasks').insert(assignees.map((assignee) => ({
                    tasks: res.data[0].id,
                    username: assignee
                  })))
                }
                // Actualización de los datos en la interfaz
                mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/tasks?project=eq.${projectName}&select=*,people-tasks(username)`)
                mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people?select=*`)
                resolve()
              }).catch((error) => {
                console.error(error)
                reject(error)
              })
          })()
        })
      }

      toast.promise(createTask, {
        loading: dictionary.tasks['toast-loading'],
        success: () => dictionary.tasks['toast-success'],
        error: () => dictionary.tasks['toast-error']
      })
    } catch (error) {
      const { path, message } = JSON.parse(error.message)[0]
      toast.error(path[0] + ': ' + message)
    }
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button id='new-task' className='capitalize h-8'>
          {triggerBtn}
        </Button>
      </SheetTrigger>
      <SheetContent className='min-w-[600px]'>
        <form onSubmit={e => handleSubmit(e)} className='h-full'>
          <SheetHeader>
            <SheetTitle className='capitalize'>{title}</SheetTitle>
            <SheetDescription>{description}</SheetDescription>
          </SheetHeader>
          <div className='flex flex-col justify-between h-full'>
            <div className='grid gap-6 py-4'>
              <Text
                id='name'
                label={dictionary.tasks['name-column'] + '*'}
                placeholder={dictionary.tasks['new-task-name-placeholder']}
                onChange={(e) => setter({ key: 'name', value: e.target.value })}
              />

              <TextArea
                id='description'
                label={dictionary.tasks['description-column']}
                placeholder={dictionary.tasks['new-task-description-placeholder']}
                onChange={(e) => setter({ key: 'description', value: e.target.value })}
              />

              <ComboboxArray
                id='assignees'
                label={dictionary.tasks['assignees-column']}
                placeholder={dictionary.tasks['assignees-column']}
                list={data.assignees.map((assignee) => ({ value: assignee.username, label: assignee.username }))}
                dictionary={dictionary}
                values={form.assignees || []}
                onChange={(e) => {
                  const assigness = form.assignees || []
                  const isSelected = assigness ? assigness.includes(e) : false
                  if (isSelected) {
                    return setter({ key: 'assignees', value: assigness?.filter((assignee) => assignee !== e) })
                  }
                  setter({ key: 'assignees', value: [...assigness, e] })
                }}
              />

              <Number
                min={0}
                id='estimated'
                label={dictionary.tasks['estimated-column'] + '*'}
                placeholder={dictionary.tasks['new-task-estimated-placeholder']}
                onChange={(e) => setter({ key: 'estimated', value: e.target.valueAsNumber })}
              />

              <DatePicker
                id="end-date"
                label={dictionary.tasks['end-date-column']}
                placeholder={dictionary.tasks['new-end-date-placeholder']}
                value={form.end_date}
                onChange={(e) => setter({ key: 'end_date', value: e || null })} />

              <div className='flex justify-between gap-4'>

                <ComboboxEnum
                  id='status'
                  label={dictionary.tasks['status-column'] + '*'}
                  list={tasksStatuses}
                  value={form.status}
                  dictionary={dictionary.status}
                  searchDictionary={dictionary.search}
                  onChange={(e) => {
                    const original = Object.keys(dictionary.status).find(key => key === e)
                    setter({ key: 'status', value: original === form.status ? null : original })
                  }}
                />

                <ComboboxEnum
                  id='label'
                  label={dictionary.tasks['label-column'] + '*'}
                  list={tasksLabels}
                  value={form.label}
                  dictionary={dictionary.labels}
                  searchDictionary={dictionary.search}
                  onChange={(e) => {
                    const original = Object.keys(dictionary.labels).find(key => key === e)
                    setter({ key: 'label', value: original === form.label ? null : original })
                  }}
                />
              </div>
            </div>
            <SheetFooter className='pb-12'>
              <SheetClose asChild>
                <Button id="create-task" type='submit' disabled={badForm}>{actionBtn}</Button>
              </SheetClose>
            </SheetFooter>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  )
}
