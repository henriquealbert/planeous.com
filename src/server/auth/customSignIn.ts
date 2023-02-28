import type { Profile, User } from 'next-auth'
import type { Account } from 'next-auth'
import type { AdapterUser } from 'next-auth/adapters'
import { prisma } from 'server/db'

interface CustomSignInParams {
  user: User | AdapterUser
  account: Account | null
  profile?: Profile
}

export const customSignIn = async ({ user, account, profile }: CustomSignInParams) => {
  const existingUser = await prisma.user.findUnique({
    where: {
      email: user.email || ''
    },
    select: {
      isActive: true,
      id: true,
      accounts: {
        select: {
          id: true
        }
      }
    }
  })

  // User was invited using InviteMembers modal.
  if (existingUser && !existingUser?.isActive) {
    //  Update the account model with provider (eg. google) data
    const updatedAccount = await prisma.account.update({
      where: {
        id: existingUser?.accounts[0]?.id || ''
      },
      data: {
        ...account
      }
    })

    // Update the user model with profile data coming from the provider (eg. google)
    // and set the user to active.
    const updatedUser = await prisma.user.update({
      where: {
        id: existingUser?.id || ''
      },
      data: {
        image: profile?.picture || '',
        isActive: true,
        name: profile?.name || '',
        terms: true
      }
    })

    return !!updatedAccount && !!updatedUser
  }

  return true
}
