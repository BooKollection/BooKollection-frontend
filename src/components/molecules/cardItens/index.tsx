import { Grid } from '@mui/material'
import React from 'react'
import { EditionCard } from '../../atoms/editionCard'
import { VolumeCard } from '../../atoms/volumeCard'

const CardGrid = ({
  isVolume,
  itens
}: {
  isVolume?: boolean
  itens: {
    name: string
    imgSrc: string
    edition: string
    publisher: string
    number?: number
  }[]
}) => (
  <Grid
    padding={'24px'}
    width={'100%'}
    container
    gap={2}
    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
  >
    {isVolume
      ? itens.map(({ name, imgSrc, edition, publisher, number }, index) => (
          <VolumeCard
            key={index}
            name={name}
            imgSrc={imgSrc}
            edition={edition}
            publisher={publisher}
            number={number}
          />
        ))
      : itens.map(({ name, imgSrc, edition, publisher }, index) => (
          <EditionCard
            key={index}
            name={name}
            imgSrc={imgSrc}
            edition={edition}
            publisher={publisher}
          />
        ))}
  </Grid>
)

export { CardGrid }
