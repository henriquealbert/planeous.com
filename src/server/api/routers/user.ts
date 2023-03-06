import type { User } from '@prisma/client'
import { inviteMembersFormSchema } from 'components/Organization/InviteMembers/validation'
import { env } from 'env/server.mjs'
import { sendEmail } from 'server/email/emailClient'
import { createTRPCRouter, protectedProcedure } from '../trpc'

export const userRouter = createTRPCRouter({
  getMe: protectedProcedure.query(({ ctx }) => {
    return { user: ctx.session.user }
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
                    id: ctx.session.user?.organizationId ?? undefined
                  }
                }
              }
            })

            await txPrisma.account.create({
              data: {
                userId: user.id,
                providerAccountId: `${input.provider}_invite` + user.id,
                provider: input.provider,
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
