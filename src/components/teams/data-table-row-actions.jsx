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
import { toast } from 'sonner'
import { supabase } from '@/lib/utils'
import { mutate } from 'swr'
import { useLang } from '@/context/language-context'

export function DataTableRowActions ({ row }) {
  const { dictionary } = useLang()
  const { name: team } = row.original

  const handleRemove = async (e) => {
    e.preventDefault()

    try {
      const removeTeam = () => {
        return new Promise((resolve, reject) => {
          (async () => {
            await supabase
              .from('teams')
              .delete()
              .eq('name', team)
              .then(() => {
                mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/teams?select=*,people(*)`)
                mutate(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people?select=*`)
                resolve()
              })
              .catch((error) => reject(error))
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
        >
          Edit
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
