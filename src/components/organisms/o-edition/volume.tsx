import React from 'react'
import { Grid, useTheme } from '@mui/material'
import { CardGrid } from '../o-card-itens'

const EditionVolume = ({ volumes, setVolumeEdition }) => {
  const theme = useTheme()

  const orderedList = volumes.sort((a, b) => a.number - b.number)

  return (
    <Grid
      bgcolor={theme.palette.primary.darkContrastText}
      padding={'1em'}
      borderRadius={2}
      width={'100%'}
      height={'100%'}
      container
      gap="0.8em"
      paddingX={1}
    >
      <CardGrid setVolumeEdition={setVolumeEdition} volumes={orderedList} />
    </Grid>
  )
}

export { EditionVolume }
