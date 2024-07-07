import { format, parseISO } from 'date-fns'

export const getFormattedDate = (date: string) => {
  const parse = parseISO(date)
  const formattedDate = format(parse, 'MMM d, yyyy')
  return formattedDate
}
