import { z } from 'zod'
import { createTRPCRouter, protectedProcedure } from '../trpc'

export const organizationRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        user: z.object({
          name: z.string().min(1),
          terms: z.boolean()
        }),
        organization: z.object({
          name: z.string().min(1),
          slug: z.string().min(1),
          size: z.string().min(1)
        })
      })
    )
    .mutation(async ({ input, ctx }) => {
      try {
        const [organization, user] = await ctx.prisma.$transaction([
          ctx.prisma.organization.create({
            data: {
              name: input.organization.name,
              slug: input.organization.slug,
              size: input.organization.size,
              ownerId: ctx.session.user.id,
              members: {
                connect: {
                  id: ctx.session.user.id
                }
              }
            }
          }),
          ctx.prisma.user.update({
            where: {
              id: ctx.session.user.id
            },
            data: {
              name: input.user.name,
              terms: input.user.terms
            }
          })
        ])

        return { organization, user }
      } catch (e) {
        console.error(e)
        return { error: 'Something went wrong' }
      }
    })
})
