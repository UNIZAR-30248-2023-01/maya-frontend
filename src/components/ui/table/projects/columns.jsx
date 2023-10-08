'use client'

import { DataTableColumnHeader } from '@/components/ui/table/projects/data-table-column-header'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export const columns = {
  es: [
    {
      accessorKey: 'name',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='nombre' />
      ),
      cell: ({ row }) => {
        let name = row.getValue('name').toUpperCase().split(' ')
        name = name[0][0] + name[1][0]

        return (
          <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage src={row.original.img} />
            <AvatarFallback>{name}</AvatarFallback>
          </Avatar>
            <span className="max-w-[200px] truncate font-medium">
              {row.getValue('name')}
            </span>
          </div>
        )
      }
    },
    {
      accessorKey: 'description',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='descripcion' />
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
    }, {
      accessorKey: 'created_at',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='fecha de creación' />
      ),
      cell: ({ row }) => {
        const cratedAt = new Date(row.getValue('created_at'))
        const date = cratedAt.toLocaleDateString(undefined, {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
          hour: 'numeric',
          minute: '2-digit'
        })

        return (
          <div className="flex space-x-2">
            <span className="max-w-[500px] truncate font-medium">
              {date}
            </span>
          </div>
        )
      }
    }
  ],
  en: [
    {
      accessorKey: 'name',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='name' />
      ),
      cell: ({ row }) => {
        let name = row.getValue('name').toUpperCase().split(' ')
        name = name[0][0] + name[1][0]

        return (
          <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage src={row.original.img} />
            <AvatarFallback>{name}</AvatarFallback>
          </Avatar>
            <span className="max-w-[200px] truncate font-medium">
              {row.getValue('name')}
            </span>
          </div>
        )
      }
    },
    {
      accessorKey: 'description',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='description' />
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
    }, {
      accessorKey: 'created_at',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='creation date' />
      ),
      cell: ({ row }) => {
        const cratedAt = new Date(row.getValue('created_at'))
        const date = cratedAt.toLocaleDateString(undefined, {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
          hour: 'numeric',
          minute: '2-digit'
        })

        return (
          <div className="flex space-x-2">
            <span className="max-w-[500px] truncate font-medium">
              {date}
            </span>
          </div>
        )
      }
    }
  ]

}
