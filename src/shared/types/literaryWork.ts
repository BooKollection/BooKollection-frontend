import { Status } from '../enum/status'

export type LiteraryWork = {
  id: string
  name: string
  createdAt: string
  updatedAt: string
  bagShape: string
  publisher: string
  dimensions: string
  imageUrl: string
  categories: string
  startOfPublication: string
  endOfPublication: string
  originalPublisher: string
  releaseFrequency: string
  registeredBy: string
  updatedBy: string
  language: string
  synopsis: string
  edition: string
  type: string
  paperType: string
  country: string
  ilustratorBy: string
  writterBy: string
  adquiredVolumes: number
  totalVolumes: number
  status: Status
}
