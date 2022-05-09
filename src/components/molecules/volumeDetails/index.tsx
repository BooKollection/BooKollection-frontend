import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Box, Grid, Rating, Tabs } from '@mui/material'
import Image from 'next/image'
import { CenterText, CustomText } from '../../atoms/text'
import { volumeDetailsTitles } from '../../../shared/i18n'
import { BoxContainerDetails, GridContainer } from './style'
import { BoxContainer } from '../../atoms/boxContainer'

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
      <GridContainer flexWrap={'wrap'}>
        <Box style={{ marginTop: '1em', width: '100%' }}>
          <Image
            src={data.imageUrl}
            alt="Picture of the author"
            width={400}
            height={450}
            objectFit="contain"
            unoptimized={true}
          />
        </Box>

        <Grid
          height={'100%'}
          container
          gap="10px"
          paddingY={10}
          columns={{ xs: 10, sm: 12, md: 13 }}
        >
          {Object.entries(data)
            .filter(
              ([atribute]) =>
                atribute !== 'synopsis' &&
                atribute !== 'imageUrl' &&
                atribute !== 'id' &&
                atribute !== 'editionId' &&
                !atribute.includes('acquisition')
            )
            .concat([
              ['acquisitionDifficulty', data.acquisitionDifficulty],
              [
                'acquisitionDifficultyAverage',
                data.acquisitionDifficultyAverage
              ]
            ])
            .map(([atribute, value], index) => {
              const editionTitle = volumeDetailsTitles[locale][atribute]
              const title = editionTitle ? editionTitle : atribute
              return (
                <Grid item sm={2} md={3} xs={4} key={'details' + index}>
                  <CenterText>{title}</CenterText>
                  {atribute.includes('acquisition') ? (
                    <Box style={{ textAlign: 'center' }}>
                      <Rating
                        readOnly={atribute === 'acquisitionDifficultyAverage'}
                        name="half-rating"
                        precision={0.5}
                        value={Number(value)}
                      />
                    </Box>
                  ) : (
                    <CenterText>{value}</CenterText>
                  )}
                </Grid>
              )
            })}
          <Grid item xs={12}>
            <CenterText>{volumeDetailsTitles[locale].synopsis}</CenterText>
            <CenterText
              style={{
                textAlign: 'justify'
              }}
            >
              {data.synopsis}
            </CenterText>
          </Grid>
        </Grid>
      </GridContainer>
    </BoxContainerDetails>
  )
}

export default VolumeDetails
