import { organizationRouter } from './routers/organization'
import { userRouter } from './routers/users'
import { createTRPCRouter } from './trpc'

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  organization: organizationRouter,
  user: userRouter
})

// export type definition of API
export type AppRouter = typeof appRouter
