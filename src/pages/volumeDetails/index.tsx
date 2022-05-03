import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Grid, Tabs } from '@mui/material'
import { BoxContainer } from '../../components/atoms/boxContainer'
import { CenterText, CustomText } from '../../components/atoms/text'
import { volumeDetailsTitles } from '../../shared/i18n'
import { GridContainer } from './style'

type volumeDetaisType = {
  name: string
  edition: string
  publisher: string
  price: string
  language: string
  synopsis: string
  releaseDate: string
  acquisitionDifficulty: number
  acquisitionDifficultyAverage: number
  imageUrl: string
}
const VolumeDetails = () => {
  const { locale } = useRouter()
  const [data, setData] = useState<volumeDetaisType>({
    name: '',
    edition: '',
    publisher: '',
    price: '',
    language: '',
    synopsis: '',
    releaseDate: '',
    acquisitionDifficulty: 0,
    acquisitionDifficultyAverage: 0,
    imageUrl: ''
  })

  return (
    <BoxContainer>
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
          <Grid item xs={3} />
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
          <Grid item xs={3} />
        </Grid>
      </GridContainer>
    </BoxContainer>
  )
}

export default VolumeDetails
