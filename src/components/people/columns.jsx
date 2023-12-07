'use client'

import { Badge } from '@/components/ui/badge'
import { DataTableColumnHeader } from '@/components/people/data-table-column-header'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Label } from '@/components/ui/label'
import { DataTableRowActions } from '@/components/people/data-table-row-actions'
import { Skeleton } from '@/components/ui/skeleton'
import { roles } from '@/lib/constants'

export const columns = [
  {
    accessorKey: 'username',
    header: ({ column, dictionary }) => {
      return <DataTableColumnHeader column={column} title={dictionary['member-column']} />
    },
    cell: ({ row, dictionary }) => {
      if (!row.original.people?.username) {
        const username = row?.original?.username || row?.original?.people?.username
        if (!username) {
          return (
            <div className='flex items-start space-x-2'>
              <Skeleton className='rounded-full'>
                <Avatar>
                  <AvatarImage />
                </Avatar>
              </Skeleton>
              <div className='max-w-[150px] flex flex-col gap-y-1'>
                <Skeleton className='w-44 h-4' />
                <Skeleton className='w-24 h-4' />
              </div>
            </div>
          )
        }
      }

      const avatar = row?.original?.avatar || row?.original?.people?.avatar
      const username = row?.original?.avatar || row?.original?.people?.avatar
      const firstname = row?.original?.firstname || row?.original?.people?.firstname
      const lastname = row?.original?.lastname || row?.original?.people?.lastname

      return (
        <div className="flex items-center space-x-4 group">
          <Avatar>
            <AvatarImage src={avatar} />
            <AvatarFallback>{String(firstname[0]).toUpperCase() + String(lastname[0]).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className='flex flex-col gap-0.5'>
            <Label className="text-sm font-medium leading-none capitalize">{firstname + ' ' + lastname}</Label>
            <Label className="text-sm text-muted-foreground font-normal">{username}</Label>
          </div>
        </div>

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

      const role = roles.find(role => role.value === row.getValue('role'))

      return (
        <Badge id={role.id} variant='outline' className='max-w-fit'>{dictionary[role.value]}</Badge>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    }
  }, {
    id: 'actions',
    cell: ({ row, owner }) => {
      const { username } = row.original
      if (!username || !owner) return null

      return <div className='flex justify-end pr-4'><DataTableRowActions row={row} /></div>
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    }
  }
]
