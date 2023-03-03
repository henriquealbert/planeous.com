/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSession } from 'next-auth/react'
import type { ReactNode } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'
import { api } from 'utils/api'
import type { RefetchOptions, RefetchQueryFilters } from '@tanstack/react-query'
import type { UserOrg } from 'types/user'

type Status = 'authenticated' | 'loading' | 'unauthenticated'

type AuthContextType = {
  status: Status
  user?: UserOrg
  refetchUser: <TPageData>(
    options?: RefetchOptions & RefetchQueryFilters<TPageData>
  ) => Promise<any>
}

const AuthContext = createContext<AuthContextType>({
  status: 'loading',
  user: null,
  refetchUser: () => Promise.resolve()
})

const getStatus = (status: Status, isLoading: boolean) => {
  if (status === 'authenticated' && isLoading) return 'loading'
  return status
}

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { status } = useSession()
  const { data, refetch, isLoading } = api.user.getMe.useQuery()

  return (
    <AuthContext.Provider
      value={{
        status: getStatus(status, isLoading),
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
