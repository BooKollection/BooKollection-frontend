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
  const { synopsis } = details
  return (
    <Grid width={'100%'} container gap="0.8em" paddingX={1} columns={13}>
      {Object.entries(details)
        .filter(([atribute]) => atribute !== 'synopsis')
        .map(([atribute, value], index) => {
          const editionTitle = editionTitles[locale][atribute]
          const title = editionTitle ? editionTitle : atribute
          return (
            <Grid item xs={3} key={'details' + index}>
              <CenterText>{title}</CenterText>
              <CenterText>{value}</CenterText>
            </Grid>
          )
        })}
      <Grid item xs={3} />
      <Grid item xs={7}>
        <CenterText>{editionTitles[locale].synopsis}</CenterText>
        <CenterText
          style={{
            textAlign: 'justify'
          }}
        >
          {synopsis}
        </CenterText>
      </Grid>
      <Grid item xs={3} />
    </Grid>
  )
}

export { EditionDetails }
