import { randomId } from '@mantine/hooks'
import { z } from 'zod'

export const onboardingFormSchema = z.object({
  user: z.object({
    name: z.string().min(1),
    terms: z.boolean()
  }),
  organization: z.object({
    name: z.string().min(1),
    slug: z
      .string()
      .min(1)
      .transform((slug) => {
        const parsedSlug = slug
          .toLowerCase()
          .replace(/ /g, '-')
          .replace(/[^\w-]+/g, '')
        return `${parsedSlug}${randomId().replace(/mantine/g, '')}`
      }),
    size: z.string().min(1)
  })
})
export type OnboardingFormType = z.infer<typeof onboardingFormSchema>
