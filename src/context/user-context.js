'use client'

import React, { useState, useContext, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { fetcher } from '@/context/swr-context'

const UserContext = React.createContext()

export function useUser () {
  return useContext(UserContext)
}

const defaultUser = {
  username: 'johndoe',
  firstname: 'John',
  lastname: 'Doe',
  email: 'johndoe@example.com',
  avatar: '/assets/avatars/animals/1.webp'
}

export function UserProvider ({ children }) {
  const [user, setUser] = useState()
  const { status, data } = useSession()

  // Set default user if no user in session
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('maya-user'))
    if (!user) {
      setUser(defaultUser)
    }
  }, [])

  // Set user from session
  useEffect(() => {
    if (status !== 'authenticated' && !data) return

    let { user } = data
    if (!user) {
      user = JSON.parse(localStorage.getItem('maya-user'))
    }

    (async function fetchData (email) {
      const user = await fetcher(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/people?email=eq.${email}&select=username,firstname,lastname,email,avatar`)
      setUser(user[0])
    }(user.email))
  }, [status, data])

  // Update local storage when user changes
  useEffect(() => {
    if (!user) return
    localStorage.setItem('maya-user', JSON.stringify(user))
  }, [user])

  return (
    <UserContext.Provider value={{
      user
    }}>
      {children}
    </UserContext.Provider>
  )
}
