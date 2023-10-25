import '@/styles/globals.css'

import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'
import { Layout } from '@/components/Layout'
import { LanguageProvider } from '@/context/language-context'
import { SWRProvider } from '@/context/swr-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  manifest: '/manifest.json',
  themeColor: '#ffffff'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} max-w-screen overflow-x-hidden`}>
        <Toaster />
        <LanguageProvider>
          <SWRProvider>
            <Layout>
              {children}
            </Layout>
          </SWRProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
