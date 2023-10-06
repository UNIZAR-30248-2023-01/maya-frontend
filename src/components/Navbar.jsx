'use client'

import { SheetTrigger } from '@/components/ui/sheet'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import {
  LuMenu,
  LuLineChart,
  LuPanelRightOpen,
  LuSettings2

} from 'react-icons/lu'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { usePathname } from 'next/navigation'

export function Util ({ pages }) {
  return pages[0] === 'projects' && pages.length > 1 && (
    <Tabs defaultValue="complete" className="max-w-fit ml-auto">
      <TabsList className="grid grid-cols-3">
        <TabsTrigger value="complete">
          <LuLineChart className='h-5 w-5 stroke-1'/>
        </TabsTrigger>
        <TabsTrigger value="insert">
          <LuPanelRightOpen className='h-5 w-5 stroke-1'/>
        </TabsTrigger>
        <TabsTrigger value="edit">
          <LuSettings2 className='h-5 w-5 stroke-1'/>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

export function Navbar ({ dict }) {
  let pages = usePathname()
  pages = pages.split('/').slice(2)
  console.log(pages)

  return (
    <div className="z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 sticky top-0">
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
            <span className="sr-only">Open sidebar</span>
            <LuMenu className="h-6 w-6" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <Breadcrumbs dict={dict} pages={pages} />
      <Util pages={pages}/>
    </div>
  )
}
