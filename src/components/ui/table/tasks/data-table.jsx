'use client'

import { useState } from 'react'
import {
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table'

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

import { DataTablePagination } from '@/components/ui/table/tasks/data-table-pagination'
import { DataTableToolbar } from '@/components/ui/table/tasks/data-table-toolbar'
import { Sheet, SheetContent, SheetTrigger } from '../../sheet'

export function DataTable ({
  columns,
  data
}) {
  const [rowSelection, setRowSelection] = useState({})
  const [columnVisibility, setColumnVisibility] = useState({})
  const [columnFilters, setColumnFilters] = useState([])
  const [sorting, setSorting] = useState([])

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues()
  })

  return (
    <div className="space-y-4">
      <DataTableToolbar table={table} />
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length
              ? (
                  table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                    >
                      <Sheet>
                        <SheetContent>
                          Ver
                          {' ' + row.original.id}
                        </SheetContent>
                        {row.getVisibleCells().map((cell) => (
                          <TableCell key={cell.id}>
                            {cell.getContext().column.id === 'actions'
                              ? (
                                  flexRender(
                                    cell.column.columnDef.cell,
                                    cell.getContext()
                                  )
                                )
                              : (
                                <SheetTrigger className='w-full h-full'>
                                {flexRender(
                                  cell.column.columnDef.cell,
                                  cell.getContext()
                                )}
                                </SheetTrigger>
                                )}
                          </TableCell>
                        ))}
                      </Sheet>
                </TableRow>
                  ))
                )
              : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
                )}
          </TableBody>
          <TableFooter>
            <Sheet>
              <SheetContent>
                Añadir
              </SheetContent>
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className='border-t w-full h-full'
                >
                  <div className='w-full h-full'>
                    <SheetTrigger className='w-full h-full text-start'>
                      + Add task
                    </SheetTrigger>
                  </div>
                </TableCell>
              </TableRow>
            </Sheet>
          </TableFooter>
        </Table>
      </div>
      <DataTablePagination table={table} />
    </div>
  )
}
