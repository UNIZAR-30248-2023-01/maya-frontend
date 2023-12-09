'use client'

import {
  TableBody,
  TableCell,
  TableRow
} from '@/components/ui/table'
import { flexRender } from '@tanstack/react-table'
import { useLang } from '@/context/language-context'

export function DataTableBody ({ table, owner }) {
  const { dictionary } = useLang()
  return (
    <TableBody>
      {table.getRowModel().rows?.length
        ? (
            table.getRowModel().rows.map((row) => (
          <TableRow id={row.original.username} key={row.id} data-state={row.getIsSelected() && 'selected'}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, {
                  ...cell.getContext(),
                  dictionary: {
                    ...dictionary.roles,
                    ...dictionary.project,
                    ...dictionary.people
                  },
                  owner
                })}
              </TableCell>
            ))}
          </TableRow>
            ))
          )
        : (
        <TableRow id="not-found">
          <TableCell
            colSpan={table.getAllColumns().length}
            className="h-24 text-center"
          >
            {dictionary.search['not-found']}.
          </TableCell>
        </TableRow>
          )}
    </TableBody>
  )
}
