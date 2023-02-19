export const getServerTranslation = async (locale: string) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return (await import(`../../public/locales/${locale}/common.json`)).default as Record<
    string,
    string
  >
}
