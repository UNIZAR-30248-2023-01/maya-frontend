'use client'

import { TeamMember } from '@/components/TeamMember'
import { useState, useEffect } from 'react'

import { SidebarHeader } from './SidebarHeader'
import { SidebarNavigation } from './SidebarNavigation'
import { SidebarTeams } from './SidebarTeams'
import { Search } from './Search'

export function Sidebar ({ navigation, teams, collapsable = false }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <>
      <div className="h-full z-50 flex w-72 flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-1.5 overflow-y-auto border-r border-gray-200 bg-white px-4 pb-4">

          <SidebarHeader setOpenSearchCommand={setOpen} collapsable={collapsable} />

          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <SidebarNavigation navigation={navigation} />
              </li>
              <li>
                <SidebarTeams teams={teams} />
              </li>
              <li className="mt-auto">
                <TeamMember />
              </li>
            </ul>
          </nav>

        </div>
      </div>

      <Search open={open} setOpen={setOpen} />
    </>
  )
}
