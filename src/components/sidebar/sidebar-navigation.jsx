'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { useCallback } from 'react'
import { useUser } from '@/context/user-context'
import { SheetClose } from '../ui/sheet'
import { LuLandmark } from 'react-icons/lu'
import { useLang } from '@/context/language-context'

export function SidebarNavigation ({ navigation, organization }) {
  let routes = usePathname()
  routes = routes.split('/').slice(2)
  const { user } = useUser()
  const { dictionary } = useLang()

  const getCurrent = useCallback((href, id) => routes.length > 0 ? routes.includes(href.replace('/', '')) : id === 0, [routes])
  console.log(user,
    navigation, routes)
  return (
    <ul role="list" className=" space-y-1">
      {navigation.map((item, id) => (
        (item.name !== 'personal' || (item.name === 'personal' && user.role === 'owner')) &&
        <li key={item.name}>
          <Link href={'/' + organization + item.href}>
            <SheetClose className={cn(
              getCurrent(item.href, id)
                ? 'bg-custom-lightGray text-custom-mustard dark:text-black dark:bg-custom-mustard'
                : 'text-gray-700 dark:text-custom-mustard hover:text-gray-700 hover:bg-custom-lightYellow dark:hover:text-gray-700',
              'group w-full flex gap-x-3 items-center rounded-md p-2 text-sm leading-6 font-medium capitalize'
            )}>
              <item.icon
                className={cn(
                  getCurrent(item.href, id) ? 'text-custom-mustard dark:text-black' : 'text-gray-400 group-hover:text-gray-700 dark:text-custom-mustard',
                  'h-5 w-5 shrink-0 stroke-1'
                )}
                aria-hidden="true"
              />
              {item.name}
            </SheetClose>
          </Link>
        </li>
      ))}
      <li key='organizations'>
          <Link href='/organizations'>
            <SheetClose className={cn(
              getCurrent('/organizations', navigation.length)
                ? 'bg-custom-lightGray text-custom-mustard dark:text-black dark:bg-custom-mustard'
                : 'text-gray-700 dark:text-custom-mustard hover:text-gray-700 hover:bg-custom-lightYellow dark:hover:text-gray-700',
              'group w-full flex gap-x-3 items-center rounded-md p-2 text-sm leading-6 font-medium capitalize'
            )}>
              <LuLandmark
                className={cn(
                  getCurrent('/organizations', navigation.length) ? 'text-custom-mustard dark:text-black' : 'text-gray-400 group-hover:text-gray-700 dark:text-custom-mustard',
                  'h-5 w-5 shrink-0 stroke-1'
                )}
                aria-hidden="true"
              />
              {dictionary.navigation.organizations}
            </SheetClose>
          </Link>
      </li>
    </ul>
  )
}
