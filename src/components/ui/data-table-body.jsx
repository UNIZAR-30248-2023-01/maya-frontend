'use client'

import {
  TableBody,
  TableCell,
  TableRow
} from '@/components/ui/table'
import { flexRender } from '@tanstack/react-table'
import { useRouter } from 'next/navigation'
import { useLang } from '@/context/language-context'

export function DataTableBody ({ table }) {
  const router = useRouter()
  const goTo = (row) => router.push(`/projects/${String(row.original.id).toLowerCase().replace(/ /g, '-')}`)
  const { dictionary } = useLang()

  return (
    <TableBody>
      {table.getRowModel().rows?.length
        ? (
            table.getRowModel().rows.map((row) => (
          <TableRow
            key={row.id}
            data-state={row.getIsSelected() && 'selected'}
            onClick={() => goTo(row)}
          >
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
            ))
          )
        : (
        <TableRow>
          <TableCell
            // colSpan={columns.length}
            colSpan={2}
            className="h-24 text-center"
          >
            {dictionary.search['not-found']}
          </TableCell>
        </TableRow>
          )}
    </TableBody>
  )
}
