import '@/styles/globals.css'

import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'
import { Layout } from '@/components/Layout'
import { getDictionary } from '@/lib/dictionaries'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  manifest: '/manifest.json',
  themeColor: '#ffffff'
}

export default async function RootLayout ({ children, params: { lang } }) {
  const dict = await getDictionary(lang)

  return (
    <html lang={lang ?? 'en'}>
      <body className={`${inter.className} max-w-screen overflow-x-hidden`}>
      <Toaster />
        <Layout dict={dict}>
          {children}
        </Layout>
      </body>
    </html>
  )
}
