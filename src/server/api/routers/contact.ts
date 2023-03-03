import { z } from 'zod'
import { createTRPCRouter, protectedProcedure } from '../trpc'

export const contactRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        firstName: z.string().min(1) // um unico contato -> lembrar de deixar todos os fields opcionais
      })
    )
    .mutation(async ({ input, ctx }) => {
      // const contact = await ctx.prisma.contact.create({
      //   data: {
      //     organizationId: ctx.session.user.organizationId ?? undefined
      //   }
      // })
      // return { contact }
    })
})
