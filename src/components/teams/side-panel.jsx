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
import { Text, TextArea, ComboboxArray, Bool } from '@/components/forms'
import { useLang } from '@/context/language-context'
import { teamSchema } from '@/lib/schemas'
import { getForm, supabase } from '@/lib/utils'
import { toast } from 'sonner'
import { mutate } from 'swr'

export function SidePanel ({
  title,
  description,
  triggerBtn,
  actionBtn,
  data
}) {
  const { dictionary } = useLang()
  const [form, setForm] = useState(getForm(teamSchema._def.shape()))

  const setter = ({ key, value, type }) => {
    if (type === 'bool') {
      const { values } = teamSchema._def.shape()[key]._def.innerType._def
      return setForm({ ...form, [key]: values[Number(!value)] })
    }
    return setForm({ ...form, [key]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { members, ...team } = form

    try {
      teamSchema.parse({ ...team, organization: 'reign' })
      const createTeam = () => {
        return new Promise((resolve, reject) => {
          (async () => {
            // Primera inserción en la tabla 'teams'
            await supabase.from('teams').insert([{ ...team, organization: 'reign' }]).select()
              .then(async (res) => {
                if (res.error !== null) return
                // Segunda inserción en la tabla 'people-teams'
                if (members && members.length > 0) {
                  await supabase.from('people-teams').insert(members.map((assignee) => ({
                    team: res.data[0].id,
                    username: assignee
                  })))
                }
                // Actualización de los datos en la interfaz
                mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/teams?select=*,people(*)`)
                mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people-teams?select=*`)
                resolve()
              }).catch((error) => {
                console.error(error)
                reject(error)
              })
          })()
        })
      }

      toast.promise(createTeam, {
        loading: dictionary.teams['toast-loading'],
        success: () => dictionary.teams['toast-success'],
        error: () => dictionary.teams['toast-error']
      })
    } catch (error) {
      const { path, message } = JSON.parse(error.message)[0]
      toast.error(path[0] + ': ' + message)
    }
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button id="new-team" variant="outline" className='capitalize'>{triggerBtn}</Button>
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
            <Text
              id="name"
              label={dictionary.teams['name-column']}
              placeholder={dictionary.teams['new-team-name-placeholder']}
              onChange={(e) => setter({ key: 'name', value: e.target.value })}
            />
            <TextArea
              id="description"
              label={dictionary.teams['description-column']}
              placeholder={dictionary.teams['new-team-desc-placeholder']}
              onChange={(e) => setter({ key: 'description', value: e.target.value })}
            />
            <ComboboxArray
              id="members"
              label={dictionary.teams['member-column']}
              placeholder={dictionary.teams['new-team-member-placeholder']}
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
            <Bool
              id="visibility"
              label={dictionary.teams.public}
              checked={form.visibility === 'public'}
              onChange={(checked) => setter({ key: 'visibility', value: checked, type: 'bool' })}
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
