'use client'

import { Sidebar } from '@/components/sidebar/sidebar'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import { Navbar } from '@/components/navbar'
import { navigation } from '@/lib/constants'
import { useSession, signOut } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { UserProvider } from '@/context/user-context'
import { ThemeProvider } from '@/components/theme-provider'
import useSWR from 'swr'
import { Button } from './ui/button'
import { useLang } from '@/context/language-context'

export function Layout ({ children, onlyProviders, organization }) {
  const { status, data } = useSession()
  const { data: user, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people?email=eq.${data?.user?.email}&select=username,firstname,lastname,email,avatar`)
  const { data: organizations, isLoadingOrganization } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people?email=eq.${data?.user?.email}&select=username,organizations:people-org(*)`)

  const { dictionary } = useLang()

  if (status === 'loading' || isLoading || isLoadingOrganization) {
    return (
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <div className="min-h-screen flex flex-col justify-center items-center dark:bg-black">
          <main className="mx-auto w-full max-w-7xl px-6 pt-10 pb-16 sm:pb-24 lg:px-8 dark:bg-black">
            <img
              className="mx-auto h-24 w-auto sm:h-12 animate-pulse"
              src="/logo.webp"
              alt="MaYA"
            />
          </main>
        </div>
      </ThemeProvider>
    )
  } else if (status === 'unauthenticated') {
    return redirect('/sign-in')
  }

  const org = organizations ? organizations[0]?.organizations.find(e => e.organization === organization) : undefined
  const restOrg = organizations ? organizations[0]?.organizations?.filter(e => e.organization !== organization) : []

  if (organization && organizations && !org) {
    return redirect('/organizations')
  }

  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <UserProvider user={org ? { ...user[0], role: org.role } : user[0]}>
          {onlyProviders
            ? (
                <main className="py-5 flex flex-col w-screen h-screen">
                    <div className='w-full flex justify-end items-end px-6'>
                      <Button onClick={() => {
                        signOut({ callbackUrl: '/' })
                      }}
                        id="sign-out-button"
                        className='first-letter:uppercase hover:bg-custom-lighterYellow text-black bg-custom-mustard w-fit font-semibold'
                      >
                        {dictionary.settingsAccount['logout-tab']}
                    </Button>
                    </div>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-y-2 h-full">
                      {children}
                    </div>
                </main>
              )
            : (
              <>
            <Sheet>
              <SheetContent side="left" className="p-0 w-fit">
                <Sidebar
                  navigation={navigation}
                      sheet={true}
                      organization={organization}
                      restOrg={restOrg}
                />
              </SheetContent>
              <div className="h-screen w-screen flex">
                <div className='h-full flex-1'>
                  <Navbar organization={organization}/>
                  <main className="py-10">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-y-2">
                      {children}
                    </div>
                  </main>
                </div>
              </div>
            </Sheet>
              </>
              )
          }

        </UserProvider>
      </ThemeProvider>
    </>
  )
}
