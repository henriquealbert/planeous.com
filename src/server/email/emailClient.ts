import { env } from 'env/server.mjs'
import Mailjet from 'node-mailjet'

const VERSION = 'v3.1'
const FROM_EMAIL = 'no-reply@planeous.com'
const FROM_NAME = 'Planeous - No Reply'

const mailjet = new Mailjet({
  apiKey: env.MAILJET_API_KEY || 'your-api-key',
  apiSecret: env.MAILJET_API_SECRET || 'your-api-secret'
})

export const sendEmail = async ({ to, subject, textPart, htmlPart }: SendEmailProps) => {
  if (to.map((t) => t.email).includes(null)) {
    return Promise.resolve({ error: 'Email is null' })
  }
  try {
    const result = await mailjet.post('send', { version: VERSION }).request({
      Messages: [
        {
          From: {
            Email: FROM_EMAIL,
            Name: FROM_NAME
          },
          To: to.map((t) => ({
            Email: t.email,
            Name: t?.name || ''
          })),
          Subject: subject,
          TextPart: textPart,
          HTMLPart: htmlPart
        }
      ]
    })

    return result.body
  } catch (error) {
    console.error(error)
    return { error: 'Error sending email' }
  }
}

interface SendEmailProps {
  to: To[]
  subject: string
  textPart?: string
  htmlPart: string
}

interface To {
  email: string | null
  name?: string
}
