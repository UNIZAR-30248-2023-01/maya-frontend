'use client'

import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { MixerHorizontalIcon } from '@radix-ui/react-icons'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu'

const dict = {
  en: {
    View: 'View',
    toggleColumns: 'Toggle columns',
    name: 'name',
    description: 'description',
    created_at: 'created'
  },
  es: {
    View: 'Vista',
    toggleColumns: 'alternar columnas',
    name: 'nombre',
    description: 'descripción',
    created_at: 'fecha de creación'
  }
}

export function DataTableViewOptions ({
  table,
  lang
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="ml-auto hidden h-8 lg:flex capitalize"
        >
          <MixerHorizontalIcon className="mr-2 h-4 w-4" />
          {dict[lang].View}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[150px] max-w-fit">
        <DropdownMenuLabel className="capitalize">{dict[lang].toggleColumns}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {table
          .getAllColumns()
          .filter(
            (column) =>
              typeof column.accessorFn !== 'undefined' && column.getCanHide()
          )
          .map((column) => {
            return (
              <DropdownMenuCheckboxItem
                key={column.id}
                className="capitalize"
                checked={column.getIsVisible()}
                onCheckedChange={(value) => column.toggleVisibility(!!value)}
              >
                {dict[lang][column.id] ?? column.id}
              </DropdownMenuCheckboxItem>
            )
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
