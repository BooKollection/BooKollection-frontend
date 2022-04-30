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
    id: string
    name: string
    imgSrc: string
    edition: string
    publisher: string
    number?: number
    owned: boolean
  }[]
}) => (
  <Grid
    padding={'1em'}
    width={'100%'}
    container
    gap="1em"
    columnSpacing={{ xs: 1, sm: 1, md: 1 }}
  >
    {isVolume
      ? itens.map(
          ({ name, imgSrc, edition, publisher, number, owned }, index) => (
            <VolumeCard
              key={index}
              name={name}
              imgSrc={imgSrc}
              edition={edition}
              publisher={publisher}
              number={number}
              owned={owned}
            />
          )
        )
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
