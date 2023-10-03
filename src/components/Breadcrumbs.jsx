'use client'

import Link from 'next/link'
import { LuHome } from 'react-icons/lu'
import { usePathname } from 'next/navigation'

export function Breadcrumbs () {
  let pages = usePathname()
  pages = pages.split('/').slice(2)

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <Link href="/" className="text-gray-400 hover:text-gray-500">
              <LuHome className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <svg
                className="h-5 w-5 flex-shrink-0 text-gray-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
              <Link
                href={'page.href'}
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700 capitalize"
                aria-current={page === pages[pages.length - 1] ? 'page' : undefined}
              >
                {page}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}
