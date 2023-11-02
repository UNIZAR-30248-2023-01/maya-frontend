'use client'

import { useState } from 'react'
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table'
import { DataTableToolbar } from '@/components/tasks/data-table-toolbar'

import { Table } from '@/components/ui/table'
import { DataTablePagination } from '@/components/ui/data-table-pagination'
import { DataTableHeader } from '@/components/tasks/data-table-header'
import { DataTableBody } from '@/components/tasks/data-table-body'
import { SidePanel } from '@/components/tasks/side-panel'
import { useLang } from '@/context/language-context'
import { tasksSchema } from '@/lib/schemas'

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
    <div className='space-y-4'>
      <div className='flex items-center justify-between'>
        <DataTableToolbar table={table} people={people} />
        <SidePanel
          title={dictionary.tasks['new-task']}
          description={dictionary.tasks['new-table-description']}
          triggerBtn={dictionary.tasks['new-task']}
          actionBtn={dictionary.tasks['new-task-create']}
          schema={tasksSchema}
          data={{ assignees: people }}
        />
      </div>
      <div className='rounded-md border'>
        <Table>
          <DataTableHeader table={table}/>
          <DataTableBody table={table}/>
        </Table>
      </div>
      <DataTablePagination table={table} />
    </div>
  )
}
