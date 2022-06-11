import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Box, Grid, Rating } from '@mui/material'
import Image from 'next/image'
import { CenterText } from '../../atoms/text'
import { i18n } from '../../../shared/i18n'
import { BoxContainerDetails, GridContainer } from './style'
import { VolumeType } from '../volumeCard'
import { i18nFormatData } from '../../../utils/formatData'

const VolumeDetails = ({ data }: { data: VolumeType }) => {
  const { locale } = useRouter()
  const [userAcquisitionDifficulty, setUserAcquisitionDifficulty] = useState(
    data.acquisitionDifficulty
  )

  return (
    <BoxContainerDetails>
      <GridContainer>
        <Image
          src={data.imageUrl}
          alt="Picture of the author"
          width={300}
          height={300}
          objectFit="contain"
          unoptimized={true}
          style={{ flexBasis: '300px', flexGrow: '1' }}
        />

        <Grid
          height={'100%'}
          container
          gap="10px"
          paddingY={5}
          paddingX={0}
          columns={{ xs: 10, sm: 12, md: 13 }}
          flexGrow={2}
          flexBasis={'440px'}
          justifyContent="center"
        >
          {Object.entries(data)
            .filter(
              ([atribute]) =>
                atribute !== 'synopsis' &&
                atribute !== '__typename' &&
                atribute !== 'imageUrl' &&
                atribute !== 'id' &&
                atribute !== 'editionId' &&
                atribute !== 'volumes' &&
                atribute !== 'owned' &&
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
              const title = i18nFormatData(atribute, locale)

              const labelValue = i18nFormatData(value, locale)

              return (
                <Grid
                  item
                  sm={2}
                  md={3}
                  xs={4}
                  minWidth={180}
                  key={'details' + index}
                >
                  <CenterText fontWeight={'bold'}>{title}</CenterText>
                  {atribute.includes('acquisition') ? (
                    <Box style={{ textAlign: 'center' }}>
                      <Rating
                        readOnly={atribute === 'acquisitionDifficultyAverage'}
                        name="half-rating"
                        precision={0.5}
                        value={Number(labelValue)}
                      />
                    </Box>
                  ) : (
                    <CenterText>{labelValue}</CenterText>
                  )}
                </Grid>
              )
            })}
          <Grid item xs={12}>
            <CenterText fontWeight={'bold'}>{i18n[locale].synopsis}</CenterText>
            <CenterText
              style={{
                textAlign: 'justify',
                padding: '1em'
              }}
            >
              {i18nFormatData(data.synopsis, locale)}
            </CenterText>
          </Grid>
        </Grid>
      </GridContainer>
    </BoxContainerDetails>
  )
}

export default VolumeDetails
