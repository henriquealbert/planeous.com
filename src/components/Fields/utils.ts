export const currencyFormatter = (value: string, europeanFormat: boolean) => {
  if (europeanFormat) {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }

  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const currencyParser = (value: string) => {
  return value.replace(/\.\s?|(,*)/g, '')
}
