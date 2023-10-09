'use client'

import { TeamMember } from '@/components/team-member'
import { SidebarHeader } from '@/components/sidebar/sidebar-header'
import { SidebarNavigation } from '@/components/sidebar/sidebar-navigation'
import { SidebarTeams } from '@/components/sidebar/sidebar-teams'
import { useLang } from '@/context/language-context'

export function Sidebar ({ navigation, teams, sheet = false, setSidebarOpen, sidebarOpen, setSearchOpen }) {
  const { dictionary } = useLang()
  navigation = navigation.map((item) => ({ ...item, name: dictionary.navigation[item.name] }))

  return (sidebarOpen || sheet) && (
    <div className="h-full z-50 flex w-72 flex-col">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex grow flex-col gap-3 overflow-y-auto border-r border-gray-200 bg-white px-6 py-4">
        <SidebarHeader setOpenSearchCommand={setSearchOpen} setSidebarOpen={setSidebarOpen}/>
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
  )
}
