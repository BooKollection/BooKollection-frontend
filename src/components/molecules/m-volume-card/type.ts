export type VolumeType = {
  id: string
  type: string
  coverPrice: string
  coverPriceUnit: string
  name: string
  imageUrl: string
  edition: string
  publisher: string
  number: number
  owned: boolean
  editionId: string
  language: string
  synopsis: string
  releaseDate: string
  acquisitionDifficulty: number
  acquisitionDifficultyAverage: number
  paperBack: number
  isbn10: string
  isbn13: string
  haveVolume: boolean
  purchasedPrice?: string
  purchasedDate?: Date
}
