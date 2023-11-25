'use client'

import { useState } from 'react'
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
import { mutate } from 'swr'
import { useLang } from '@/context/language-context'
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
import { teamSchema } from '@/lib/schemas'
import { getForm, supabase } from '@/lib/utils'

export function DataTableRowActions ({ row }) {
  const { dictionary } = useLang()
  const { name: team } = row.original
  const [form, setForm] = useState(getForm(teamSchema._def.shape()))

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

  const setter = ({ key, value, type }) => {
    if (type === 'bool') {
      const { values } = teamSchema._def.shape()[key]._def.innerType._def
      return setForm({ ...form, [key]: values[Number(!value)] })
    }
    return setForm({ ...form, [key]: value })
  }

  return (
    <Sheet className="z-50">
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
            <SheetTrigger className='w-full text-left'>
              Edit
            </SheetTrigger>
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
      <SheetContent side="right">
      <form onSubmit={e => console.log(e)}>
          <SheetHeader>
            <SheetTitle className="capitalize">{dictionary.teams['edit-team']}</SheetTitle>
            <SheetDescription>
              {dictionary.teams['new-table-description']}
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
              list={[]}
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
                {dictionary.common.save}
              </Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  )
}
