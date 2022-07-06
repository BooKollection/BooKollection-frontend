import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Box, Grid, Rating, useTheme } from '@mui/material'
import Image from 'next/image'
import { CenterText } from '../../atoms/a-text'
import { i18n } from '../../../shared/i18n'
import { BoxContainerDetails, GridContainer } from './style'
import { VolumeType } from '../m-volume-card'
import { formatCategories, i18nFormatData } from '../../../utils/formatData'

const VolumeDetails = ({ data }: { data: VolumeType }) => {
  const { locale } = useRouter()
  const [userAcquisitionDifficulty, setUserAcquisitionDifficulty] = useState(
    data.acquisitionDifficulty
  )
  const theme = useTheme()
  const synopsis = i18nFormatData(data.synopsis, locale)

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
                ![
                  'synopsis',
                  'coverPriceUnit',
                  '__typename',
                  'imageUrl',
                  'id',
                  'editionId',
                  'volumes',
                  'haveVolume',
                  'purchasedPrice',
                  'purchasedDate'
                ].includes(atribute) && !atribute.includes('acquisition')
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

              const labelValue =
                atribute === 'categories'
                  ? formatCategories(value, locale)
                  : i18nFormatData(
                      value,
                      locale,
                      atribute === 'coverPrice' ? 'coverPrice' : null
                    )

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
                        sx={{
                          '& .MuiRating-iconEmpty': {
                            color: theme.palette.primary.light
                          },
                          opacity:
                            atribute === 'acquisitionDifficultyAverage'
                              ? 0.6
                              : 1
                        }}
                      />
                    </Box>
                  ) : (
                    <CenterText>{labelValue}</CenterText>
                  )}
                </Grid>
              )
            })}
          <Grid item xs={data.purchasedDate && data.purchasedPrice ? 8 : 12}>
            <CenterText fontWeight={'bold'}>{i18n[locale].synopsis}</CenterText>
            <CenterText
              style={{
                textAlign:
                  synopsis === i18n[locale].notRegistered
                    ? 'center'
                    : 'justify',
                padding: '1em'
              }}
            >
              {synopsis}
            </CenterText>
          </Grid>
          {data.purchasedDate && (
            <Grid item xs={2}>
              <CenterText fontWeight={'bold'}>
                {i18n[locale].purchasedDate}
              </CenterText>
              <CenterText>
                {i18nFormatData(data.purchasedDate, locale)}
              </CenterText>
            </Grid>
          )}
          {data.purchasedPrice && (
            <Grid item xs={2}>
              <CenterText fontWeight={'bold'}>
                {i18n[locale].purchasedPrice}
              </CenterText>
              <CenterText>
                {i18nFormatData(data.purchasedPrice, locale, 'purchasedPrice')}
              </CenterText>
            </Grid>
          )}
        </Grid>
      </GridContainer>
    </BoxContainerDetails>
  )
}

export default VolumeDetails
