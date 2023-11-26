'use client'

import React, { useState, useContext, useEffect } from 'react'
import { themes } from '@/lib/themes'

const ThemeContext = React.createContext()

export function useTheme () {
  return useContext(ThemeContext)
}

export function ThemeProvider ({ children }) {
  const [theme, setTheme] = useState(themes.light)

  const changeTheme = ({ themeName }) => {
    const themes2Select = Object.keys(themes)
    if (themes2Select.includes(themeName)) {
      console.log('themeName', themeName)
      setTheme(themes[themeName])
      localStorage.setItem('theme', JSON.stringify(themeName))
    }
  }

  // Proporciona el contexto y el tema actual a los componentes secundarios
  useEffect(() => {
    const themeName = localStorage.getItem('theme')
    if (themeName) {
      console.log('themeName1', themeName)
      changeTheme({ themeName })
    } else {
      console.log('themeName2', themeName)
      changeTheme({ themeName: 'light' })
    }
  }, [])

  return (
    <ThemeContext.Provider value={{
      ...theme,
      changeTheme
    }}>
      {children}
    </ThemeContext.Provider>
  )
}
