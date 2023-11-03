'use client'

import {
  TableBody,
  TableCell,
  TableRow
} from '@/components/ui/table'
import { flexRender } from '@tanstack/react-table'
import { useLang } from '@/context/language-context'
import { useRouter } from 'next/navigation'

export function DataTableBody({ table }) {
  const { dictionary } = useLang()
  const router = useRouter()
  const goTo = (row) => router.push(`/projects/${row.original.project}/${row.original.id}`)

  return (
    <TableBody>
      {table.getRowModel().rows?.length
        ? (table.getRowModel().rows.map((row) => (
          <TableRow
            key={row.original.id}
            data-state={row.getIsSelected() && 'selected'}
            className='cursor-pointer'
            onClick={() => goTo(row)}
          >
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(
                  cell.column.columnDef.cell,
                  {
                    ...cell.getContext(),
                    dictionary: { ...dictionary.tasks, ...dictionary.labels, ...dictionary.status }
                  }
                )}
              </TableCell>
            ))}
          </TableRow>
        )))
        : (
          <TableRow>
            <TableCell
              colSpan={table.getAllColumns().length}
              className="h-24 text-center"
            >
              No results.
            </TableCell>
          </TableRow>
        )}
    </TableBody>
  )
}
