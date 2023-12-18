'use client'

import Link from 'next/link'
import { footer as navigation } from '@/lib/constants'
import { useLang } from '@/context/language-context'

export function Footer () {
  const { dictionary } = useLang()

  return (
    <footer className="z-50">
      <div className="mx-auto max-w-7xl overflow-hidden py-20 px-6 sm:py-24 lg:px-8 z-50">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer z-50">
          {navigation.map((item) => (
            <div key={item.name} className="pb-6 z-50">
              <Link href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900 z-50">
                {dictionary.footer[item.name]}
              </Link>
            </div>
          ))}
        </nav>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; {new Date().getFullYear()} <a href="https://github.com/UNIZAR-30248-2023-01" target="_blank" referrerPolicy="no-referrer" rel="noreferrer">Grace Hopper</a>, Inc. {dictionary.landing['all-right-reserved']}.
        </p>
      </div>
    </footer>
  )
}
