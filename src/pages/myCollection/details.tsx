import React from 'react'
import { useRouter } from 'next/router'
import { Grid } from '@mui/material'
import moment from 'moment'
import 'moment/locale/en-au';
import 'moment/locale/pt';
import { i18n } from '../../shared/i18n'
import { CenterText } from '../../components/atoms/text'

type details = {
  totalLiteraryWork: number
  totalVolumes: number
  collectionValue: number
  completeLiteraryWork: number
  memberSince: Date
}
const MyCollectionDetails = ({ details }: { details: details }) => {
  const { locale } = useRouter()

  return (
    <Grid width={'100%'} container gap="0.8em" paddingX={1} columns={13}>
      {Object.entries(details).map(([atribute, value], index) => {
        const title = i18n[locale][atribute]
        return (
          <Grid item xs={3} key={'details' + index}>
            <CenterText>{title}</CenterText>
            <CenterText>
              {atribute === 'memberSince'
                ? moment(value).format(
                  'LL'
                  )
                : value}
            </CenterText>
          </Grid>
        )
      })}
    </Grid>
  )
}

export { MyCollectionDetails }
