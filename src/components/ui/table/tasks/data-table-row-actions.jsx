'use client'

import { LuPencilLine, LuTrash2 } from 'react-icons/lu'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '../../sheet'

export function DataTableRowActions ({
  row
}) {
  console.log(row)

  return (
    <Sheet>
      <SheetContent>
        Editar
        {' ' + row.original.id}
      </SheetContent>
      <div className='flex flex-row justify-end'>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
          >
            <LuPencilLine className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">Open edit task sidebar</span>
          </Button>
        </SheetTrigger>
        <Button
          variant="ghost"
          size="icon"
        >
          <LuTrash2 className="h-4 w-4 text-red-600" aria-hidden="true" />
          <span className="sr-only">Delete task</span>
        </Button>
      </div>

    </Sheet>
  )
}
