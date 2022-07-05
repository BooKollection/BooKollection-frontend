import React from 'react'
import { Grid, useTheme } from '@mui/material'
import { CardGrid } from '../o-card-itens'

const EditionVolume = ({ data }) => {
  const theme = useTheme()

  return (
    <Grid
      bgcolor={theme.palette.primary.darkContrastText}
      padding={'1em'}
      borderRadius={2}
      width={'100%'}
      container
      gap="0.8em"
      paddingX={1}
    >
      <CardGrid volumes={data} />
    </Grid>
  )
}

export { EditionVolume }
