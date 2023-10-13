'use client'

import { DataTableColumnHeader } from '@/components/teams/data-table-column-header'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Skeleton } from '@/components/ui/skeleton'

export const columns = [
  {
    accessorKey: 'name',
    header: ({ column, dictionary }) => {
      return <DataTableColumnHeader column={column} title={dictionary['team-column']} />
    },
    cell: ({ row, dictionary }) => {
      const { name } = row.original

      if (!name) return <Skeleton className='w-44 h-4'/>

      return (
        <div className="max-w-[150px] truncate font-medium capitalize">
          {name}
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
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
    }

  }
]
