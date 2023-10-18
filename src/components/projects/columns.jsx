'use client'

import { Badge } from '@/components/ui/badge'
import { visibility, projectStatuses } from '@/lib/constants'
import { DataTableColumnHeader } from '@/components/projects/data-table-column-header'
import { LuTable2, LuArchive } from 'react-icons/lu'
import { Skeleton } from '@/components/ui/skeleton'

export const columns = [
  {
    accessorKey: 'name',
    header: ({ column, dictionary }) => {
      return <DataTableColumnHeader column={column} title={dictionary['name-column']} />
    },
    cell: ({ row, dictionary }) => {
      const { name } = row.original
      const vis = visibility.find((v) => v.value === row.original.visibility)
      const status = projectStatuses.find((status) => status.value === row.getValue('status'))

      if (!name) {
        return (
          <div className="flex items-start space-x-2">
            <Skeleton className='w-5 h-5'/>
            <div className='max-w-[150px] flex flex-col gap-y-1'>
              <Skeleton className='w-44 h-4'/>
              <Skeleton className='w-24 h-4'/>
            </div>
          </div>
        )
      }

      return (
        <div className="flex items-start space-x-2">
          {status?.value === projectStatuses[0].value && <LuTable2 className='w-5 h-5 mt-1'/>}
          {status?.value === projectStatuses[1].value && <LuArchive className='w-5 h-5 mt-1'/>}
          <div className='max-w-[150px] flex flex-col gap-y-1'>
            <span className="max-w-full truncate font-medium">
              {row.getValue('name')}
            </span>
            {vis && <Badge variant="outline" className='max-w-fit'>{dictionary[vis.value]}</Badge>}
          </div>
        </div>
      )
    }
  },
  {
    accessorKey: 'description',
    header: ({ column, dictionary }) => (
      <DataTableColumnHeader column={column} title={dictionary['description-column']} />
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
            {row.getValue('description')}
          </span>
        </div>
      )
    }
  },
  {
    accessorKey: 'status',
    header: null,
    cell: null
  },
  {
    accessorKey: 'visibility',
    header: null,
    cell: null
  }
]
