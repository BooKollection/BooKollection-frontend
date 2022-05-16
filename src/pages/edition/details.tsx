import React from 'react'
import { useRouter } from 'next/router'
import { Grid } from '@mui/material'
import { i18n } from '../../shared/i18n'
import { CenterText } from '../../components/atoms/text'

export type EditionDetailsType = {
  id: string
  name: string
  imageUrl: string
  adquiredVolumes?: number
  edition: string
  status: string
  publisher: string
  totalVolumes: number
  format: string
  illustratorBy: string
  writterBy: string
  ageRange: string
  bagShape: string
  categories: string
  language: string
  country: string
  synopsis: string
  paperType: string
}
const EditionDetails = ({ details }: { details: EditionDetailsType }) => {
  const { locale } = useRouter()
  const { synopsis } = details
  return (
    <Grid
      width={'100%'}
      container
      gap="0.8em"
      paddingX={1}
      paddingY={3}
      columns={13}
      justifyContent="center"
    >
      {Object.entries(details)
        .filter(
          ([atribute]) =>
            atribute !== 'editionId' &&
            atribute !== 'synopsis' &&
            atribute !== 'id' &&
            atribute !== 'imageUrl'
        )
        .map(([atribute, value], index) => {
          const editionTitle =
            atribute === 'type'
              ? i18n[locale].typeLabelEdition[atribute]
              : i18n[locale][atribute]
          const title = editionTitle ? editionTitle : atribute
          return (
            <Grid item minWidth={135} xs={3} key={'details' + index}>
              <CenterText>{title}</CenterText>
              <CenterText flexWrap={'wrap'}>{value}</CenterText>
            </Grid>
          )
        })}
      <Grid item xs={13}>
        <CenterText>{i18n[locale].synopsis}</CenterText>
        <CenterText
          style={{
            textAlign: 'justify'
          }}
        >
          {synopsis}
        </CenterText>
      </Grid>
    </Grid>
  )
}

export { EditionDetails }
