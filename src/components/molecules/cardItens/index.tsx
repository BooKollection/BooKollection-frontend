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
    type: string
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
    width={'100%'}
    container
    gap="1em"
    columnSpacing={{ xs: 1, sm: 1, md: 1 }}
    marginLeft="0px !important"
  >
    {isVolume
      ? itens.map((data: VolumeType, index) => (
          <VolumeCard key={index} data={data} />
        ))
      : itens.map((data, index) => <EditionCard key={index} data={data} />)}
  </Grid>
)

export { CardGrid }
