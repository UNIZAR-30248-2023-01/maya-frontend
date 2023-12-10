'use client'

import { useState } from 'react'
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
import useSWR, { mutate } from 'swr'
import { DialogClose } from '@radix-ui/react-dialog'

export function InviteMember ({
  title,
  description,
  triggerBtn,
  actionBtn,
  data,
  teamName,
  organization
}) {
  let { data: people } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people-org?organization=eq.${organization}&select=username`)
  const { dictionary } = useLang()
  const [form, setForm] = useState(getForm(peopleSchema._def.shape()))

  people = people?.filter(e => (!data.members.find(m => m.username === e.username)))

  const setter = ({ key, value }) => setForm({ ...form, [key]: value })

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { members } = form

    try {
      peopleSchema.parse({ members })
      if (members && members.length > 0) {
        const invitePeople = () => {
          return new Promise((resolve, reject) => {
            (async () => {
              await supabase.from('people-teams').insert(members.map((member) => ({
                username: member,
                team: teamName,
                role: 'member'
              }))).select()
                .then(() => {
                // Actualización de los datos en la interfaz
                  mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people-teams?team=eq.${teamName}&select=*,people(*)`)
                  resolve()
                }).catch((error) => {
                  console.error(error)
                  reject(error)
                })
            })()
          })
        }

        toast.promise(invitePeople, {
          loading: dictionary.people['toast-loading'],
          success: () => dictionary.people['toast-success'],
          error: () => dictionary.people['toast-error']
        })
        setter({ key: 'members', value: [] })
      }
    } catch (error) {
      const { path, message } = JSON.parse(error.message)[0]
      toast.error(path[0] + ': ' + message)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button id="invite-button" className="capitalize h-8">{triggerBtn}</Button>
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
                searchId="invite-filter"
                list={people?.map((member) => ({ value: member.username, label: member.username }))}
                values={form.members || []}
                dictionary={dictionary}
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
            <DialogClose asChild>
              <Button type="submit" className="capitalize">{actionBtn}</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
