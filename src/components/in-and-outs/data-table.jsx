'use client'

import { useState } from 'react'
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table'

import { Table } from '@/components/ui/table'
import { DataTableToolbar } from '@/components/in-and-outs/data-table-toolbar'
import { DataTableHeader } from '@/components/in-and-outs/data-table-header'
import { DataTableBody } from '@/components/in-and-outs/data-table-body'
import { SidePanel } from '@/components/in-and-outs/side-panel'
import { DataTablePagination } from '@/components/ui/data-table-pagination'
import { useLang } from '@/context/language-context'
import { inAndOutsSchema } from '@/lib/schemas'

export function DataTable ({ data, columns }) {
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
        {/*<DataTableToolbar table={table} />*/}
        <SidePanel
          title={dictionary.inandouts['new-date']}
          description={dictionary.inandouts['new-table-description']} // Descripcion del panel
          descriptionIn={dictionary.inandouts['new-table-description-in']}
          descriptionOut={dictionary.inandouts['new-table-description-out']}
          triggerBtn={dictionary.inandouts['new-date']} // Nombre del boton
          actionBtn={dictionary.inandouts['new-table-create']} 
          schema={inAndOutsSchema}
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