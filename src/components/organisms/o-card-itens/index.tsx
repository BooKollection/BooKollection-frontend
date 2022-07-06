import React from 'react'
import { EditionDetailsType } from '../o-edition/details'
import { EditionCard } from '../o-edition-card'
import { VolumeCard, VolumeType } from '../../molecules'
import { CardGridBox } from './style'
import { Skeleton, useTheme } from '@mui/material'
import { Card } from '../../atoms'

const CardGrid = ({
  volumes,
  editions
}: {
  volumes?: VolumeType[]
  editions?: EditionDetailsType[]
}) => {
  const theme = useTheme()
  return (
    <CardGridBox container>
      {!volumes && !editions
        ? Array(5)
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
        : volumes
        ? volumes.map((data: VolumeType, index) => (
            <VolumeCard key={index} data={data} />
          ))
        : editions.map((data, index) => (
            <EditionCard key={index} data={data} />
          ))}
    </CardGridBox>
  )
}

export { CardGrid }
