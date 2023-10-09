import { SidebarNav } from '@/components/sidebar-nav'

export const metadata = {
  title: 'Forms',
  description: 'Advanced form example using react-hook-form and Zod.'
}

const sidebarNavItems = [
  {
    title: 'project settings',
    href: ''
  },
  {
    title: 'manage access',
    href: ''
  }
]

export function SettingsLayout ({ children }) {
  return (
    <>
      <div className="hidden space-y-6 p-10 pb-16 md:block">
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">
            <div className='border-2 border-dashed min-h-full flex items-center justify-start h-96 w-full p-4'/>
          </div>
        </div>
      </div>
    </>
  )
}
