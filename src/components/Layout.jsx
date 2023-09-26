'use client'

import { useState } from 'react'
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
import Sidebar from '@/components/Sidebar'

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

export default function Layout ({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <>
      <div className="h-screen w-screen flex">
        <Sidebar
          navigation={navigation}
          teams={teams}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <div className='h-full flex-1'>
          <div className="z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6">
            <button type="button" className="text-gray-700" onClick={() => setSidebarOpen(true)}>
              <span className="sr-only">Open sidebar</span>
              <LuMenu className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="text-sm font-semibold leading-6 text-gray-900">Overview</div>
          </div>

          <main className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-y-2">
              <div className='border-2 border-dashed min-h-full h-24 w-full'/>
              <div className='border-2 border-dashed min-h-full h-96 w-full'/>
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
