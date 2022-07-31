import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Box, Grid, Rating, useTheme } from '@mui/material'
import Image from 'next/image'
import { CenterText } from '../../atoms/a-text'
import { i18n } from '../../../shared/i18n'
import { BoxContainerDetails, GridContainer } from './style'
import { VolumeType } from '../m-volume-card'
import { formatCategories, i18nFormatData } from '../../../utils/formatData'
import { ImgGridItem } from './style'
import { ContentEdit } from '../../atoms/a-contentEditable'

const VolumeDetails = ({ data }: { data: VolumeType }) => {
  const { locale } = useRouter()
  const [classifications] = useState({
    // userClassification: data.userClassification,
    // userAcquisitionDifficulty: data.userAcquisitionDifficulty,
    classification: data.classification,
    userAcquisitionDifficultyAverage: data.acquisitionDifficulty
  })
  const theme = useTheme()
  const synopsis = i18nFormatData(data.synopsis, locale)

  return (
    <BoxContainerDetails>
      <GridContainer>
        <ImgGridItem>
          <Image
            src={data.imageUrl}
            alt="Picture of the author"
            layout="fill"
            objectFit="contain"
          />
        </ImgGridItem>

        <Box height={'100%'} flex={2}>
          <Grid
            height={'100%'}
            container
            gap="2em"
            paddingY={5}
            paddingX={0}
            columns={{ xs: 10, sm: 12, md: 13 }}
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
                  ].includes(atribute) &&
                  !atribute.toLocaleLowerCase().includes('acquisition') &&
                  !atribute.toLocaleLowerCase().includes('classification')
              )
              .map(([atribute, value], index) => {
                const title = i18nFormatData(atribute, locale)

                const labelValue =
                  atribute === 'categories'
                    ? formatCategories(value + '', locale)
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
                    minWidth={150}
                    key={'details' + index}
                  >
                    <CenterText fontWeight={'bold'}>{title}</CenterText>

                    <CenterText>{labelValue}</CenterText>
                  </Grid>
                )
              })}
          </Grid>
          <Grid height={'100%'} container justifyContent="center">
            <Grid item xs={12}>
              <CenterText fontWeight={'bold'}>
                {i18n[locale].synopsis}
              </CenterText>
              <ContentEdit
                text={synopsis}
                setText={undefined}
                disabled={true}
              />
            </Grid>
          </Grid>
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
            {data.purchasedDate && (
              <Grid item xs={4}>
                <CenterText fontWeight={'bold'}>
                  {i18n[locale].purchasedDate}
                </CenterText>
                <CenterText>
                  {i18nFormatData(data.purchasedDate, locale)}
                </CenterText>
              </Grid>
            )}
            {data.purchasedPrice && (
              <Grid item xs={4}>
                <CenterText fontWeight={'bold'}>
                  {i18n[locale].purchasedPrice}
                </CenterText>
                <CenterText>
                  {i18nFormatData(
                    data.purchasedPrice,
                    locale,
                    'purchasedPrice'
                  )}
                </CenterText>
              </Grid>
            )}
          </Grid>
          <Grid
            height={'100%'}
            container
            gap="10px"
            paddingY={5}
            paddingX={0}
            justifyContent="center"
          >
            {Object.entries(classifications).map(([key, value], index) => (
              <Box
                width={'13rem'}
                key={index + ' rating'}
                style={{ textAlign: 'center' }}
              >
                <CenterText fontWeight={'bold'}>{i18n[locale][key]}</CenterText>

                <Rating
                  readOnly={true}
                  name="half-rating"
                  precision={0.5}
                  value={value}
                  sx={{
                    '& .MuiRating-iconEmpty': {
                      color: theme.palette.primary.light
                    }
                  }}
                />
              </Box>
            ))}
          </Grid>
        </Box>
      </GridContainer>
    </BoxContainerDetails>
  )
}

export default VolumeDetails
