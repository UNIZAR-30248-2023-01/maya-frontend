'use client'

import { DataTableColumnHeader } from './data-table-column-header'
import {
  Avatar,
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
          <span className="max-w-[300px] truncate font-medium pl-1 flex items-center gap-4">
            <Avatar>
              <AvatarImage src="/assets/avatars/memojis/4.webp" />
            </Avatar>
            <p>{row.original.user.name}</p>
          </span>
        </div>
      )
    }
  },
  {
    accessorKey: 'username',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Usuario" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex">
          <span className="max-w-[300px] truncate font-medium pl-1">
            {row.original.user.username}
          </span>
        </div>
      )
    },
    enableSorting: false,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    }
  },
  {
    accessorKey: 'email',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Correo" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex">
          <span className="max-w-[300px] truncate font-medium pl-1">
            {row.original.user.email}
          </span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
    enableSorting: false
  }
]

export const englishColumns = [
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex">
          <span className="max-w-[300px] truncate font-medium pl-1 flex items-center gap-4">
            <Avatar>
              <AvatarImage src="/assets/avatars/memojis/4.webp" />
            </Avatar>
            {row.original.user.name}
          </span>
        </div>
      )
    }
  },
  {
    accessorKey: 'username',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Username" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex">
          <span className="max-w-[300px] truncate font-medium pl-1">
            {row.original.user.username}
          </span>
        </div>
      )
    },
    enableSorting: false,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    }
  },
  {
    accessorKey: 'email',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex">
          <span className="max-w-[300px] truncate font-medium pl-1">
            {row.original.user.email}
          </span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
    enableSorting: false
  }
]
