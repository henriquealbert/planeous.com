interface CustomRedirectParams {
  url: string
  baseUrl: string
}

export const customRedirect = ({ url, baseUrl }: CustomRedirectParams) => {
  // Allows relative callback URLs
  if (url.startsWith('/')) {
    return Promise.resolve(`${baseUrl}${url}`)
  }
  // Allows callback URLs on the same origin
  else if (new URL(url).origin === baseUrl) {
    return url
  }

  return Promise.resolve(baseUrl)
}
