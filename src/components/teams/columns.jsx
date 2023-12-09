'use client'

import { DataTableColumnHeader } from '@/components/teams/data-table-column-header'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Skeleton } from '@/components/ui/skeleton'
import { DataTableRowActions } from '@/components/teams/data-table-row-actions'
import { normalize } from '@/lib/utils'

export const columns = [
  {
    accessorKey: 'name',
    header: ({ column, dictionary }) => {
      return <DataTableColumnHeader column={column} title={dictionary['team-column']} />
    },
    cell: ({ row, dictionary }) => {
      if (!row.getValue('name')) return <Skeleton className='w-44 h-4'/>

      return (
        <div className="max-w-[150px] truncate font-medium capitalize">
          {normalize(row.getValue('name'))}
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return normalize(row.getValue(id)).includes(value)
    }
  }, {
    accessorKey: 'people',
    header: null,
    cell: ({ row }) => {
      const { name } = row.original
      if (!name) {
        return (
          <div className="flex items-end space-x-0.5">
            {row.getValue('people').map((person, id) => (
              <Skeleton key={id} className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage />
                </Avatar>
              </Skeleton>
            ))}
          </div>
        )
      }

      return (
        <div className="flex items-end space-x-0.5">
          {row.getValue('people').map((person, id) => (
            <Avatar key={id}>
              <AvatarImage src={person.avatar} />
              <AvatarFallback className="uppercase">{String(person.firstname)[0] + String(person.lastname)[0]}</AvatarFallback>
            </Avatar>
          ))}
        </div>
      )
    },
    filterFn: (row, id, value) => {
      const usernames = row.getValue(id).map(person => person.username)
      return value.some(username => usernames.includes(username))
    }
  }, {
    id: 'actions',
    cell: ({ row }) => {
      const { name } = row.original
      if (!name) return null

      return (
        <div className='flex justify-end pr-4'>
          <DataTableRowActions row={row} />
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    }
  }
]
