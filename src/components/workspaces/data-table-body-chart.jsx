'use client'

import {
  TableBody,
  TableCell,
  TableRow
} from '@/components/ui/table'
import { flexRender } from '@tanstack/react-table'
import { useRouter, usePathname } from 'next/navigation'

export function DataTableBody ({ table }) {
  const router = useRouter()
  const org = usePathname().split('/')[2]
  const workspace = usePathname().split('/')[4]
  const goTo = (row, key, secretKey) => {
    // Construye la URL como destino
    const name = String(row.original.name).toLowerCase().replace(/ /g, '-')
    router.push(`/${org}/workspaces/${workspace}/${name}`)
  }

  return (
    <TableBody>
      {table.getRowModel().rows?.length
        ? (table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              id={`row-${row.id}`} // Asigna un id único a cada fila
              data-state={row.getIsSelected() && 'selected'}
              // onClick={() => goTo(row)}
              onClick={() => {
                const key = row.original.key// Accede al valor privado
                const secretKey = row.original.secretKey// Accede al valor privado
                goTo(row, key, secretKey) // Pasa el valor privado a la función goTo
              }}
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
              colSpan={table.getAllColumns().length}
              className="h-24 text-center"
            >
              No results.
            </TableCell>
          </TableRow>
          )
      }
    </TableBody>
  )
}
