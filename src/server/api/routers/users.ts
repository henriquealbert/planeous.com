import { z } from 'zod'
import { createTRPCRouter, protectedProcedure } from '../trpc'

export const userRouter = createTRPCRouter({
  getById: protectedProcedure
    .input(
      z.object({
        userId: z.string().min(1)
      })
    )
    .query(async ({ input, ctx }) => {
      const user = await ctx.prisma.user.findUnique({
        where: {
          id: input.userId
        },
        include: {
          organization: {
            select: {
              name: true
            }
          }
        }
      })

      return { user }
    })
})
