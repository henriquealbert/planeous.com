import type { Session } from 'next-auth'
import { useSession } from 'next-auth/react'
import type { ReactNode } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'

type AuthContextType = {
  sessionData: Session | null
  status: 'authenticated' | 'loading' | 'unauthenticated'
}

const AuthContext = createContext<AuthContextType>({
  sessionData: null,
  status: 'loading'
})

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { data: sessionData, status } = useSession()
  console.log('AuthProvider', sessionData, status)
  return (
    <AuthContext.Provider
      value={{
        sessionData,
        status
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider')
  }

  return context
}

export { AuthContext, AuthProvider, useAuth }
