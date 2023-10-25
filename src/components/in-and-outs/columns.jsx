'use client'

import { Badge } from '@/components/ui/badge'
import { visibility, projectStatuses } from '@/lib/constants'
import { DataTableColumnHeader } from '@/components/in-and-outs/data-table-column-header'
import { LuTable2, LuArchive } from 'react-icons/lu'
import { Skeleton } from '@/components/ui/skeleton'


{/* Fichero encargador de nombrar las columnas */}
export const columns = [
  {
    accessorKey: 'day',
    header: ({ column, dictionary }) => {
      return <DataTableColumnHeader column={column} title={dictionary['day-column']} />
    },
    cell: ({ row, dictionary }) => {
      

      {/*
      const { name } = row.original
      if (!name) {
        return (
          <div className="flex items-start space-x-2">
            <Skeleton className='w-5 h-5'/>
          </div>
        )
      }*/}

      return (
        <div className="flex items-start space-x-2">
          <div className='max-w-[150px] flex flex-col gap-y-1'>
            <span className="max-w-full truncate font-medium">
              {row.getValue('day')}
            </span>
          </div>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return row.getValue(id).includes(value)
    }
  },
  {
    accessorKey: 'in',
    header: ({ column, dictionary }) => (
      <DataTableColumnHeader column={column} title={dictionary['in-column']} />
    ),
    cell: ({ row }) => {
      const { name } = row.original
      if (!name) {
        return (
          <div className="flex space-x-2">
            <Skeleton className='w-72 h-4'/>
          </div>
        )
      }

      return (
        <div className="flex space-x-2">
          <span className="max-w-[400px] truncate font-medium">
            {row.getValue('in')}
          </span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    }
  }
  ,
  {
    accessorKey: 'out',
    header: ({ column, dictionary }) => (
      <DataTableColumnHeader column={column} title={dictionary['out-column']} />
    ),
    cell: ({ row }) => {
      const { name } = row.original
      if (!name) {
        return (
          <div className="flex space-x-2">
            <Skeleton className='w-72 h-4'/>
          </div>
        )
      }

      return (
        <div className="flex space-x-2">
          <span className="max-w-[400px] truncate font-medium">
            {row.getValue('out')}
          </span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    }
  },
  {
    accessorKey: 'total',
    header: ({ column, dictionary }) => (
      <DataTableColumnHeader column={column} title={dictionary['total-column']} />
    ),
    cell: ({ row }) => {
      const { name } = row.original
      if (!name) {
        return (
          <div className="flex space-x-2">
            <Skeleton className='w-72 h-4'/>
          </div>
        )
      }

      return (
        <div className="flex space-x-2">
          <span className="max-w-[400px] truncate font-medium">
            {row.getValue('total')}
          </span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    }
  }
]
