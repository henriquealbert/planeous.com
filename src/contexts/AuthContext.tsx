/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@prisma/client'
import type { Session } from 'next-auth'
import { useSession } from 'next-auth/react'
import type { ReactNode } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'
import { api } from 'utils/api'
import type { RefetchOptions, RefetchQueryFilters } from '@tanstack/react-query'

type AuthContextType = {
  sessionData: Session | null
  status: 'authenticated' | 'loading' | 'unauthenticated'
  user?:
    | (User & {
        organization: {
          name: string
        } | null
      })
    | null
  refetchUser: <TPageData>(
    options?: RefetchOptions & RefetchQueryFilters<TPageData>
  ) => Promise<any>
}

const AuthContext = createContext<AuthContextType>({
  sessionData: null,
  status: 'loading',
  user: null,
  refetchUser: () => Promise.resolve()
})

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { data: sessionData, status } = useSession()

  const { data, refetch } = api.user.getById.useQuery(
    { userId: sessionData?.user?.id as string },
    { enabled: !!sessionData?.user?.id }
  )

  return (
    <AuthContext.Provider
      value={{
        sessionData,
        status,
        user: data?.user,
        refetchUser: refetch
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
