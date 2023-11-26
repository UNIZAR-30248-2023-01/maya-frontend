'use client'

import { SheetTrigger } from '@/components/ui/sheet'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { LuMenu } from 'react-icons/lu'
import { Button } from '@/components/ui/button'

export function Navbar () {
  return (
    <div className={'z-40 flex items-center gap-x-6 px-4 py-4 shadow-sm sm:px-6 sticky top-0'}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" id="sidebar-button">
            <span className="sr-only">Open sidebar</span>
            <LuMenu className="h-6 w-6" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <Breadcrumbs />
    </div>
  )
}
