import React from 'react'
import { EditionDetailsType } from '../o-edition/details'
import { EditionCard } from '../o-edition-card'
import { AuthorCard, VolumeCard, VolumeType } from '../../molecules'
import { CardGridBox } from './style'
import { Box, Skeleton, useTheme } from '@mui/material'
import { Card, CenterText } from '../../atoms'
import { i18n } from '../../../shared/i18n'
import { useRouter } from 'next/router'

const CardGrid = (props: {
  volumes?: VolumeType[]
  editions?: EditionDetailsType[]
  authors?: unknown[]
  setVolumeEdition?: (value: unknown) => void
}) => {
  const { setVolumeEdition, volumes, editions, authors } = props
  const theme = useTheme()
  const { locale } = useRouter()
  return (
    <CardGridBox container>
      {!volumes && !editions && !authors ? (
        Array(5)
          .fill('')
          .map((_, index) => {
            return (
              <Card open={false} key={'Skeleton' + index}>
                <Skeleton
                  variant="rectangular"
                  width={'100%'}
                  height={'10em'}
                  sx={{
                    background: theme.palette.primary.dark
                  }}
                />
                {Array(4)
                  .fill('')
                  .map((_, index) => (
                    <Skeleton
                      key={'Skeleton line' + index}
                      variant="rectangular"
                      width={'100%'}
                      height={'1em'}
                      sx={{
                        marginTop: '1em',
                        borderRadius: '5px',
                        background: theme.palette.primary.light
                      }}
                    />
                  ))}
              </Card>
            )
          })
      ) : (volumes && volumes.length === 0) ||
        (editions && editions.length === 0) ||
        (authors && authors.length === 0) ? (
        <Box
          minHeight={'200px'}
          width={'100%'}
          display={'flex'}
          alignItems={'center'}
          justifyContent="center"
        >
          <CenterText>{i18n[locale].noItemRegistered}</CenterText>
        </Box>
      ) : volumes ? (
        volumes.map((data: VolumeType, index) => (
          <VolumeCard
            setVolumeEdition={setVolumeEdition}
            key={index}
            data={data}
          />
        ))
      ) : editions ? (
        editions.map((data, index) => <EditionCard key={index} data={data} />)
      ) : (
        authors.map((data, index) => <AuthorCard key={index} data={data} />)
      )}
    </CardGridBox>
  )
}

export { CardGrid }
