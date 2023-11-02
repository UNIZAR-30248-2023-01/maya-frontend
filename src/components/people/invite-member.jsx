'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { ComboboxArray } from '@/components/forms'
import { useLang } from '@/context/language-context'
import { peopleSchema } from '@/lib/schemas'
import { getForm, supabase } from '@/lib/utils'
import { toast } from 'sonner'
import { mutate } from 'swr'

export function InviteMember ({
  title,
  description,
  triggerBtn,
  actionBtn,
  data
}) {
  const { dictionary } = useLang()
  const [form, setForm] = useState(getForm(peopleSchema._def.shape()))

  const setter = ({ key, value }) => setForm({ ...form, [key]: value })

  useEffect(() => {
    console.log(form)
  }, [form])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { assignees, ...task } = form

    try {
      peopleSchema.parse({ ...task, project: 'reign-frontend' })
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
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="capitalize">{triggerBtn}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={e => handleSubmit(e)}>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>
              {description}
            </DialogDescription>
          </DialogHeader>
          <div className="flex w-full max-w-sm items-end space-x-2 mt-4">
            <div className='grid gap-4 w-full'>
              <ComboboxArray
                id="members"
                label={dictionary.people['member-column']}
                placeholder={dictionary.people.search}
                list={data.members.map((member) => ({ value: member.username, label: member.username }))}
                values={form.members || []}
                onChange={(e) => {
                  const members = form.members || []
                  const isSelected = members ? members.includes(e) : false
                  if (isSelected) {
                    return setter({ key: 'members', value: members?.filter((member) => member !== e) })
                  }
                  setter({ key: 'members', value: [...members, e] })
                }}
              />
            </div>
            <Button type="submit" className="capitalize">{actionBtn}</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
