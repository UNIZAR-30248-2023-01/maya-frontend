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
  const goTo = (row) => router.push(`/teams/${String(row.original.name).toLowerCase().replace(/ /g, '-')}`)
  const dictionary = useLang()

  return (
    <TableBody>
      {table.getRowModel().rows?.length
        ? (
            table.getRowModel().rows.map((row) => (
          <TableRow
            key={row.id}
            data-state={row.getIsSelected() && 'selected'}
            onClick={() => goTo(row)}
            className="cursor-pointer"
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
            colSpan={table.getAllColumns().length}
            className="h-24 text-center"
          >
            {dictionary.search['not-found']}
          </TableCell>
        </TableRow>
          )}
    </TableBody>
  )
}
