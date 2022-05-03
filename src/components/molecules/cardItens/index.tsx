import { Grid } from '@mui/material'
import React from 'react'
import { EditionCard } from '../editionCard'
import { VolumeCard } from '../volumeCard'

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
    owned?: boolean
    editionId: string
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
          (
            { id, name, imgSrc, edition, publisher, number, owned, editionId },
            index
          ) => (
            <VolumeCard
              id={id}
              key={index}
              name={name}
              imgSrc={imgSrc}
              edition={edition}
              publisher={publisher}
              number={number}
              owned={owned}
              editionId={editionId}
            />
          )
        )
      : itens.map(({ id, name, imgSrc, edition, publisher }, index) => (
          <EditionCard
            id={id}
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
