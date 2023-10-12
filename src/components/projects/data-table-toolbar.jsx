'use client'

import { Cross2Icon } from '@radix-ui/react-icons'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { DataTableCreateAction } from '@/components/projects/data-table-create-action'

import { statuses } from '@/lib/constants'
import { DataTableFacetedFilter } from '@/components/projects/data-table-faceted-filter'
import { useLang } from '@/context/language-context'

export function DataTableToolbar ({ table }) {
  const isFiltered = table.getState().columnFilters.length > 0
  const { dictionary } = useLang()

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder={`${dictionary.projects.filter}...`}
          value={(table.getColumn('title')?.getFilterValue()) ?? ''}
          onChange={(event) =>
            table.getColumn('title')?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn('status') && (
          <DataTableFacetedFilter
            column={table.getColumn('status')}
            title={dictionary.projects.status}
            options={statuses.map(status => ({ ...status, label: dictionary.projects[status.value] }))}
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
      <DataTableCreateAction />
    </div>
  )
}
