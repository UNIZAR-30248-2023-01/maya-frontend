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
import { mutate } from 'swr'
import { DialogClose } from '@radix-ui/react-dialog'

export function AddTeam ({
  title,
  description,
  triggerBtn,
  actionBtn,
  teams,
  projectName,
  organization
}) {
  const { dictionary } = useLang()
  const [form, setForm] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log(form)
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
                  project: projectName
                })))
                // Actualización de los datos en la interfaz
                mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/teams-project?project=eq.${projectName}&select=team`)
                mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/teams?organization=eq.${organization}&select=*,people(*)`)
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
        <Button id="add-team" className='capitalize h-8 hover:bg-custom-lighterYellow text-black bg-custom-mustard'>{triggerBtn}</Button>
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
                list={teams?.map((team) => ({ value: team.name, label: normalize(team.name) }))}
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
              <Button id='add-team-project'type="submit" className="capitalize">{actionBtn}</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
