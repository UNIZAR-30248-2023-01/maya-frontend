'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

export const metadata = {
  title: 'Project Settings',
  description: 'Here you will be able to access and manage the settings of your project.'
}

const projectNavItems = [
  {
    title: 'project settings',
    href: '/settings'
  },
  {
    title: 'manage access',
    href: '/settings/members'
  }
]

export function SidebarNav ({ className, items, ...props }) {
  let pathname = usePathname()
  pathname = '/' + pathname.split('/').slice(2).join('/')

  return (
    <nav
      className={cn(
        'flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1',
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            pathname === item.href
              ? 'bg-muted hover:bg-muted'
              : 'hover:bg-transparent hover:underline',
            'justify-start'
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  )
}

export default function SettingsPage () {
  return (
    <div className="hidden space-y-6 p-10 pb-16 md:block">
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/5">
        <SidebarNav items={projectNavItems} />
        </aside>
        <div className="flex-1 lg:max-w-2xl">
          <h1 className="text-2xl font-bold">{metadata.title}</h1>
          <p className="text-gray-500">{metadata.description}</p>
        </div>
      </div>
    </div>
  )
}
