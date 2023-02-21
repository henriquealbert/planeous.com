/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import NextAuth, { type NextAuthOptions } from 'next-auth'
// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import GoogleProvider from 'next-auth/providers/google'

import { prisma } from '../../../server/db'
import { env } from '../../../env/server.mjs'

export const authOptions: NextAuthOptions = {
  // Include user.id on session and organization on user
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id

        const userOrg = await prisma.user.findUnique({
          where: { id: user.id },
          select: {
            organization: {
              select: {
                plan: true,
                id: true,
                name: true
              }
            }
          }
        })

        // Add organization to session
        if (userOrg?.organization) {
          session.user.organizationId = userOrg.organization.id
          session.user.organization = {
            id: userOrg.organization.id,
            name: userOrg.organization.name,
            plan: userOrg.organization.plan
          }
        }
      }
      return session
    },
    redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith('/')) {
        return Promise.resolve(`${baseUrl}${url}`)
      }
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) {
        return url
      }

      return Promise.resolve(baseUrl)
    }
  },
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET
    })
    /**
     * ...add more providers here
     *
     * Most other providers require a bit more work than the Discord provider.
     * For example, the GitHub provider requires you to add the
     * `refresh_token_expires_in` field to the Account model. Refer to the
     * NextAuth.js docs for the provider you want to use. Example:
     * @see https://next-auth.js.org/providers/github
     */
  ],
  secret: env.NEXTAUTH_SECRET
}

export default NextAuth(authOptions)
