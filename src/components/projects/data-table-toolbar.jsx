'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { DataTableFacetedFilter } from '@/components/projects/data-table-faceted-filter'
import { projectStatuses, visibility } from '@/lib/constants'
import { useLang } from '@/context/language-context'
import { Cross2Icon } from '@radix-ui/react-icons'

export function DataTableToolbar ({ table }) {
  const isFiltered = table.getState().columnFilters.length > 0
  const { dictionary } = useLang()

  return (
    <div className="flex flex-1 items-center space-x-2">
      <Input
        id="filter-project"
        placeholder={`${dictionary.projects.filter}...`}
        value={(table.getColumn('name')?.getFilterValue()) ?? ''}
        onChange={(event) =>
          table.getColumn('name')?.setFilterValue(String(event.target.value).toLowerCase())
        }
        className="h-8 w-[150px] lg:w-[250px]"
      />
      {table.getColumn('status') && (
        <DataTableFacetedFilter
          id='close-filter'
          column={table.getColumn('status')}
          title={dictionary.projects.status}
          options={projectStatuses.map(status => ({ ...status, value: status.value }))}
        />
      )}
      {table.getColumn('visibility') && (
        <DataTableFacetedFilter
          id='visibility-filter'
          column={table.getColumn('visibility')}
          title={dictionary.projects.visibility}
          options={visibility.map(v => ({ ...v, value: v.value }))}
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
  )
}
