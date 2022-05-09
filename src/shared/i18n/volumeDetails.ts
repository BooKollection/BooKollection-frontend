import { EN_US, PT_BR } from '../constants'
import { editionTitles } from './edition'
import { getI18nRequiredProps } from '../../utils/getI18nProps'

const propsList: string[] = [
  'edition',
  'publisher',
  'price',
  'language',
  'synopsis',
  'releaseDate',
  'bagShape',
  'dimensions',
  'readingAge',
  'acquisitionDifficulty',
  'acquisitionDifficultyAverage'
]

export const volumeDetailsTitles = {
  [PT_BR]: {
    name: 'nome',
    author: 'Autor',
    gifts: 'Brindes',
    volume: 'Volume',
    number: 'Número',
    checkList: 'Check list',
    numberOfPages: 'Número de páginas',

    ...getI18nRequiredProps(editionTitles, propsList, PT_BR)
  },
  [EN_US]: {
    name: 'name',
    volume: 'Volume',
    gifts: 'Gifts',
    author: 'Author',
    number: 'Number',
    checkList: 'Check list',
    numberOfPages: 'Number of pages',

    ...getI18nRequiredProps(editionTitles, propsList, EN_US)
  }
}
