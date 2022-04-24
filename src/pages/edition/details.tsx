import React from 'react'
import { useRouter } from 'next/router'
import { editionTitles } from '../../shared/i18n'
import { Grid } from '@mui/material'
import { CenterText } from '../../components/atoms/text'

type details = {
  edition: string
  status: string
  publisher: string
  totalVolumes: string
  format: string
  author: string
  ageGroup: string
  bagShape: string
  categories: string
  language: string
  country: string
  synopsis: string
  paperType: string
}
const EditionDetails = ({ details }: { details: details }) => {
  const { locale } = useRouter()
  return (
    <Grid width={'100%'} container gap="0.8em">
      {Object.entries(details).map(([atribute, value], index) => {
        const editionTitle = editionTitles[locale][atribute]
        const title = editionTitle ? editionTitle : atribute
        const boxSpace =
          atribute === 'synopsis' || atribute === 'categories' ? 3 : 2
        return (
          <Grid item xs={boxSpace} key={'details' + index}>
            <CenterText>{title}</CenterText>
            <CenterText>{value}</CenterText>
          </Grid>
        )
      })}
    </Grid>
  )
}

export { EditionDetails }
