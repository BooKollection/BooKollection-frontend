import { EN_US, PT_BR } from '../constants'
import { editionTitles } from './edition'
import { getI18nRequiredProps } from '../../utils/getI18nProps'

const propsList: string[] = [
  'edition',
  'publisher',
  'price',
  'language',
  'synopsis',
  'releaseDate'
]

export const volumeDetailsTitles = {
  [PT_BR]: {
    name: 'nome',
    volume: 'Volume',
    acquisitionDifficulty: 'Dificuldade de aquisição',
    acquisitionDifficultyAverage: 'Dificuldade de aquisição (publico)',
    ...getI18nRequiredProps(editionTitles, propsList, PT_BR)
  },
  [EN_US]: {
    name: 'name',
    volume: 'Volume',
    acquisitionDifficulty: 'Acquisition difficulty',
    acquisitionDifficultyAverage: 'Acquisition difficulty (public)',
    ...getI18nRequiredProps(editionTitles, propsList, EN_US)
  }
}
