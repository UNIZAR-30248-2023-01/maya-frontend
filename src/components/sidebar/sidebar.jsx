'use client'

import { TeamMember } from '@/components/team-member'
import { SidebarHeader } from '@/components/sidebar/sidebar-header'
import { SidebarNavigation } from '@/components/sidebar/sidebar-navigation'
import { useLang } from '@/context/language-context'
import { useUser } from '@/context/user-context'
import { Separator } from '../ui/separator'

export function Sidebar ({ navigation, sheet = false, organization, restOrg }) {
  const { dictionary } = useLang()
  const { user } = useUser()
  navigation = navigation.map((item) => ({ ...item, name: dictionary.navigation[item.name] }))

  return (sheet) && (
    <div className="h-full z-50 flex w-72 flex-col">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex grow flex-col gap-3 overflow-y-auto border-r border-gray-200 dark:border-custom-mustard bg-white px-6 py-4 dark:bg-black">
        <SidebarHeader organization={organization} restOrg={restOrg} />
        <Separator className="my-2"/>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className={'flex flex-1 flex-col gap-y-7'}>
            <li>
              <SidebarNavigation navigation={navigation} organization={organization} />
            </li>
            <li className="mt-auto">
              <TeamMember
                username={user.username}
                firstname={user.firstname}
                lastname={user.lastname}
                image={user.avatar}
                organization={organization}
              />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
