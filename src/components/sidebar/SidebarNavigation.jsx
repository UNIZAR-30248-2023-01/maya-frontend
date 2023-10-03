'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { useCallback } from 'react'

export function SidebarNavigation ({ navigation }) {
  let routes = usePathname()
  routes = routes.split('/').slice(2)

  const getCurrent = useCallback((item, id) => routes.length > 0 ? routes.includes(item.href.replace('/', '')) : id === 0, [routes])

  return (
    <ul role="list" className=" space-y-1">
      {navigation.map((item, id) => (
        <li key={item.name}>
          <Link
            href={item.href}
            className={cn(
              getCurrent(item, id)
                ? 'bg-gray-50 text-indigo-600'
                : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
              'group flex gap-x-3 items-center rounded-md p-2 text-sm leading-6 font-medium'
            )}
          >
            <item.icon
              className={cn(
                getCurrent(item, id) ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                'h-5 w-5 shrink-0 stroke-1'
              )}
              aria-hidden="true"
            />
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
