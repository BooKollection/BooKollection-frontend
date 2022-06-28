import React from 'react'
import { useRouter } from 'next/router'
import { Grid } from '@mui/material'
import moment from 'moment'
import 'moment/locale/en-au'
import 'moment/locale/pt'
import { i18n } from '../../../shared/i18n'
import { CenterText } from '../../atoms/a-text'

type details = {
  totalLiteraryWorks: number
  totalVolumes: number
  collectionValue: number
  completeLiteraryWorks: number
  memberSince: Date
}
const MyCollectionDetails = ({ details }: { details: details }) => {
  const { locale } = useRouter()

  return (
    <Grid
      width={'100%'}
      container
      gap="0.8em"
      paddingX={1}
      paddingY={3}
      columns={13}
    >
      {Object.entries(details).map(([atribute, value], index) => {
        const title = i18n[locale][atribute]
        const info =
          value instanceof Date
            ? moment(new Date(value).toISOString()).format('LL')
            : value
        return (
          <Grid item xs={3} key={'details' + index}>
            <CenterText>{title}</CenterText>
            <CenterText>{String(info)}</CenterText>
          </Grid>
        )
      })}
    </Grid>
  )
}

export { MyCollectionDetails }
