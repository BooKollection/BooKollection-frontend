import moment from 'moment'
import { i18n } from '../shared/i18n'

/**
 * receives value , format to date or i18n
 * @param value
 * @param locale
 * @returns formated Data
 */
export const i18nFormatData = (value: unknown, locale: string): string => {
  let formatedData = value
  const momentDate = moment(value)

  if (!Number(value) && momentDate.isValid()) {
    formatedData = momentDate.format('MMMM  YYYY')
  } else if (i18n[locale][value] !== undefined) {
    formatedData = i18n[locale][value]
  }

  return String(formatedData)
}
