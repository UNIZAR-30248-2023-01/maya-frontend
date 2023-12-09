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
import { normalize, supabase } from '@/lib/utils'
import { toast } from 'sonner'
import useSWR, { mutate } from 'swr'
import { DialogClose } from '@radix-ui/react-dialog'

export function AddTeam ({
  title,
  description,
  triggerBtn,
  actionBtn,
  data,
  projectName
}) {
  let { data: teams } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/teams?select=name`)
  teams = teams?.map(t => t.name)

  const { dictionary } = useLang()
  const [form, setForm] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      // Se añade un equipo a un proyecto existente y se actualiza el proyecto para que
      // contenga a los integrantes del equipo añadido si no los tenía ya.
      const addTeam = () => {
        return new Promise((resolve, reject) => {
          (async () => {
            await supabase.from('teams-project').insert(form.map((team) => ({
              team,
              project: projectName
            }))).select()
              .then(async (res) => {
                // recupero los equipos añadidos
                const teams = res.data.map((team) => team.team)
                // recupero los integrantes de los equipos añadidos
                let members = await supabase.from('people-teams').select().in('team', teams)
                  .then((res) => res.data.map((person) => person.username))
                // Elimino los integrantes duplicados
                members = [...new Set(members)]

                // Inserto los integrantes de los equipos añadidos en el proyecto
                await supabase.from('people-project').upsert(members.map((member) => ({
                  username: member,
                  project: projectName,
                  role: 'member'
                })))
                // Actualización de los datos en la interfaz
                mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/teams?select=*,teams-project(*),people(*)`)
                mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people-project?select=*`)
                resolve()
              }).catch((error) => {
                console.error(error)
                reject(error)
              })
          })()
        })
      }

      toast.promise(addTeam, {
        loading: dictionary.people['toast-loading'],
        success: () => dictionary.people['toast-success'],
        error: () => dictionary.people['toast-error']
      })
    } catch (error) {
      const { path, message } = JSON.parse(error.message)[0]
      toast.error(path[0] + ': ' + message)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button id="add-team" className="capitalize h-8">{triggerBtn}</Button>
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
                id="teams"
                label={dictionary.teams['teams-column']}
                searchId={'add-team-project-input'}
                placeholder={dictionary.teams.search}
                list={teams?.map((team) => ({ value: team, label: normalize(team) }))}
                values={form || []}
                dictionary={dictionary}
                normalized={true}
                onChange={(e) => {
                  console.log('form', form)
                  const teams = form
                  console.log('value', e)
                  const isSelected = teams ? teams.includes(e) : false
                  if (isSelected) {
                    return setForm(teams?.filter((team) => team !== e))
                  }
                  setForm([...form, e])
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
