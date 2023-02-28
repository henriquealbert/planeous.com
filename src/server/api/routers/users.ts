import type { User } from '@prisma/client'
import { inviteMembersFormSchema } from 'components/Organization/InviteMembers/validation'
import { env } from 'env/server.mjs'
import { sendEmail } from 'server/email/emailClient'
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
              name: true,
              plan: true
            }
          }
        }
      })

      return { user }
    }),
  createMemberAndInvite: protectedProcedure
    .input(inviteMembersFormSchema)
    .mutation(async ({ input, ctx }) => {
      const members = await ctx.prisma.$transaction(async (txPrisma) => {
        const _members = await Promise.all(
          input.members.map(async (m) => {
            const user = await txPrisma.user.create({
              data: {
                email: m.email,
                isActive: false,
                organization: {
                  connect: {
                    id: input.organizationId
                  }
                }
              }
            })

            await txPrisma.account.create({
              data: {
                userId: user.id,
                providerAccountId: 'invite' + user.id,
                provider: 'google',
                type: 'oauth'
              }
            })

            return user
          })
        )

        return _members
      })

      const emailsSent = await sendEmail({
        to: members.map((m: User) => ({ email: m.email })),
        subject: 'You have been invited to join Planeous',
        textPart: `Hi there, ${
          ctx.session?.user?.name || 'Someone'
        } invited you to join his team on Planeous.com. Click ${
          env.APP_HOSTNAME
        }/signup?from=invite-email to join}`,
        htmlPart: `
          <p>Hi there,</p>
          <p>${
            ctx.session?.user?.name || 'Someone'
          } invited you to join his team on Planeous.com</p>
          <p>Click <a href="${env.APP_HOSTNAME}/signup?from=invite-email">here</a> to join</p>
          <br />
          <br />
          <p>Planeous Team</p>
        `
      })

      return { members, emailsSent }
    })
})
