'use client'

import React, { useState, useContext, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { supportedLanguages } from '@/lib/constants'
import { navigation } from '@/lib/dictionaries'

const LanguageContext = React.createContext()

export function useLang () {
  return useContext(LanguageContext)
}

export function LanguageProvider ({ children }) {
  const path = usePathname()

  const [lang, setLang] = useState('en')
  const [dictionary, translate] = useState({
    navigation: { ...navigation[lang] }
  })

  useEffect(() => {
    // lang update with path prefix (if supported)
    const langPrefix = path.split('/')[1]
    setLang(supportedLanguages.includes(langPrefix) ? langPrefix : 'en')

    // dictionary update with lang
    translate({
      navigation: { ...navigation[lang] }
    })
  }, [lang, path])

  return (
    <LanguageContext.Provider value={{
      lang,
      dictionary
    }}>
      {children}
    </LanguageContext.Provider>
  )
}
