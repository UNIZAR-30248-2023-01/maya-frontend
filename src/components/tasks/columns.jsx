'use client'

import { DataTableColumnHeader } from '@/components/tasks/data-table-column-header'
import { Skeleton } from '@/components/ui/skeleton'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { tasksLabels, tasksStatuses } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { format, parseISO } from 'date-fns'

export const columns = [
  {
    accessorKey: 'name',
    header: ({ column, dictionary }) => {
      return <DataTableColumnHeader column={column} title={dictionary['tasks-column']} />
    },
    cell: ({ row, dictionary }) => {
      const { id } = row.original
      if (!id) return <Skeleton className='w-44 h-4' />

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
  {
    accessorKey: 'people',
    header: ({ column, dictionary }) => (
      <DataTableColumnHeader column={column} title={dictionary['assignees-column']} />
    ),
    cell: ({ row }) => {
      const { id } = row.original
      console.log(id)
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
              <AvatarImage src={person?.avatar} />
              <AvatarFallback>{person?.firstname[0] + person?.lastname[0]}</AvatarFallback>
            </Avatar>
          ))}
        </div>
      )
    },
    filterFn: (row, id, value) => {
      const usernames = row.getValue(id).map(person => person.username)
      return value.some(username => usernames.includes(username))
    },
    enableSorting: false
  },
  {
    accessorKey: 'label',
    header: ({ column, dictionary }) => (
      <DataTableColumnHeader column={column} title={dictionary['label-column']} />
    ),
    cell: ({ row, dictionary }) => {
      const { id } = row.original
      if (!id) return <Skeleton className='w-24 h-4' />

      const label = tasksLabels.find(label => label.value === row.getValue('label'))

      return row.getValue('label') && <Badge variant="outline" className={cn('max-w-fit', label.style)}>{dictionary[label.value]}</Badge>
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
      if (!id) return <Skeleton className='w-24 h-4' />

      const status = tasksStatuses.find(status => status.value === row.getValue('status'))
      if (!status) return null

      return (
        <Badge variant="outline" className={cn('flex w-fit items-center gap-x-1', status.style)}>
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
      if (!id) return <Skeleton className='w-10 h-4' />

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
    cell: ({ row, dictionary }) => {
      const { id } = row.original
      if (!id) return <Skeleton className='w-24 h-4' />
      if (!row.getValue('end_date')) return dictionary['new-task-label-placeholder']

      const parsedDate = parseISO(row.getValue('end_date'))
      const formattedDate = format(parsedDate, 'PPP')

      return (
        <div className="flex w-fit items-center">
          <span>{formattedDate}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    }
  }
]
