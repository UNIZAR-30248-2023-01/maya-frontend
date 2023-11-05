'use client'

import {
  TableBody,
  TableCell,
  TableRow
} from '@/components/ui/table'
import { flexRender } from '@tanstack/react-table'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/utils'

export function DataTableBody ({ table }) {
  const router = useRouter()
  // const goTo = (row) => router.push(`/workspaces/${String(row.original.name).toLowerCase().replace(/ /g, '-')}`)

  const saveWorkspace = async (name, key, secretKey, evento) => {
    const { data: workspaces, error } = await supabase
      .from('workspaces')
      .select('*')
      .eq('name', name) // Reemplaza 'usuario1' con el ID del usuario actual

    if (error) console.log('error:', error)
    if (workspaces.length === 0) {
      console.log('No existe el workspace')
      const { error } = await supabase.from('workspaces').insert([{
        name,
        key,
        secretKey,
        evento
      }])
      if (error) console.log('error:', error)
    }
  }
  const goTo = (row, key, secretKey) => {
    // Construye la URL como destino
    console.log('CLAVES:')
    console.log('key:', key)
    console.log('secretKey:', secretKey)
    // const destinationURL = `/workspaces/${String(row.original.name).toLowerCase().replace(/ /g, '-')}`
    // // Pasa los valores como estado del historial de navegación
    // router.push(destinationURL, null, { shallow: true, state: { key, secretKey } })

    const name = String(row.original.name).toLowerCase().replace(/ /g, '-')
    saveWorkspace(name, key, secretKey, false)
    router.push(`/workspaces/${String(row.original.name).toLowerCase().replace(/ /g, '-')}`)
  }

  return (
    <TableBody>
      {table.getRowModel().rows?.length
        ? (table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
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
