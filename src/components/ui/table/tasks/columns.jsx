'use client'

import { spanishPriorities, englishPriorities, spanishStatuses, englishStatuses } from '@/data/data'
import { DataTableColumnHeader } from './data-table-column-header'
import { DataTableRowActions } from './data-table-row-actions'
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@/components/ui/avatar'

export const spanishColumns = [
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nombre" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex">
          <span className="max-w-[300px] truncate font-medium pl-1">
            {row.getValue('name')}
          </span>
        </div>
      )
    }
  },
  {
    accessorKey: 'assignee',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Responsables" />
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
      <DataTableColumnHeader column={column} title="Estado" />
    ),
    cell: ({ row }) => {
      const status = spanishStatuses.find(
        (status) => status.value === row.getValue('status')
      )

      if (!status) {
        return null
      }

      return (
        <div className="flex items-center justify-start">
          {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}

          <div className='w-fit'>{status.label}</div>
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
      <DataTableColumnHeader column={column} title="Prioridad" />
    ),
    cell: ({ row }) => {
      const priority = spanishPriorities.find(
        (priority) => priority.value === row.getValue('priority')
      )

      if (!priority) {
        return null
      }

      return (
        <div className="flex items-center justify-start">
          {priority.icon && (
            <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <div className='w-fit'>{priority.label}</div>
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

export const englishColumns = [
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Task name" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex">
          <span className="max-w-[300px] truncate font-medium pl-1">
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
      const status = englishStatuses.find(
        (status) => status.value === row.getValue('status')
      )

      if (!status) {
        return null
      }

      return (
        <div className="flex items-center justify-start">
          {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <div className='w-fit'>{status.label}</div>
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
      const priority = englishPriorities.find(
        (priority) => priority.value === row.getValue('priority')
      )

      if (!priority) {
        return null
      }

      return (
        <div className="flex items-center justify-start">
          {priority.icon && (
            <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <div className='w-fit'>{priority.label}</div>
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
