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
import * as Field from '@/components/forms/package'
import { useLang } from '@/context/language-context'
import { tasksSchema } from '@/lib/schemas'
import { getForm, supabase } from '@/lib/utils'
import { toast } from 'sonner'
import { mutate } from 'swr'
import { tasksStatuses, tasksLabels } from '@/lib/constants'

export function SidePanel ({
  title,
  description,
  triggerBtn,
  actionBtn,
  data
}) {
  const { dictionary } = useLang()
  const [form, setForm] = useState(getForm(tasksSchema._def.shape()))

  const setter = ({ key, value }) => {
    return setForm({ ...form, [key]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { assignees, ...task } = form

    try {
      tasksSchema.parse({ ...task, project: 'reign-frontend' })
      const createTask = () => {
        return new Promise((resolve, reject) => {
          (async () => {
          // Primera inserción en la tabla 'tasks'
            await supabase.from('tasks').insert([{ ...task, project: 'reign-frontend' }]).select()
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
                mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/tasks?select=*,people-tasks(username)`)
                mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people?select=*,people-project(*)`)
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
        <Button id="new-task" variant="outline" className='capitalize'>{triggerBtn}</Button>
      </SheetTrigger>
      <SheetContent>
        <form onSubmit={e => handleSubmit(e)}>
          <SheetHeader>
            <SheetTitle className="capitalize">{title}</SheetTitle>
            <SheetDescription>
              {description}
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <Field.Text
              id="name"
              label={dictionary.tasks['tasks-column']}
              placeholder={dictionary.tasks['new-table-name-placeholder']}
              onChange={(e) => setter({ key: 'name', value: e.target.value })}
            />
            <Field.ComboboxArray
              id="assignees"
              label={dictionary.tasks['assignees-column']}
              list={data.assignees.map((assignee) => ({ value: assignee.username, label: assignee.username }))}
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
            <Field.ComboboxEnum
              id="label"
              label={dictionary.tasks['label-column']}
              list={tasksLabels}
              value={dictionary.labels[form.label]}
              dictionary={dictionary.labels}
              onChange={(e) => {
                const original = Object.keys(dictionary.labels).find(key => dictionary.labels[key] === e)
                setter({ key: 'label', value: original === form.label ? null : original })
              }}
            />
            <Field.ComboboxEnum
              id="status"
              label={dictionary.tasks['status-column']}
              list={tasksStatuses}
              value={dictionary.status[form.status]}
              dictionary={dictionary.status}
              onChange={(e) => {
                const original = Object.keys(dictionary.status).find(key => dictionary.status[key] === e)
                setter({ key: 'status', value: original === form.status ? null : original })
              }}
            />
            <Field.Number
              id="estimated"
              label={dictionary.tasks['estimated-column']}
              min={0}
              onChange={(e) => setter({ key: 'estimated', value: Number(e.target.value) })}
            />
            <Field.DatePicker
              id="end-date"
              label={dictionary.tasks['end-date-column']}
              value={form.end_date}
              placeholder={dictionary.tasks['end-date-placeholder']}
              onChange={(e) => setter({ key: 'end_date', value: e || null })}
            />
          </div>
          <SheetFooter className="">
            <SheetClose asChild>
              <Button
                type="submit"
              >
                {actionBtn}
              </Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  )
}
