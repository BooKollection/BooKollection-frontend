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
      const splitValue: string[] = value.split(' ')
      if (propName.includes('Price') && splitValue.length === 2) {
        const [unit, value] = splitValue
        let formatedValue = value
        if (locale === PT_BR) {
          formatedValue = Number(value).toFixed(2).replace('.', ',')
        }
        const unit18n = i18n[locale][unit] ? i18n[locale][unit] : unit
        formatedData = unit18n + ' ' + formatedValue
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

export const formatCategories = (categories, locale) =>
  categories.split(',').reduce((acc, value, index) => {
    const i18nValue = i18nFormatData(value, locale)
    acc += index > 0 ? ', ' + i18nValue : i18nValue
    return acc
  }, '')
