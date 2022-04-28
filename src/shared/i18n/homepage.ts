type languageHomepageTitles = {
  addVolumes: string
  literaryWorksAdd: string
}

type homepageTitlesType = {
  'pt-BR': languageHomepageTitles
  'en-US': languageHomepageTitles
}

export const homepageTitles: homepageTitlesType = {
  'pt-BR': {
    addVolumes: 'Volumes adicionados',
    literaryWorksAdd: 'Obras Adicionadas'
  },
  'en-US': {
    addVolumes: 'Added Volumes',
    literaryWorksAdd: 'Added literary works'
  }
}
