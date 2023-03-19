import { createFieldValidation } from 'components/CustomFields/CustomContactFields/CreateNewCustomField/utils'
import { z } from 'zod'
import { createTRPCRouter, protectedProcedure } from '../trpc'

export const fieldRouter = createTRPCRouter({
  listAllActive: protectedProcedure.query(async ({ ctx }) => {
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
  listAllDeleted: protectedProcedure.query(async ({ ctx }) => {
    const organizationId = ctx.session?.user?.organizationId
    if (!organizationId) {
      throw new Error('No organization ID')
    }

    const fields = await ctx.prisma.field.findMany({
      where: {
        organizationId,
        isActive: false
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
  }),
  delete: protectedProcedure
    .input(
      z.object({
        id: z.string().min(1, { message: 'Field ID is required' })
      })
    )
    .mutation(async ({ ctx, input }) => {
      const organizationId = ctx.session?.user?.organizationId
      if (!organizationId) {
        throw new Error('No organization ID')
      }

      const field = await ctx.prisma.field.update({
        where: {
          id: input.id
        },
        data: {
          isActive: false
        }
      })

      return { field }
    }),
  restore: protectedProcedure
    .input(
      z.object({
        id: z.string().min(1, { message: 'Field ID is required' })
      })
    )
    .mutation(async ({ ctx, input }) => {
      const organizationId = ctx.session?.user?.organizationId
      if (!organizationId) {
        throw new Error('No organization ID')
      }

      const field = await ctx.prisma.field.update({
        where: {
          id: input.id
        },
        data: {
          isActive: true
        }
      })

      return { field }
    })
})
