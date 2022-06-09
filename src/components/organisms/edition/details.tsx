import React from 'react'
import { useRouter } from 'next/router'
import { Grid, useTheme } from '@mui/material'
import { i18n } from '../../../shared/i18n'
import { CenterText } from '../../atoms/text'
import moment from 'moment'
import { i18nFormatData } from '../../../utils/formatData'

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
  const theme = useTheme()
  const { synopsis } = details
  return (
    <Grid
      width={'100%'}
      container
      gap="0.8em"
      paddingX={0}
      paddingY={3}
      columns={13}
      borderRadius={2}
      justifyContent="center"
      bgcolor={theme.palette.primary.darkContrast}
    >
      {Object.entries(details)
        .filter(
          ([atribute]) =>
            atribute !== 'editionId' &&
            atribute !== 'synopsis' &&
            atribute !== '__typename' &&
            atribute !== 'id' &&
            atribute !== 'imageUrl'
        )
        .map(([atribute, value], index) => {
          const title = i18nFormatData(atribute, locale)

          const labelValue = i18nFormatData(value, locale)

          return (
            <Grid item minWidth={135} xs={3} key={'details' + index}>
              <CenterText>{title}</CenterText>
              <CenterText flexWrap={'wrap'}>{labelValue}</CenterText>
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
