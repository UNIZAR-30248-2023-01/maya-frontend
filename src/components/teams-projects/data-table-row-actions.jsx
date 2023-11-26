'use client'

import Link from 'next/link'
import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { unique, supabase } from '@/lib/utils'
import { toast } from 'sonner'
import { mutate } from 'swr'
import { useLang } from '@/context/language-context'

export function DataTableRowActions ({ row }) {
  const { dictionary } = useLang()
  const { name: team, people } = row.original

  // 1. Recoger los equipos del proyecto y sus integrantes.
  const getTeams = async ({ project }) => {
    let { data: teams } = await supabase
      .from('teams')
      .select(`
        *,
        teams-project(*),
        people(*)
      `)

    teams = teams
      ?.map(item => {
        const projectNames = item['teams-project'].map(team => team.project)
        return { ...item, 'teams-project': projectNames }
      })
      ?.filter(item => item['teams-project'].includes(project) && item.name !== team)

    return teams
  }

  const handleRemove = async (e) => {
    e.preventDefault()
    // Elimina un equipo de un proyecto existente y actualiza el proyecto para que
    // no contenga a los integrantes del equipo eliminado.
    // Si el proyecto tiene mas equipos y estos contienen alguno de los integrantes del equipo
    // eliminado, esos integrantes no se eliminarán del proyecto.
    try {
      const removeTeam = () => {
        return new Promise((resolve, reject) => {
          (async () => {
            const data = await getTeams({ project: 'reign-frontend' })
            const peopleInOtherTeams = unique(data.map(item => item.people).flat(), 'username').map(item => item.username)
            const people2rm = people.filter(item => !peopleInOtherTeams.includes(item.username)).map(item => item.username)

            await supabase
              .from('teams-project')
              .delete()
              .eq('team', team)
              .eq('project', 'reign-frontend')
              .then(async () => {
                await supabase
                  .from('people-project')
                  .delete()
                  .eq('project', 'reign-frontend')
                  .in('username', people2rm)
                  .then(() => {
                    mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/teams?select=*,teams-project(*),people(*)`)
                    mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people-project?select=*`)
                    resolve()
                  })
                  .catch((err) => reject(err))
              })
              .catch((err) => reject(err))
          })()
        })
      }

      toast.promise(removeTeam, {
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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem
          className="cursor-pointer"
        >
          <Link href={`/teams/${String(team).toLowerCase().replace(/ /g, '-')}`} className='w-full'>
          View
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={(e) => handleRemove(e)}
        >
          Delete
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
