'use client'

import {
  TableBody,
  TableCell,
  TableRow
} from '@/components/ui/table'
import { flexRender } from '@tanstack/react-table'
import { useRouter } from 'next/navigation'

export function DataTableBody ({ table }) {
  const router = useRouter()
  const goTo = (row) => router.push(`/projects/${String(row.original.id).toLowerCase().replace(/ /g, '-')}`)

  return (
    <TableBody>
      {table.getRowModel().rows?.length
        ? (table.getRowModel().rows.map((row) => (
          <TableRow
            key={row.id}
            data-state={row.getIsSelected() && 'selected'}
            onClick={() => goTo(row)}
            className="cursor-pointer"
          >
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(
                  cell.column.columnDef.cell,
                  cell.getContext()
                )}
              </TableCell>
            ))}
          </TableRow>
          )))
        : (
          <TableRow>
            <TableCell
              // colSpan={columns.length}
              colSpan={2}
              className="h-24 text-center"
            >
              No results.
            </TableCell>
          </TableRow>
          )}
    </TableBody>
  )
}
