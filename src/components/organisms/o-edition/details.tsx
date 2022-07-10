import React from 'react'
import Image from 'next/image'
import { Box, Grid, Rating, useTheme } from '@mui/material'
import { InfoGrid } from '../../molecules'
import { filterObject } from '../../../utils/filterObject'
import { ImgGridItem } from './style'
import { i18n } from '../../../shared/i18n'
import { useRouter } from 'next/router'
import { formatCategories, i18nFormatData } from '../../../utils/formatData'
import { CenterText } from '../../atoms'

export type EditionDetailsType = {
  id: string
  name: string
  imageUrl: string
  adquiredVolumes?: number
  edition: string
  status: string
  publisher: string
  totalVolumes: number
  format: string
  illustratorBy: string
  writterBy: string
  ageRange: string
  bagShape: string
  categories: string
  language: string
  country: string
  synopsis: string
  paperType: string
  acquisitionDifficulty: number
  classification: number
}
const EditionDetails = ({ details }: { details: EditionDetailsType }) => {
  const theme = useTheme()
  const { locale } = useRouter()
  const synopsis = i18nFormatData(details.synopsis, locale)
  const categories = formatCategories(details.categories, locale)

  return (
    <Grid
      container
      borderRadius={2}
      bgcolor={theme.palette.primary.darkContrast}
      padding={'1em'}
      width={'100%'}
      rowSpacing={1}
    >
      <ImgGridItem item xs={12} sm={3} md={3} lg={3} display={'block'}>
        <Image
          unoptimized={true}
          src={details.imageUrl}
          alt="Picture of the author"
          width={200}
          height={300}
          layout={'responsive'}
        />
      </ImgGridItem>

      <Grid item sm={9} md={9} lg={9}>
        <InfoGrid
          data={filterObject(details, [
            'name',
            'type',
            'edition',
            'originalPublisher',
            'writterBy',
            'ilustratorBy'
          ])}
        />
        <InfoGrid
          data={{ synopsis: synopsis }}
          xs={13}
          columns={13}
          labelStyle={{
            textAlign:
              synopsis === i18n[locale].notRegistered ? 'center' : 'justify',
            padding: '1em'
          }}
        />

        <InfoGrid
          data={filterObject({ ...details, categories: categories }, [
            'publisher',
            'country',
            'language',
            'status',
            'releaseFrequency',
            'categories'
          ])}
        />

        <InfoGrid
          data={filterObject(details, ['bagShape', 'paperType', 'dimensions'])}
        />
        <InfoGrid
          xs={4}
          md={4}
          data={filterObject(details, [
            'startOfPublication',
            'endOfPublication',
            'createdAt',
            'updatedAt'
          ])}
        />
        <Grid
          container
          width="100%"
          gap="1rem"
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Grid item width={'15em'}>
            <Box
              display={'flex'}
              alignItems={'center'}
              flexDirection={'column'}
            >
              {' '}
              <CenterText>
                {i18n[locale].userAcquisitionDifficultyAverage}
              </CenterText>
              <Rating
                readOnly
                name="half-rating"
                precision={0.5}
                value={details.acquisitionDifficulty}
                sx={{
                  '& .MuiRating-iconEmpty': {
                    color: theme.palette.primary.light
                  }
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={3} width={'15em'}>
            <Box
              display={'flex'}
              alignItems={'center'}
              flexDirection={'column'}
            >
              <CenterText>{i18n[locale].classification}</CenterText>
              <Rating
                readOnly
                name="half-rating"
                precision={0.5}
                value={details.classification}
                sx={{
                  '& .MuiRating-iconEmpty': {
                    color: theme.palette.primary.light
                  }
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export { EditionDetails }
