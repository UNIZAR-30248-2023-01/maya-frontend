'use client'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ProjectSettings } from '@/components/projects/settings/project-settings'
import { ManageAccess } from '@/components/projects/settings/manage-access'

const projectNavItems = [
  {
    title: 'project settings'
  },
  {
    title: 'manage access'
  }
]

export function SidebarNav ({ className, items, ...props }) {
  return (
    <TabsList
      className={cn(
        'flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1 bg-transparent',
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <TabsTrigger
          key={item.title}
          value={item.title}
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'justify-start hover:bg-transparent hover:underline'
          )}
        >
          {item.title}
        </TabsTrigger>
      ))}
    </TabsList>
  )
}

export default function SettingsPage () {
  return (
    <div className="space-y-6 p-10 pb-16">
      <Tabs
        defaultValue="project settings"
        className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0"
        orientation="vertical"
      >
        <aside className="-mx-4 lg:w-1/5 mt-6">
          <SidebarNav items={projectNavItems} />
        </aside>
        <div className="flex-1 lg:max-w-2xl">
          <ProjectSettings value="project settings" />
          <ManageAccess value="manage access" />
        </div>
      </Tabs>
    </div>
  )
}
