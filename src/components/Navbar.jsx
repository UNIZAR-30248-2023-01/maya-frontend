'use client'

import { SheetTrigger } from '@/components/ui/sheet'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { LuMenu } from 'react-icons/lu'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
import { Util } from '@/components/project-settings/tabs'
import { CreateProject } from '@/components/project-settings/create-project'

export function Navbar ({ dict }) {
  // pages = list of paths in the url: ['projects', 'project-name'] lang is not included
  let pages = usePathname()
  pages = pages.split('/').slice(2)

  return (
    <div className="z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 sticky top-0">
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
            <span className="sr-only">Open sidebar</span>
            <LuMenu className="h-6 w-6" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <Breadcrumbs dict={dict.navigation} pages={pages} />
      <div className="max-w-fit ml-auto">
        {pages[0] === 'projects' && pages.length > 1 && <Util/>}
        {pages[0] === 'projects' && pages.length === 1 && <CreateProject dict={dict.projects}/>}
      </div>
    </div>
  )
}
