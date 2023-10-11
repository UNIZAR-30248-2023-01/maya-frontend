'use client'

import * as React from 'react'
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table'
import { DataTableToolbar } from '@/components/people/data-table-toolbar'

import { Table } from '@/components/ui/table'
import { DataTablePagination } from '@/components/people/data-table-pagination'
import { DataTableHeader } from '@/components/people/data-table-header'
import { DataTableBody } from '@/components/people/data-table-body'

export function DataTable ({ data, columns }) {
  const [sorting, setSorting] = React.useState([])
  const [columnFilters, setColumnFilters] = React.useState([])
  const [columnVisibility, setColumnVisibility] = React.useState({})
  const [rowSelection, setRowSelection] = React.useState({})

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
      <div className="w-full">
        <div className="flex items-center py-4">
          <DataTableToolbar table={table}/>
        </div>
        <div className="rounded-md border">
          <Table>
            <DataTableHeader table={table}/>
            <DataTableBody table={table}/>
          </Table>
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          <DataTablePagination table={table}/>
        </div>
      </div>
  )
}
