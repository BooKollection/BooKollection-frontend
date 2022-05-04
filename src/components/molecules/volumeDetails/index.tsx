import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Grid, Rating, Tabs } from '@mui/material'
import { BoxContainer } from '../../atoms/boxContainer'
import { CenterText, CustomText } from '../../atoms/text'
import { volumeDetailsTitles } from '../../../shared/i18n'
import { BoxContainerDetails, GridContainer } from './style'

type volumeDetaisType = {
  id: string
  name: string
  edition: string
  publisher: string
  price: number
  number: number
  language: string
  synopsis: string
  releaseDate: Date
  acquisitionDifficulty: number
  acquisitionDifficultyAverage: number
  imageUrl: string
}
const VolumeDetails = ({ data }: { data: volumeDetaisType }) => {
  const { locale } = useRouter()
  const [userAcquisitionDifficulty, setUserAcquisitionDifficulty] = useState(
    data.acquisitionDifficulty
  )

  return (
    <BoxContainerDetails>
      <GridContainer>
        <div></div>
        <Grid width={'100%'} container gap="0.8em" paddingX={1} columns={13}>
          {Object.entries(data)
            .filter(
              ([atribute]) =>
                atribute !== 'synopsis' &&
                !atribute.includes('acquisitionDifficulty') &&
                atribute !== 'imageUrl'
            )
            .map(([atribute, value], index) => {
              const editionTitle = volumeDetailsTitles[locale][atribute]
              const title = editionTitle ? editionTitle : atribute
              return (
                <Grid item xs={3} key={'details' + index}>
                  <CenterText>{title}</CenterText>
                  <CenterText>{value}</CenterText>
                </Grid>
              )
            })}
          <Grid item xs={7}>
            <CenterText>{volumeDetailsTitles[locale].synopsis}</CenterText>
            <CenterText
              style={{
                textAlign: 'justify'
              }}
            >
              {data.synopsis}
            </CenterText>
          </Grid>
          <Grid item xs={3}>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          </Grid>
          <Grid item xs={3}>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          </Grid>
        </Grid>
      </GridContainer>
    </BoxContainerDetails>
  )
}

export default VolumeDetails
