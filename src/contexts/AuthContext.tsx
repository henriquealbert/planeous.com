/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Plan, User } from '@prisma/client'
import { useSession } from 'next-auth/react'
import type { ReactNode } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'
import { api } from 'utils/api'
import type { RefetchOptions, RefetchQueryFilters } from '@tanstack/react-query'

type Status = 'authenticated' | 'loading' | 'unauthenticated'
type UserOrg =
  | (User & {
      organization: {
        name: string
        plan: Plan
      } | null
    })
  | null

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
  const { data: session, status } = useSession()

  const { data, refetch, isLoading } = api.user.getById.useQuery(
    { userId: session?.user?.id as string },
    { enabled: !!session?.user?.id }
  )

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
