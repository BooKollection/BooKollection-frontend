import React from 'react'
import { Grid } from '@mui/material'
import { CardGrid } from '../../components/molecules/cardItens'

const MyCollectionEditions = ({ data }) => {
  return (
    <Grid width={'100%'} container gap="0.8em" paddingX={1}>
      <CardGrid editions={data} />
    </Grid>
  )
}

export { MyCollectionEditions }
