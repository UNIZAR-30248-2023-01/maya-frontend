'use client'

import { Badge } from '@/components/ui/badge'
import { labels, statuses } from '@/lib/constants'
import { DataTableColumnHeader } from '@/components/projects/data-table-column-header'
import { LuTable2, LuArchive } from 'react-icons/lu'

export const columns = [
  {
    accessorKey: 'title',
    header: ({ column, dictionary }) => {
      return <DataTableColumnHeader column={column} title={dictionary['title-column']} />
    },
    cell: ({ row }) => {
      const label = labels.find((label) => label.value === row.original.label)
      const status = statuses.find((status) => status.value === row.getValue('status'))

      return (
        <div className="flex items-start space-x-2">
          {status?.value === statuses[0].value && <LuTable2 className='w-5 h-5 mt-1'/>}
          {status?.value === statuses[1].value && <LuArchive className='w-5 h-5 mt-1'/>}
          <div className='max-w-[150px] flex flex-col gap-y-1'>
            <span className="max-w-full truncate font-medium">
              {row.getValue('title')}
            </span>
            {label && <Badge variant="outline" className='max-w-fit'>{label.label}</Badge>}
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
    cell: null,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    }
  }
]
