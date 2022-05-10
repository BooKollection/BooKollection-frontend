import { Grid } from '@mui/material'
import React from 'react'
import { EditionCard } from '../editionCard'
import { VolumeCard, VolumeType } from '../volumeCard'

const CardGrid = ({
  isVolume,
  itens
}: {
  isVolume?: boolean
  itens: {
    id: string
    name: string
    imageUrl: string
    edition: string
    publisher: string
    number?: number
    owned?: boolean
    editionId: string
  }[]
}) => (
  <Grid
    padding={'1em'}
    width={'100%'}
    height={'100%'}
    container
    gap="1em"
    columnSpacing={{ xs: 1, sm: 1, md: 1 }}
  >
    {isVolume
      ? itens.map((data: VolumeType, index) => (
          <VolumeCard key={index} data={data} />
        ))
      : itens.map(({ id, name, imageUrl, edition, publisher }, index) => (
          <EditionCard
            id={id}
            key={index}
            name={name}
            imageUrl={imageUrl}
            edition={edition}
            publisher={publisher}
          />
        ))}
  </Grid>
)

export { CardGrid }
