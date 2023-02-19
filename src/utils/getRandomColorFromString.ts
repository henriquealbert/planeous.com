import stc from 'string-to-color'

export const getRandomColorFromString = (str: string) => {
  if (!str) return ''
  return stc(str)
}
