import moment from 'moment'
import { PT_BR } from '../shared/constants'
import { i18n } from '../shared/i18n'

export const i18nFormatPropData = (
  value: string,
  locale: string,
  propName: string
) => {
  if (value !== null && value !== undefined) {
    let formatedData = value

    if (propName !== null && propName !== undefined) {
      const splitValue: string[] = value.split(' ')

      if (
        (propName === 'collectionValue' ||
          propName.toLocaleLowerCase().includes('price')) &&
        splitValue.length === 2
      ) {
        const [unit, value] = splitValue

        let formatedValue = Number(value).toFixed(2)
        if (locale === PT_BR) {
          formatedValue = formatedValue.replace('.', ',')
        }
        const unit18n = i18n[locale][unit] ? i18n[locale][unit] : unit
        formatedData = unit18n + ' ' + formatedValue
      }
    }
    return formatedData
  }

  return i18n[locale].notRegistered
}

export const i18nFormatData = (value, locale: string): string | null => {
  if (value !== null && value !== undefined) {
    let formatedData = value

    if (isNaN(value) && moment(value).isValid()) {
      formatedData = moment(value).format('MMMM  YYYY')
    } else if (i18n[locale][value] !== undefined) {
      formatedData = i18n[locale][value]
    }

    return String(formatedData)
  }
  return i18n[locale].notRegistered
}

export const formatCategories = (categories: string, locale: string) =>
  categories.split(',').reduce((acc, value, index) => {
    const i18nValue = i18nFormatData(value, locale)
    acc += index > 0 ? ', ' + i18nValue : i18nValue
    return acc
  }, '')
