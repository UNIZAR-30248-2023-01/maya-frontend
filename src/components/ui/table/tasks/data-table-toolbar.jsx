'use client'

import { Cross2Icon } from '@radix-ui/react-icons'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { spanishPriorities, englishPriorities, spanishStatuses, englishStatuses } from '@/data/data'
import { DataTableFacetedFilter } from './data-table-faceted-filter'

import { usePathname } from 'next/navigation'

export function DataTableToolbar ({
  table,
  dict
}) {
  const lang = usePathname().split('/').at(1)

  const prioritiesDict = lang === 'es' ? spanishPriorities : englishPriorities
  const statusesDict = lang === 'es' ? spanishStatuses : englishStatuses

  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder={dict.tasks.filterTasks}
          value={(table.getColumn('name')?.getFilterValue()) ?? ''}
          onChange={(event) =>
            table.getColumn('name')?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn('status') && (
          <DataTableFacetedFilter
            column={table.getColumn('status')}
            title={dict.tasks.status}
            options={statusesDict}
            dict={dict}
          />
        )}
        {table.getColumn('priority') && (
          <DataTableFacetedFilter
            column={table.getColumn('priority')}
            title={dict.tasks.priority}
            options={prioritiesDict}
            dict={dict}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            {dict.tasks.clear}
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  )
}
