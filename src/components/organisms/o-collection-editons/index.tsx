import React from 'react'
import { Grid } from '@mui/material'
import { CardGrid } from '../o-card-itens'
import { useSelector } from 'react-redux'
import { IRootState } from '../../../store/reducers'

const MyCollectionEditions = () => {
  const { collection } = useSelector((state: IRootState) => state.user)
  return (
    <Grid width={'100%'} container gap="0.8em" paddingX={1}>
      <CardGrid editions={collection.literaryWorks} />
    </Grid>
  )
}

export { MyCollectionEditions }
