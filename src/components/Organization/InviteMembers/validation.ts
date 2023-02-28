import { z } from 'zod'

export const inviteMembersFormSchema = z.object({
  members: z.array(
    z.object({
      email: z.string().email()
    })
  ),
  organizationId: z.string().min(1)
})
export type InviteMembersFormType = z.infer<typeof inviteMembersFormSchema>
