'use client'

import { DataTableColumnHeader } from '@/components/ui/table/projects/data-table-column-header'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export const columns = [
  {
    accessorKey: 'title',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center space-x-2">
        <Avatar>
          <AvatarImage src="/assets/avatars/memojis/1.webp" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
          <span className="max-w-[200px] truncate font-medium">
            {row.getValue('title')}
          </span>
        </div>
      )
    }
  },
  {
    accessorKey: 'description',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue('description')}
          </span>
        </div>
      )
    }
  }
]
