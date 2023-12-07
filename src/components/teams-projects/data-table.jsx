'use client'

import { useState } from 'react'
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table'
import { DataTableToolbar } from '@/components/teams-projects/data-table-toolbar'
import { Table } from '@/components/ui/table'
import { DataTablePagination } from '@/components/ui/data-table-pagination'
import { DataTableHeader } from '@/components/teams-projects/data-table-header'
import { DataTableBody } from '@/components/teams-projects/data-table-body'
import { AddTeam } from '@/components/teams-projects/add-team'
import { useLang } from '@/context/language-context'

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
        <AddTeam
          title={dictionary.teams['add-team']}
          description={dictionary.teams['add-team-description']}
          triggerBtn={dictionary.teams.invite}
          actionBtn={dictionary.teams['add-team-send']}
          data={{ teams: data }}
          projectName="reign-frontend"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <DataTableHeader table={table} />
          <DataTableBody table={table} />
        </Table>
      </div>
      <DataTablePagination table={table} />
    </div>
  )
}
