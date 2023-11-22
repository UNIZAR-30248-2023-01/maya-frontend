'use client'

import React, { useContext } from 'react'

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

export function UserProvider ({ children, user }) {
  return (
    <UserContext.Provider value={{
      user: user || defaultUser
    }}>
      {children}
    </UserContext.Provider>
  )
}
