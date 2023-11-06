'use client'

import { Badge } from '@/components/ui/badge'
import { DataTableColumnHeader } from '@/components/people/data-table-column-header'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { DataTableRowActions } from '@/components/people/data-table-row-actions'
import { Skeleton } from '@/components/ui/skeleton'
import { TeamMember } from '../team-member'

export const columns = [
  {
    accessorKey: 'username',
    header: ({ column, dictionary }) => {
      return <DataTableColumnHeader column={column} title={dictionary['member-column']} />
    },
    cell: ({ row, dictionary }) => {
      if (!row.original.people?.username) {
        return (
          <div className='flex items-start space-x-2'>
            <Skeleton className='rounded-full'>
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
        <TeamMember user={{
          name: row.original.people.firstname,
          lastname: row.original.people.lastname,
          username: row.original.username,
          src: row.original.people.avatar
        }}/>
      )
    },
    filterFn: (row, id, value) => {
      return row.getValue(id).includes(value)
    }
  }, {
    accessorKey: 'role',
    header: ({ column, dictionary }) => {
      return <DataTableColumnHeader column={column} title={dictionary.role} />
    },
    cell: ({ row, dictionary }) => {
      const { username } = row.original
      if (!username) {
        return <Skeleton variant='outline' className='w-24 h-4'/>
      }

      return (
        <Badge variant='outline' className='max-w-fit'>{dictionary[row.getValue('role')]}</Badge>
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

      return <div className='flex justify-end pr-4'><DataTableRowActions row={row} /></div>
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    }
  }
]
