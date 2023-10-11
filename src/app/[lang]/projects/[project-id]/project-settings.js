'use client'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export const metadata = {
  title: 'Project Settings',
  description: 'Here you will be able to access and manage the settings of your project.'
}

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
    <div className="hidden space-y-6 p-10 pb-16 md:block">
      <Tabs defaultValue="project settings" className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0" orientation='vertical'>
        <aside className="-mx-4 lg:w-1/5">
          <SidebarNav items={projectNavItems} />
        </aside>
        <div className="flex-1 lg:max-w-2xl">
          <TabsContent value="project settings">
            <div className='border-2 border-dashed min-h-full flex items-center justify-start h-24 w-full p-4'>
              <h1 className='text-2xl font-bold'>Project Settings</h1>
            </div>
          </TabsContent>
          <TabsContent value="manage access">
            <div className='border-2 border-dashed min-h-full flex items-center justify-start h-24 w-full p-4'>
              <h1 className='text-2xl font-bold'>manage access</h1>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}
