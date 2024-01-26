import React from 'react'
import { useRouter } from 'next/router'
import { Grid, Skeleton, useTheme } from '@mui/material'
import 'moment/locale/en-au'
import 'moment/locale/pt'
import { i18n } from '../../../shared/i18n'
import { CenterText } from '../../atoms/a-text'
import { i18nFormatData } from '../../../utils/formatData'
import { IRootState } from '../../../store/reducers'
import { useSelector } from 'react-redux'

const MyCollectionDetails = () => {
  const { locale } = useRouter()
  const { collection } = useSelector((state: IRootState) => state.user)

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
      {!collection
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
            const value = collection[atribute]
            const info = i18nFormatData(value, locale)
            return (
              <Grid
                item
                xs={6}
                sm={6}
                md={2}
                key={'details' + index}
                justifyContent="center"
                alignItems="center"
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
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
