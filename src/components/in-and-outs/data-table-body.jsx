'use client'

import {
  TableBody,
  TableCell,
  TableRow
} from '@/components/ui/table'
import { flexRender } from '@tanstack/react-table'
import { useLang } from '@/context/language-context'
import { SidePanelEdit } from '@/components/in-and-outs/side-panel-edit'

export function DataTableBody ({ table }) {
  // const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const { dictionary } = useLang()
  // const router = useRouter()
  // Enruta la pagina a una URL especifica que lleva el nombre del proyecto
  // const goTo = (row) => router.push(`/in-and-outs/${String(row.original.id).toLowerCase().replace(/ /g, '-')}`)

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
              <SidePanelEdit
                title={dictionary.inandouts.edit}
                description={dictionary.inandouts['new-table-description']} // Descripcion del panel
                descriptionIn={dictionary.inandouts['new-table-description-in']}
                descriptionOut={dictionary.inandouts['new-table-description-out']}
                actionBtn={dictionary.inandouts.edit}
                fechaEntrada={row.original.in_date}
                fechaSalida={row.original.out_date}
                deleteBtn={dictionary.inandouts.delete}
              />

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
