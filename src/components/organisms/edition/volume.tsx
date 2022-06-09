import React from 'react'
import { Grid } from '@mui/material'
import { CardGrid } from '../cardItens'

const EditionVolume = ({ data }) => {
  return (
    <Grid width={'100%'} container gap="0.8em" paddingX={1}>
      <CardGrid volumes={data} />
    </Grid>
  )
}

export { EditionVolume }
