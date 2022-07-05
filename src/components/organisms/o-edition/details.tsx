import React from 'react'
import Image from 'next/image'
import { Grid, useTheme } from '@mui/material'
import { InfoGrid } from '../../molecules'
import { filterObject } from '../../../utils/filterObject'
import { ImgGridItem } from './style'

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
}
const EditionDetails = ({ details }: { details: EditionDetailsType }) => {
  const theme = useTheme()
  const { synopsis } = details
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
            textAlign: synopsis === 'notRegistered' ? 'center' : 'justify',
            padding: '1em'
          }}
        />

        <InfoGrid
          data={filterObject(details, [
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
      </Grid>
    </Grid>
  )
}

export { EditionDetails }
