import { SidebarNav } from '@/components/settings-sidenav'
import { profileNavItems } from '@/lib/constants'

export const metadata = {
  title: 'Profile Settings',
  description: 'Here you can customize your experience.'
}

export default function SettingsLayout ({ children }) {
  return (
    <div className="hidden space-y-6 p-10 pb-16 md:block">
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/5">
          <SidebarNav items={profileNavItems} />
        </aside>
        <div className="flex-1 lg:max-w-2xl">{children}</div>
      </div>
    </div>
  )
}
