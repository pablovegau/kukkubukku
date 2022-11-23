import { signUpAuth, logInAuth } from 'database/auth'
import React, { useContext, useState } from 'react'

interface User {
  username: string
  password: string
}

const authContext = React.createContext({})

export function AuthProvider({ children }: { children: JSX.Element }) {
  const auth = useAuthProvider()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
  return useContext(authContext)
}

function useAuthProvider() {
  const [user, setUser] = useState<User | null>(null)

  const handleUser = (data: any) => {
    setUser(data)
  }

  async function signup(data: User) {
    const userData = await signUpAuth(data)

    if (userData.error) {
      throw new Error(userData.error.message)
    }

    return handleUser(userData.data.user)
  }

  async function login(data: User) {
    const userData = await logInAuth(data)

    if (userData.error) {
      throw new Error(userData.error.message)
    }

    return handleUser(userData.data.user)
  }

  return {
    user,
    signup,
    login,
  }
}
