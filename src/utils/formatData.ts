import moment from 'moment'
import { PT_BR } from '../shared/constants'
import { i18n } from '../shared/i18n'

/**
 * receives value , format to date or i18n
 * @param value
 * @param locale
 * @returns formated Data
 */
export const i18nFormatData = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any,
  locale: string,
  propName?: string
): string | null => {
  if (value !== null && value !== undefined) {
    let formatedData = value
    const momentDate = moment(value)

    if (propName) {
      const splitValue = value.split(' ')
      if (propName.includes('Price') && splitValue.length === 2) {
        const [unit, value] = splitValue
        let formatedValue = value
        if (locale === PT_BR) {
          formatedValue = value.replace('.', ',')
        }
        formatedData = i18n[locale][unit] + ' ' + formatedValue
      }
    } else if (isNaN(value) && momentDate.isValid()) {
      formatedData = momentDate.format('MMMM  YYYY')
    } else if (i18n[locale][value] !== undefined) {
      formatedData = i18n[locale][value]
    }

    return String(formatedData)
  }
  return i18n[locale].notRegistered
}
