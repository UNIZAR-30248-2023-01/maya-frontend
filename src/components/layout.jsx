'use client'

import { useState, useEffect } from 'react'
import { Sidebar } from '@/components/sidebar/sidebar'
import { Search } from '@/components/sidebar/search'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import { Navbar } from '@/components/navbar'
import { navigation } from '@/lib/constants'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { UserProvider } from '@/context/user-context'
import { ThemeProvider } from '@/components/theme-provider'
import useSWR from 'swr'

export function Layout ({ children, onlyProviders, organization }) {
  const [open, setOpen] = useState(false)
  const { status, data } = useSession()
  const { data: user, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people?email=eq.${data?.user?.email}&select=username,firstname,lastname,email,avatar`)
  const { data: organizations, isLoadingOrganization } = useSWR(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people?email=eq.${data?.user?.email}&select=username,organizations:people-org(*)`)
  useEffect(() => {
    const handleKeyPress = (event) => {
      // Verifica si la tecla presionada es 'K' y si también se presionó la tecla Ctrl o Cmd
      if ((event.key === 'k' || event.key === 'K') && (event.ctrlKey || event.metaKey)) {
        // Realiza la lógica que deseas cuando se presiona Ctrl+K o Cmd+K
        event.preventDefault()
        setOpen(value => !value)
      }
    }

    // Agrega el event listener al montar el componente
    document.addEventListener('keydown', handleKeyPress)

    // Remueve el event listener al desmontar el componente para evitar pérdidas de memoria
    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, []) // El array vacío [] asegura que el efecto se ejecute solo una vez al montar el componente

  if (status === 'loading' || isLoading || isLoadingOrganization) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <main className="mx-auto w-full max-w-7xl px-6 pt-10 pb-16 sm:pb-24 lg:px-8">
          <img
            className="mx-auto h-24 w-auto sm:h-12 animate-pulse"
            src="/logo.webp"
            alt="Your Company"
          />
        </main>
      </div>
    )
  } else if (status === 'unauthenticated') {
    return redirect('/sign-in')
  }

  const org = organizations ? organizations[0].organizations.find(e => e.organization === organization) : undefined

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
            <>{children}</>
              )
            : (
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

        </UserProvider>
      </ThemeProvider>
    </>
  )
}
