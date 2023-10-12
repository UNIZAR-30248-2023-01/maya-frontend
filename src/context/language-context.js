'use client'

import React, { useState, useContext, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { supportedLanguages } from '@/lib/constants'
import * as dictionaries from '@/lib/dictionaries'

const LanguageContext = React.createContext()

export function useLang () {
  return useContext(LanguageContext)
}

export function LanguageProvider ({ children }) {
  const path = usePathname()

  const [lang, setLang] = useState('en')
  const [dictionary, translate] = useState({
    // add more dictionaries here and in the useEffect below
    navigation: { ...dictionaries.navigation[lang] },
    table: { ...dictionaries.table[lang] },
    projects: { ...dictionaries.projects[lang] }
  })

  useEffect(() => {
    // lang update with path prefix (if supported)
    const langPrefix = path.split('/')[1]
    setLang(supportedLanguages.includes(langPrefix) ? langPrefix : 'en')

    // dictionary update with lang
    translate({
      // add more dictionaries here and in the state above
      navigation: { ...dictionaries.navigation[lang] },
      table: { ...dictionaries.table[lang] },
      projects: { ...dictionaries.projects[lang] }
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
