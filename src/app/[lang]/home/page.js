'use client'

import { useTheme } from '@/context/theme-context'

export default function Home () {
  const { changeTheme } = useTheme()
  return (
    <>
    <button onClick={() => changeTheme({ themeName: 'purpleSkies' })}>change theme</button>
    <button onClick={() => changeTheme({ themeName: 'lux' })}>change theme</button>
      <div className='border-2 border-dashed min-h-full flex items-center justify-start h-24 w-full p-4'/>
      <div className='border-2 border-dashed min-h-full flex items-center justify-start h-96 w-full p-4'/>
    </>
  )
}
