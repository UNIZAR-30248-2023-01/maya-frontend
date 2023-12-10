'use client'

import {
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { useLang } from '@/context/language-context'
import { flexRender } from '@tanstack/react-table'

export function DataTableHeader ({ table }) {
  const { dictionary } = useLang()

  return (
    <TableHeader>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            return (
              <TableHead key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(header.column.columnDef.header, {
                    ...header.getContext(),
                    dictionary: dictionary.workspaces
                  })}
              </TableHead>
            )
          })}
        </TableRow>
      ))}
    </TableHeader>
  )
}
