'use client'

import { priorities, statuses } from '@/data/data'
import { DataTableColumnHeader } from './data-table-column-header'
import { DataTableRowActions } from './data-table-row-actions'
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@/components/ui/avatar'

export const columns = [
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Task name" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex">
          <span className="max-w-[300px] truncate font-medium">
            {row.getValue('name')}
          </span>
        </div>
      )
    }
  },
  {
    accessorKey: 'assignee',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Assignee" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[300px] truncate font-medium">
            <ul className='flex items-start'>
              <li key={row.getValue('assignee').at(0).id}>
                <Avatar className='border-2 border-white'>
                  <AvatarImage src="/assets/avatars/memojis/4.webp" />
                  <AvatarFallback>
                    {row.getValue('assignee').at(0).users.name.split(' ').at(0)[0]
                      .concat(row.getValue('assignee').at(0).users.name.split(' ').at(1)[0])}
                  </AvatarFallback>
                </Avatar>
              </li>
              {row.getValue('assignee').slice(1).map((avatar) => {
                return (
                  <li key={avatar.id}>
                    <Avatar className='-ml-3 border-2 border-white'>
                      <AvatarImage src="/assets/avatars/memojis/1.webp" />
                      <AvatarFallback>
                        {avatar.users.name.split(' ').at(0)[0]
                          .concat(avatar.users.name.split(' ').at(1)[0])}
                      </AvatarFallback>
                    </Avatar>
                  </li>
                )
              })}
            </ul>

          </span>
        </div>
      )
    },
    enableSorting: false
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue('status')
      )

      if (!status) {
        return null
      }

      return (
        <div className="flex w-[100px] items-center">
          {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{status.label}</span>
        </div>
      )
    },
    enableSorting: false,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    }
  },
  {
    accessorKey: 'priority',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Priority" />
    ),
    cell: ({ row }) => {
      const priority = priorities.find(
        (priority) => priority.value === row.getValue('priority')
      )

      if (!priority) {
        return null
      }

      return (
        <div className="flex items-center">
          {priority.icon && (
            <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{priority.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
    enableSorting: false
  },
  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />
  }
]
