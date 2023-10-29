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
        placeholder={`${dictionary.inandouts.filter}...`}
        value={(table.getColumn('id')?.getFilterValue()) ?? ''}
        onChange={(event) =>
          table.getColumn('id')?.setFilterValue(event.target.value)
        }
        className="h-8 w-[150px] lg:w-[250px]"
      />
      {table.getColumn('in_date') && (
        <DataTableFacetedFilter
          column={table.getColumn('in_date')}
          title={dictionary.inandouts.in_date}
          options={in_date.map(status => ({ ...status, value: status.value }))}
        />
      )}
      {table.getColumn('out_date') && (
        <DataTableFacetedFilter
          column={table.getColumn('out_date')}
          title={dictionary.inandouts.out_date}
          options={out_date.map(v => ({ ...v, value: v.value }))}
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
