/* eslint-disable @typescript-eslint/no-non-null-assertion */
export const getNamesInitials = (fullname: string) => {
  if (!fullname) return ''

  // Sanitize the string, remove all non-alphanumeric characters
  fullname = fullname.replace(/[^a-zA-Z0-9 ]/g, '')

  return fullname
    .match(/(^\S\S?|\b\S)?/g)!
    .join('')
    .match(/(^\S|\S$)?/g)!
    .join('')
    .toUpperCase()
}
