import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'

import { Layout } from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  manifest: '/manifest.json',
  themeColor: '#ffffff'
}

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Toaster />
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
