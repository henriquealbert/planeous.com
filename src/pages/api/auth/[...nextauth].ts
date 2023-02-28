import NextAuth, { type NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import GoogleProvider from 'next-auth/providers/google'

import { prisma } from 'server/db'
import { env } from 'env/server.mjs'
import { customSignIn, customRedirect, customSession } from 'server/auth/index'

export const authOptions: NextAuthOptions = {
  callbacks: {
    signIn: (params) => customSignIn(params),
    session: (params) => customSession(params),
    redirect: (params) => customRedirect(params)
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET
    })
  ],
  secret: env.NEXTAUTH_SECRET
}

export default NextAuth(authOptions)
