import { createFieldValidation } from 'components/CustomFields/CustomContactFields/CreateNewCustomField/utils'
import { z } from 'zod'
import { createTRPCRouter, protectedProcedure } from '../trpc'

export const fieldRouter = createTRPCRouter({
  listAll: protectedProcedure.query(async ({ ctx }) => {
    const organizationId = ctx.session?.user?.organizationId
    if (!organizationId) {
      throw new Error('No organization ID')
    }

    const fields = await ctx.prisma.field.findMany({
      where: {
        organizationId,
        isActive: true
      }
    })

    return { fields }
  }),
  create: protectedProcedure.input(createFieldValidation).mutation(async ({ ctx, input }) => {
    const organizationId = ctx.session?.user?.organizationId
    if (!organizationId) {
      throw new Error('No organization ID')
    }

    const field = await ctx.prisma.field.create({
      data: {
        organization: {
          connect: {
            id: organizationId
          }
        },
        name: input.name,
        type: input.type,
        required: input.required,
        options: input.options
      }
    })

    return { field }
  })
})
