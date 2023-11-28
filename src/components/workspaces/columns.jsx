'use client'

import { DataTableColumnHeader } from '@/components/workspaces/data-table-column-header'
import { Skeleton } from '@/components/ui/skeleton'

export const columns = [
  {
    accessorKey: 'name',
    header: ({ column, dictionary }) => {
      return <DataTableColumnHeader column={column} title={dictionary['workspace-column']} />
    },
    cell: ({ row, dictionary }) => {
      if (!row.getValue('name')) return <Skeleton className='w-44 h-4'/>

      return (
        <div className="max-w-[150px] truncate font-medium capitalize">
          {row.getValue('name')}
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return row.getValue(id).includes(value)
    }
  },
  // Columna privada 1
  {
    accessorKey: 'key',
    header: ({ column, dictionary }) => {
      return <div/>
    },
    cell: ({ row, dictionary }) => {
      const { id } = row.original
      if (!id) return <Skeleton className='w-24 h-4'/>

      return <div></div>
    },
    isVisible: false // Oculta la columna
  },
  // Columna privada 2
  {
    accessorKey: 'secretKey',
    header: ({ column, dictionary }) => {
      return <div/>
    },
    cell: ({ row, dictionary }) => {
      const { id } = row.original
      if (!id) return <Skeleton className='w-24 h-4'/>

      return <div></div>
    },
    isVisible: false // Oculta la columna
  }
]