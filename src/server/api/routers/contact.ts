import { z } from 'zod'
import { createTRPCRouter, protectedProcedure } from '../trpc'

export const contactRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        firstName: z.string().min(1)
      })
    )
    .mutation(async ({ input, ctx }) => {
      if (!ctx.session.user.organizationId) {
        throw new Error('No organization ID')
      }

      const contact = await ctx.prisma.contact.create({
        data: {
          organizationId: ctx.session.user.organizationId,
          ...input
        }
      })
      return { contact }
    })
})
