'use client'

import { useState } from 'react'
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table'
import { DataTableToolbar } from '@/components/teams/data-table-toolbar'
import { Table } from '@/components/ui/table'
import { DataTablePagination } from '@/components/ui/data-table-pagination'
import { DataTableHeader } from '@/components/teams/data-table-header'
import { DataTableBody } from '@/components/teams/data-table-body'
import { SidePanel } from '@/components/projects/side-panel'
import { useLang } from '@/context/language-context'
import { teamSchema } from '@/lib/schemas'

export function DataTable ({ data, columns, people }) {
  const { dictionary } = useLang()
  const [sorting, setSorting] = useState([])
  const [columnFilters, setColumnFilters] = useState([])
  const [columnVisibility, setColumnVisibility] = useState({})
  const [rowSelection, setRowSelection] = useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection
    }
  })

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <DataTableToolbar table={table} people={people} />
        <SidePanel
          title={dictionary.teams['new-team']}
          description={dictionary.teams['new-table-description']}
          triggerBtn={dictionary.teams['new-team']}
          actionBtn={dictionary.teams['new-team-create']}
          schema={teamSchema}
          dictionary={dictionary}
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <DataTableHeader table={table}/>
          <DataTableBody table={table}/>
        </Table>
      </div>
      <DataTablePagination table={table} />
    </div>
  )
}
