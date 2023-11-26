'use client'

import { useState } from 'react'
import { Sidebar } from '@/components/sidebar/sidebar'
import { Search } from '@/components/sidebar/search'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import { Navbar } from '@/components/navbar'
import { navigation } from '@/lib/constants'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { UserProvider } from '@/context/user-context'
import { ThemeProvider } from '@/components/theme-provider'
import { ThemeProvider2 } from '@/context/theme-context'
import useSWR from 'swr'

export function Layout ({ children }) {
  const [open, setOpen] = useState(false)
  const { status, data } = useSession()
  const { data: user, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people?email=eq.${data?.user?.email}&select=username,firstname,lastname,email,avatar`)

  if (status === 'loading' || isLoading) {
    return <div>Loading...</div>
  } else if (status === 'unauthenticated') {
    return redirect('/sign-in')
  }

  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
      <ThemeProvider2>
        <UserProvider user={user[0]}>
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
        </UserProvider>
      </ThemeProvider2>
     </ThemeProvider>
    </>
  )
}
