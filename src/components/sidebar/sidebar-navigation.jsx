'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { useCallback } from 'react'
import { useUser } from '@/context/user-context'
import { SheetClose } from '../ui/sheet'

export function SidebarNavigation ({ navigation }) {
  let routes = usePathname()
  routes = routes.split('/').slice(2)
  const { user } = useUser()

  const getCurrent = useCallback((item, id) => routes.length > 0 ? routes.includes(item.href.replace('/', '')) : id === 0, [routes])
  console.log(user,
    navigation, routes)
  return (
    <ul role="list" className=" space-y-1">
      {navigation.map((item, id) => (
        (item.name !== 'personal' || (item.name === 'personal' && user.role === 'owner')) &&
        <li key={item.name}>
          <Link href={routes[0] + '/' + item.href}>
            <SheetClose className={cn(
              getCurrent(item, id)
                ? 'bg-custom-lightGray text-custom-mustard dark:text-black dark:bg-custom-mustard'
                : 'text-gray-700 dark:text-custom-mustard hover:text-gray-700 hover:bg-custom-lightYellow dark:hover:text-gray-700',
              'group w-full flex gap-x-3 items-center rounded-md p-2 text-sm leading-6 font-medium capitalize'
            )}>
              <item.icon
                className={cn(
                  getCurrent(item, id) ? 'text-custom-mustard dark:text-black' : 'text-gray-400 group-hover:text-gray-700 dark:text-custom-mustard',
                  'h-5 w-5 shrink-0 stroke-1'
                )}
                aria-hidden="true"
              />
              {item.name}
            </SheetClose>
          </Link>
        </li>
      ))}
    </ul>
  )
}
