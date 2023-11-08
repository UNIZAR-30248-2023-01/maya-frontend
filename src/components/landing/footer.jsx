'use client'
import { useLang } from '@/context/language-context'

export function Footer () {
  const { dictionary } = useLang()
  return (
      <footer aria-labelledby="footer-heading" className="relative">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-4 lg:px-8">
          <div className="border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
            <p className="mt-8 text-xs leading-5 text-gray-600 md:order-1 md:mt-0">
              &copy; {new Date().getFullYear()} MaYA, Inc. {dictionary.landing['all-right-reserved']}.
            </p>
          </div>
        </div>
      </footer>
  )
}
