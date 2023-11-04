'use client'

import { useState } from 'react'
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table'
import { DataTableToolbar } from '@/components/people/data-table-toolbar'
import { Table } from '@/components/ui/table'
import { DataTablePagination } from '@/components/ui/data-table-pagination'
import { DataTableHeader } from '@/components/people/data-table-header'
import { DataTableBody } from '@/components/people/data-table-body'
import { InviteMember } from '@/components/people/invite-member'
import { useLang } from '@/context/language-context'

export function DataTable ({ data, columns, projectName }) {
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
        <DataTableToolbar table={table} />
        <InviteMember
          title={dictionary.people['invite-member']}
          description={dictionary.people['invite-member-description']}
          triggerBtn={dictionary.people.invite}
          actionBtn={dictionary.people['invite-member-send']}
          data={{ members: data }}
          projectName={projectName}
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <DataTableHeader table={table}/>
          <DataTableBody table={table} />
        </Table>
      </div>
      <DataTablePagination table={table} />
    </div>
  )
}
