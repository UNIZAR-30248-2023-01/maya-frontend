'use client'

import {
  TableBody,
  TableCell,
  TableRow
} from '@/components/ui/table'
import { flexRender } from '@tanstack/react-table'
import { useLang } from '@/context/language-context'

export function DataTableBody ({ table, organization }) {
  // const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const { dictionary } = useLang()

  return (
    <TableBody>
      {table.getRowModel().rows?.length // Comprueba si hay filas condiciones ? true : false
        ? (table.getRowModel().rows.map((row) => (
          <TableRow
            key={row.id}
            data-state={row.getIsSelected() && 'selected'}
            className="cursor-pointer"
          >
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(
                  cell.column.columnDef.cell,
                  {
                    ...cell.getContext(),
                    dictionary: dictionary.inandouts
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
