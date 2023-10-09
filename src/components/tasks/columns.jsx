'use client'

import { CaretSortIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'

export const columns = [
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="flex items-start"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Name
          <CaretSortIcon className="h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="lowercase">
        {row.getValue('name')}
      </div>
    )
  }, {
    accessorKey: 'description',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="flex items-start"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Description
          <CaretSortIcon className="h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue('description')}</div>
  }
]
