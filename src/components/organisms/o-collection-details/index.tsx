import React from 'react'
import { useRouter } from 'next/router'
import { Grid, Skeleton, useTheme } from '@mui/material'
import 'moment/locale/en-au'
import 'moment/locale/pt'
import { i18n } from '../../../shared/i18n'
import { CenterText } from '../../atoms/a-text'
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
  const theme = useTheme()
  const keys = [
    'totalLiteraryWorks',
    'totalVolumes',
    'collectionValue',
    'completeLiteraryWorks',
    'memberSince'
  ]
  return (
    <Grid
      width={'100%'}
      container
      gap="0.8em"
      paddingX={1}
      paddingY={3}
      columns={13}
    >
      {!details
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
        : keys.map((atribute, index) => {
            const title = i18n[locale][atribute]
            const value = details[atribute]
            const info = i18nFormatData(value, locale)
            return (
              <Grid
                item
                xs={3}
                key={'details' + index}
                justifyContent={'center'}
              >
                <CenterText>{title}</CenterText>
                <CenterText>{String(info)}</CenterText>
              </Grid>
            )
          })}
    </Grid>
  )
}

export { MyCollectionDetails }
