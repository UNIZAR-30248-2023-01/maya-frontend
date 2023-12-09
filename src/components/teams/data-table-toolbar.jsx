'use client'

import { Cross2Icon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useLang } from '@/context/language-context'
import { DataTableFacetedFilter } from '@/components/teams/data-table-faceted-filter'

export function DataTableToolbar ({ table, people }) {
  const isFiltered = table.getState().columnFilters.length > 0
  const { dictionary } = useLang()

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          id="filter-teams"
          placeholder={`${dictionary.teams.filter}...`}
          value={(table.getColumn('name')?.getFilterValue()) ?? ''}
          onChange={(event) => table.getColumn('name')?.setFilterValue(String(event.target.value).toLowerCase())}
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn('people') && (
          <DataTableFacetedFilter
            column={table.getColumn('people')}
            title={dictionary.teams['member-column']}
            options={people.map((person) => ({ value: person.username }))}
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
