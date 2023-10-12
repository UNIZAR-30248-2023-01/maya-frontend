'use client'

import React, { useState, useContext, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { supportedLanguages } from '@/lib/constants'
import * as dictionaries from '@/lib/dictionaries'

const LanguageContext = React.createContext()

export function useLang () {
  return useContext(LanguageContext)
}

const translate = (dictionary, lang) => {
  const translated = {}
  for (const key in dictionary) {
    translated[key] = dictionary[key][lang]
  }
  return translated
}

export function LanguageProvider ({ children }) {
  const path = usePathname()

  const [lang, setLang] = useState('en')
  const [dictionary, updateDictionary] = useState(translate(dictionaries, lang))

  useEffect(() => {
    // lang update with path prefix (if supported)
    const langPrefix = path.split('/')[1]
    setLang(supportedLanguages.includes(langPrefix) ? langPrefix : 'en')

    // dictionary update with lang
    updateDictionary(translate(dictionaries, lang))
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
