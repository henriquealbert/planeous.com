import type { Plan, User } from '@prisma/client'

export type UserOrg =
  | (User & {
      organization: {
        id: string
        name: string
        plan: Plan
      } | null
    })
  | null
