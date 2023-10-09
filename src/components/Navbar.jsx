'use client'

import { SheetTrigger } from '@/components/ui/sheet'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { LuMenu } from 'react-icons/lu'
import { Button } from '@/components/ui/button'
import { ProjectNavigation } from '@/components/projects/navigation'
import { usePathname } from 'next/navigation'

export function Navbar () {
  const pathname = usePathname()
  const regex = /\/projects\/.+/

  return (
    <div className="z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 sticky top-0">
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
            <span className="sr-only">Open sidebar</span>
            <LuMenu className="h-6 w-6" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <Breadcrumbs />
      {regex.test(pathname) && <ProjectNavigation />}
    </div>
  )
}
