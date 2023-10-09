import { SidebarNav } from '@/components/settings-sidenav'

export const metadata = {
  title: 'Forms',
  description: 'Advanced form example using react-hook-form and Zod.'
}

const sidebarNavItems = [
  {
    title: 'profile',
    href: '/settings'
  },
  {
    title: 'account',
    href: '/settings/account'
  },
  {
    title: 'appearance',
    href: '/settings/appearance'
  },
  {
    title: 'notifications',
    href: '/settings/notifications'
  },
  {
    title: 'display',
    href: '/settings/display'
  }
]

export default function SettingsLayout ({ children }) {
  return (
    <>
      <div className="hidden space-y-6 p-10 pb-16 md:block">
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </>
  )
}
