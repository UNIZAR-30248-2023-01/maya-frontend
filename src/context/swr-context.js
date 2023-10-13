'use client'

import { SWRConfig } from 'swr'

export const SWRProvider = ({ children }) => {
  return (
    <SWRConfig value={{
      refreshInterval: 30000,
      fetcher: (url) => fetch(url, {
        headers: {
          apikey: process.env.NEXT_PUBLIC_SUPABASE_KEY,
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_KEY}`
        }
      }).then(res => res.json())
    }}>
      {children}
    </SWRConfig>
  )
}
