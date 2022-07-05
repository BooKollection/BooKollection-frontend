import moment from 'moment'
import { COINS, PT_BR } from '../shared/constants'
import { i18n } from '../shared/i18n'

/**
 * receives value , format to date or i18n
 * @param value
 * @param locale
 * @returns formated Data
 */
export const i18nFormatData = (
  value: unknown,
  locale: string,
  propName?: string
): string => {
  let formatedData = value
  const momentDate = moment(value)

  if (propName) {
    const splitValue = (value + '').split(' ')
    if (propName.includes('Price') && splitValue.length === 2) {
      const [unit, value] = splitValue
      let formatedValue = value
      if (locale === PT_BR) {
        formatedValue = value.replace('.', ',')
      }
      formatedData = i18n[locale][unit] + ' ' + formatedValue
    }
  } else if (!Number(value) && momentDate.isValid()) {
    formatedData = momentDate.format('MMMM  YYYY')
  } else if (i18n[locale][value] !== undefined) {
    formatedData = i18n[locale][value]
  }

  return String(formatedData)
}
