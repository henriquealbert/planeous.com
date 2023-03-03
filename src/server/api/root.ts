import { createTRPCRouter } from './trpc'

import { contactRouter } from './routers/contact'
import { organizationRouter } from './routers/organization'
import { userRouter } from './routers/user'

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  organization: organizationRouter,
  user: userRouter,
  contact: contactRouter
})

// export type definition of API
export type AppRouter = typeof appRouter
