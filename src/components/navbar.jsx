'use client'

import { SheetTrigger } from '@/components/ui/sheet'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { LuMenu } from 'react-icons/lu'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { HiBars3, HiXMark } from 'react-icons/hi2'
import Link from 'next/link'

export function Navbar () {
  return (
    <div className="z-40 flex items-center justify-between light:bg-white px-4 py-4 shadow-sm sm:px-6 sticky top-0 dark:bg-dark">
      <div className='flex items-center gap-x-6'>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" id="sidebar-button">
              <span className="sr-only">Open sidebar</span>
              <LuMenu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </SheetTrigger>
        <Breadcrumbs />
      </div>
      <img className="h-10" src="/logo.webp" alt="logo de la empresa" />
    </div>
  )
}

const navigation = [
  { name: 'Características', href: '/#features' },
  { name: 'Novedades', href: '/#news' }
]

export function RootNavbar ({ logged }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="px-6 pt-6 lg:px-8">
      <nav className="flex items-center justify-between" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">MaYA</span>
            <img className="h-14" src="/logo.webp" alt="logo de la empresa" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <HiBars3 className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href={logged ? '/home' : '/sign-in'} className="text-sm font-semibold leading-6 text-gray-900">
            {logged ? 'Volver al inicio' : 'Entrar'} <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Maya</span>
              <img className="h-12" src="/assets/images/logo.png" alt="../public/assets/logo.png" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <HiXMark className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/auth/login"
                  className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                >
                    Entrar
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  )
}
