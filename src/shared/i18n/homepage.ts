import { PT_BR, EN_US } from "../constants"

type languageHomepageTitles = {
  addVolumes: string
  literaryWorksAdd: string
}

type homepageTitlesType = {
  [PT_BR]: languageHomepageTitles
  [EN_US]: languageHomepageTitles
}

export const homepageTitles: homepageTitlesType = {
  [PT_BR]: {
    addVolumes: 'Volumes adicionados',
    literaryWorksAdd: 'Obras Adicionadas'
  },
  [EN_US]: {
    addVolumes: 'Added Volumes',
    literaryWorksAdd: 'Added literary works'
  }
}
