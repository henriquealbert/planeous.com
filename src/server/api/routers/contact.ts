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
      const organizationId = ctx.session?.user?.organizationId
      if (!organizationId) {
        throw new Error('No organization ID')
      }

      const contact = await ctx.prisma.contact.create({
        data: {
          organizationId,
          ...input
        }
      })
      return { contact }
    }),
  createBatch: protectedProcedure
    .input(z.array(z.record(z.string().optional())))
    .mutation(async ({ input, ctx }) => {
      const organizationId = ctx.session?.user?.organizationId
      if (!organizationId) {
        throw new Error('No organization ID')
      }

      const contacts = await ctx.prisma.contact.createMany({
        data: input.map((contact) => ({
          organizationId,
          ...contact
        })),
        skipDuplicates: true
      })
      return { contacts }
    })
})
