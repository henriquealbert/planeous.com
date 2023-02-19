// Use type safe message keys with `next-intl`
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
type Messages = typeof import('./public/locales/en/common.json')
type IntlMessages = Messages
