export const getDateFromQueryParameters = (value: any): Date => {
  return new Date(String(value))
}

export const getStrDateFromDate = (value: Date): string => {
  return `${value.getFullYear()}-${value.getMonth() + 1}-${value.getDate()}`
}
