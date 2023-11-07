'use client'

import { Badge } from '@/components/ui/badge'
import { DataTableColumnHeader } from '@/components/people/data-table-column-header'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { DataTableRowActions } from '@/components/people/data-table-row-actions'
import { Skeleton } from '@/components/ui/skeleton'

export const columns = [
  {
    accessorKey: 'username',
    header: ({ column, dictionary }) => {
      return <DataTableColumnHeader column={column} title={dictionary['member-column']} />
    },
    cell: ({ row, dictionary }) => {
      const { avatar, firstname, lastname, username } = row.original

      if (!username) {
        return (
          <div className="flex items-start space-x-2">
            <Skeleton className="rounded-full">
              <Avatar>
                <AvatarImage />
              </Avatar>
            </Skeleton>
            <div className='max-w-[150px] flex flex-col gap-y-1'>
              <Skeleton className='w-44 h-4'/>
              <Skeleton className='w-24 h-4'/>
            </div>
          </div>
        )
      }

      return (
        <div className="flex items-start space-x-2">
          <Avatar>
            <AvatarImage src={avatar} />
            <AvatarFallback className="uppercase">{String(firstname)[0] + String(lastname)[0]}</AvatarFallback>
          </Avatar>
          <div className='max-w-[150px] flex flex-col gap-y-1'>
            <span className="max-w-full truncate font-medium capitalize">
              {firstname + ' ' + lastname}
            </span>
            <Badge variant="outline" className='max-w-fit'>{username}</Badge>
          </div>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return row.getValue(id).includes(value)
    }
  }, {
    accessorKey: 'role',
    header: null,
    cell: ({ row }) => {
      const { username } = row.original
      if (!username) {
        return <Skeleton variant="outline" className='w-24 h-4'/>
      }

      return (
        row.getValue('role')
          ? <Badge variant="outline" className='max-w-fit'>{row.getValue('role')}</Badge>
          : <Badge variant="outline" className='max-w-fit'>member</Badge>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    }
  }, {
    id: 'actions',
    cell: ({ row }) => {
      const { username } = row.original
      if (!username) return null

      return <DataTableRowActions row={row} />
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    }
  }
]
