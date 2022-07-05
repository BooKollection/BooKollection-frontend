import React from 'react'
import { useRouter } from 'next/router'
import { Grid, Skeleton, useTheme } from '@mui/material'
import moment from 'moment'
import 'moment/locale/en-au'
import 'moment/locale/pt'
import { i18n } from '../../../shared/i18n'
import { CenterText } from '../../atoms/a-text'
import { useSelector } from 'react-redux'
import { IRootState } from '../../../store/reducers'
import { i18nFormatData } from '../../../utils/formatData'

type details = {
  totalLiteraryWorks: number
  totalVolumes: number
  collectionValue: number
  completeLiteraryWorks: number
  memberSince: Date
}
const MyCollectionDetails = ({ details }: { details: details }) => {
  const { locale } = useRouter()
  const { open } = useSelector((state: IRootState) => state.loading)
  const theme = useTheme()
  return (
    <Grid
      width={'100%'}
      container
      gap="0.8em"
      paddingX={1}
      paddingY={3}
      columns={13}
    >
      {open
        ? Array(8)
            .fill('')
            .map((_, index) => (
              <div key={'Skeleton' + index}>
                <Skeleton
                  variant="rectangular"
                  width={'9em'}
                  height={'9em'}
                  sx={{
                    background: theme.palette.primary.darkContrast,
                    borderRadius: '10px'
                  }}
                />
              </div>
            ))
        : Object.entries(details).map(([atribute, value], index) => {
            const title = i18n[locale][atribute]
            const info = i18nFormatData(value, locale)
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
