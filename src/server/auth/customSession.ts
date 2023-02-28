import type { Session, User } from 'next-auth'
import type { AdapterUser } from 'next-auth/adapters'

interface CustomSessionParams {
  session: Session
  user: User | AdapterUser
}

export const customSession = ({ session, user }: CustomSessionParams) => {
  if (session.user) {
    session.user.id = user.id
  }
  return session
}
