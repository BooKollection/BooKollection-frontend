import { Grid } from '@mui/material'
import React from 'react'
import { EditionDetailsType } from '../../../pages/edition/details'
import { EditionCard } from '../editionCard'
import { VolumeCard, VolumeType } from '../volumeCard'

const CardGrid = ({
  volumes,
  editions
}: {
  volumes?: VolumeType[]
  editions?: EditionDetailsType[]
}) => (
  <Grid
    width={'100%'}
    container
    gap="1em"
    columnSpacing={{ xs: 1, sm: 1, md: 1 }}
    marginLeft="0px !important"
  >
    {volumes
      ? volumes.map((data: VolumeType, index) => (
          <VolumeCard key={index} data={data} />
        ))
      : editions.map((data, index) => <EditionCard key={index} data={data} />)}
  </Grid>
)

export { CardGrid }
