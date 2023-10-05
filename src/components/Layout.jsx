'use client'

import { useState } from 'react'
import { Sidebar } from '@/components/sidebar/Sidebar'
import { Button } from '@/components/ui/button'
import { Search } from '@/components/sidebar/Search'
import {
  LuMenu,
  LuLayoutGrid,
  LuFileText,
  LuUsers,
  LuUser,
  LuLaptop2,
  LuCalendar,
  LuTicket
} from 'react-icons/lu'
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from '@/components/ui/sheet'
import { Breadcrumbs } from '@/components/Breadcrumbs'

const navigation = [
  { name: 'overview', href: '/', icon: LuLayoutGrid, current: true },
  { name: 'projects', href: '/projects', icon: LuFileText, current: false },
  { name: 'teams', href: '/teams', icon: LuUsers, current: false },
  { name: 'staff', href: '/staff', icon: LuUser, current: false },
  { name: 'workSpaces', href: '/workspaces', icon: LuLaptop2, current: false },
  { name: 'in-and-outs', href: '/in-and-outs', icon: LuCalendar, current: false },
  { name: 'tickets', href: '/tickets', icon: LuTicket, current: false }
]

const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false }
]

export function Layout ({ dict, children }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Sheet>
        <SheetContent side="left" className="p-0 w-fit">
          <Sidebar
            navigation={navigation.map((item) => ({ ...item, name: dict.navigation[item.name] }))}
            teams={teams}
            sheet={true}
            setSearchOpen={setOpen}
          />
        </SheetContent>

        <div className="h-screen w-screen flex">
          <div className='h-full flex-1'>
            <div className="z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6">
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <span className="sr-only">Open sidebar</span>
                  <LuMenu className="h-6 w-6" aria-hidden="true" />
                </Button>
              </SheetTrigger>

              <Breadcrumbs dict={dict.navigation} />
            </div>

            <main className="py-10">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-y-2">
                {children}
              </div>
            </main>
          </div>
        </div>
      </Sheet>

      <Search open={open} setOpen={setOpen} />
    </>
  )
}
