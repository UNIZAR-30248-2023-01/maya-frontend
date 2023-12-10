'use client'

import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'
import { SessionProvider } from 'next-auth/react'
import { LanguageProvider } from '@/context/language-context'
import { SWRProvider } from '@/context/swr-context'
import { UserProvider } from '@/context/user-context'
import { mayaSays } from '@/lib/utils'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout ({ children }) {
  mayaSays()
  return (
    <html lang='en'>
      <body className={`${inter.className} max-w-screen overflow-x-hidden max-h-fit`}>
        <Toaster />
        <LanguageProvider>
          <SessionProvider
            refetchInterval={5 * 60}
            refetchOnWindowFocus={true}
            basePath="/api/auth"
          >
            <UserProvider>
              <SWRProvider>
                {children}
              </SWRProvider>
            </UserProvider>
          </SessionProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
