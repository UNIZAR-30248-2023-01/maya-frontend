'use client'

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
import { Sidebar } from '@/components/sidebar/Sidebar'
import { Button } from '@/components/ui/button'

import {
  Sheet,
  SheetContent,
  SheetTrigger
} from '@/components/ui/sheet'

const navigation = [
  { name: 'Overview', href: '#', icon: LuLayoutGrid, current: true },
  { name: 'Projects', href: '#', icon: LuFileText, current: false },
  { name: 'Teams', href: '#', icon: LuUsers, current: false },
  { name: 'Staff', href: '#', icon: LuUser, current: false },
  { name: 'WorkSpaces', href: '#', icon: LuLaptop2, current: false },
  { name: 'In & Outs', href: '#', icon: LuCalendar, current: false },
  { name: 'Tickets', href: '#', icon: LuTicket, current: false }
]

const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false }
]

export function Layout ({ dict, children }) {
  // const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <>
      <div className="hidden h-screen w-screen lg:flex">
        <Sidebar
          navigation={navigation.map((item) => ({ ...item, name: dict.navigation[item.name] }))}
          teams={teams}

        />

        <div className='h-full flex-1'>

          <div className="z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6">
            <div className="text-sm font-semibold leading-6 text-gray-900">Overview</div>
          </div>

          <main className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-y-2">
              {children}
            </div>
          </main>
        </div>
      </div>

      <Sheet>
        <SheetContent side="left" className="p-0 w-fit">
          <Sidebar
          navigation={navigation.map((item) => ({ ...item, name: dict.navigation[item.name] }))}
            teams={teams}
            collapsable={true}
        />
        </SheetContent>

        <div className="h-screen w-screen flex lg:hidden">

        <div className='h-full flex-1'>
            <div className="z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6">
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <span className="sr-only">Open sidebar</span>
                  <LuMenu className="h-6 w-6" aria-hidden="true" />
                </Button>
              </SheetTrigger>

              <div className="text-sm font-semibold leading-6 text-gray-900">Overview</div>

          </div>

          <main className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-y-2">
              {children}
            </div>
          </main>
        </div>
      </div>
    </Sheet>
    </>
  )
}
