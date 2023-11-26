import { Layout } from '@/components/layout'
import { SidebarNav } from '@/components/settings-sidenav'
import { profileNavItems } from '@/lib/constants'

export default function SettingsLayout ({ children }) {
  return (
    <Layout>
      <div className="space-y-6 p-10 pb-16 block">
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={profileNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </Layout>
  )
}
