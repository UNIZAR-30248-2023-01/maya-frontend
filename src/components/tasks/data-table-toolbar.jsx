'use client'

import { Cross2Icon } from '@radix-ui/react-icons'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useLang } from '@/context/language-context'
import { DataTableFacetedFilter } from '@/components/tasks/data-table-faceted-filter'
import { tasksLabels, tasksStatuses } from '@/lib/constants'

export function DataTableToolbar ({ table, people }) {
  const isFiltered = table.getState().columnFilters.length > 0
  const { dictionary } = useLang()

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          id="filter-tasks"
          placeholder={`${dictionary.tasks.filter}...`}
          value={(table.getColumn('name')?.getFilterValue()) ?? ''}
          onChange={(event) =>
            table.getColumn('name')?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn('people') && (
          <DataTableFacetedFilter
            column={table.getColumn('people')}
            title={dictionary.tasks.assignees}
            options={people.map((person) => ({ value: person.username }))}
          />
        )}
        {table.getColumn('label') && (
          <DataTableFacetedFilter
            column={table.getColumn('label')}
            title={dictionary.tasks.label}
            options={tasksLabels.map((item) => ({ value: item.value }))}
          />
        )}
        {table.getColumn('status') && (
          <DataTableFacetedFilter
            column={table.getColumn('status')}
            title={dictionary.tasks.status}
            options={tasksStatuses.map((status) => ({ value: status.value }))}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            {dictionary.table['clear-filters']}
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  )
}
