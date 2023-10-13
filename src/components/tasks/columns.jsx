'use client'

import { DataTableColumnHeader } from '@/components/tasks/data-table-column-header'
import { Skeleton } from '@/components/ui/skeleton'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { AvatarFallback } from '@radix-ui/react-avatar'
import { Badge } from '@/components/ui/badge'
import { tasksStatuses } from '@/lib/constants'

export const columns = [
  {
    accessorKey: 'name',
    header: ({ column, dictionary }) => {
      return <DataTableColumnHeader column={column} title={dictionary['tasks-column']} />
    },
    cell: ({ row, dictionary }) => {
      const { id } = row.original
      if (!id) return <Skeleton className='w-44 h-4'/>

      return (
        <div className="max-w-[150px] truncate font-medium capitalize">
          {row.getValue('name')}
        </div>
      )
    }
  },
  {
    accessorKey: 'people',
    header: ({ column, dictionary }) => (
      <DataTableColumnHeader column={column} title={dictionary['assignees-column']} />
    ),
    cell: ({ row }) => {
      const { id } = row.original
      if (!id) {
        return (
          <div className="flex">
            {row.getValue('people').map((person, id) => (
              <Skeleton key={id} className='rounded-full'>
                <Avatar className="h-8 w-8">
                  <AvatarImage />
                </Avatar>
              </Skeleton>
            ))}
          </div>
        )
      }

      return (
        <div className="flex">
          {row.getValue('people').map((person, id) => (
            <Avatar key={id} className="h-8 w-8">
              <AvatarImage src={person.avatar} />
              <AvatarFallback className="uppercase">{String(person.firstname)[0] + String(person.lastname)[0]}</AvatarFallback>
            </Avatar>
          ))}
        </div>
      )
    }
  },
  {
    accessorKey: 'label',
    header: ({ column, dictionary }) => (
      <DataTableColumnHeader column={column} title={dictionary['label-column']} />
    ),
    cell: ({ row }) => {
      const { id } = row.original
      if (!id) return <Skeleton className='w-24 h-4'/>

      return row.getValue('label') && <Badge variant="outline" className='max-w-fit'>{row.getValue('label')}</Badge>
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    }
  },
  {
    accessorKey: 'status',
    header: ({ column, dictionary }) => (
      <DataTableColumnHeader column={column} title={dictionary['status-column']} />
    ),
    cell: ({ row, dictionary }) => {
      const { id } = row.original
      if (!id) return <Skeleton className='w-24 h-4'/>

      const status = tasksStatuses.find(status => status.value === row.getValue('status'))

      return (
        <Badge variant="outline" className={`flex w-fit items-center gap-x-1 ${status.style}`}>
          {status.icon && <span>{status.icon}</span>}
          <span className='capitalize'>{dictionary[status.value]}</span>
        </Badge>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    }
  },
  {
    accessorKey: 'estimated',
    header: ({ column, dictionary }) => (
      <DataTableColumnHeader column={column} title={dictionary['estimated-column']} />
    ),
    cell: ({ row }) => {
      const { id } = row.original
      if (!id) return <Skeleton className='w-10 h-4'/>

      return (
        <div className="flex w-[100px] items-center">
          <span>{row.getValue('estimated')}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    }
  },
  {
    accessorKey: 'end_date',
    header: ({ column, dictionary }) => (
      <DataTableColumnHeader column={column} title={dictionary['end-date-column']} />
    ),
    cell: ({ row }) => {
      const { id } = row.original
      if (!id) return <Skeleton className='w-24 h-4'/>

      const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }

      return (
        <div className="flex w-fit items-center">
          <span>{new Date(row.getValue('end_date')).toLocaleDateString(undefined, options)}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    }
  }
]
