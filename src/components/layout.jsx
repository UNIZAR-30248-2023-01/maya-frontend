'use client'

import { useState } from 'react'
import { Sidebar } from '@/components/sidebar/sidebar'
import { Search } from '@/components/sidebar/search'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import { Navbar } from '@/components/navbar'
import { navigation } from '@/lib/constants'
import { useSession } from "next-auth/react"
import { redirect } from 'next/navigation'

export function Layout ({ children }) {
  const [open, setOpen] = useState(false)
  const { data: session, status } = useSession()
  if (!session || status === "loading") {
    return <div>Loading...</div>
  } else if (status === "unauthenticated") {
    return redirect('/sign-in')
  }

  return (
    <>
      <Sheet>
        <SheetContent side="left" className="p-0 w-fit">
          <Sidebar
            navigation={navigation}
            sheet={true}
            setSearchOpen={setOpen}
          />
        </SheetContent>

        <div className="h-screen w-screen flex">
          <div className='h-full flex-1'>
            <Navbar />
            <main className="py-10">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-y-2">
                {children}
              </div>
            </main>
          </div>
        </div>
      </Sheet>

      <Search open={open} setOpen={setOpen} />
    </>
  )
}
