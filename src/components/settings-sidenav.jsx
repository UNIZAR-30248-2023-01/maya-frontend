'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { useLang } from '@/context/language-context'

export function SidebarNav ({ className, items, ...props }) {
  let pathname = usePathname()
  pathname = '/' + pathname.split('/').slice(2).join('/')

  const { dictionary } = useLang()

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
              ? 'bg-custom-mustard hover:bg-custom-mustard dark:text-black'
              : 'hover:bg-custom-lightYellow dark:hover:text-black ',
            'justify-start'
          )}
        >
          {dictionary.settingsAccount[`${item.title}-tab`]}
        </Link>
      ))}
    </nav>
  )
}
