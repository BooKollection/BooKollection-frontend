import { Box } from '@mui/material'
import { i18n } from '../../../shared/i18n'
import { i18nFormatData } from '../../../utils/formatData'
import { CenterText } from '../../atoms'
import { BoxContainerDetails, GridContainer, LiteraryWorksBox } from './style'
import Image from 'next/image'
import { CardGrid } from '../../organisms'

export const AuthorDetails = ({ data, locale }) => {
  const { imageUrl } = data
  const { createdAt, updatedAt, literaryWorks } = i18n[locale]
  return (
    <BoxContainerDetails>
      <GridContainer>
        <Box flex={1} marginBottom={5}>
          <Box
            position={'relative'}
            display={'block'}
            minHeight="400px"
            maxHeight={'600px'}
            marginRight={'1em'}
          >
            <Image
              src={imageUrl}
              alt="Picture of the author"
              layout="fill"
              objectFit="contain"
            />
          </Box>
          <CenterText marginTop={'1em'}>{data.name}</CenterText>
          <CenterText marginTop={'1em'}>{createdAt}</CenterText>
          <CenterText>{i18nFormatData(data.createdAt, locale)}</CenterText>
          <CenterText marginTop={'1em'}>{updatedAt}</CenterText>
          <CenterText>{i18nFormatData(data.updatedAt, locale)}</CenterText>
        </Box>

        <LiteraryWorksBox flex={3}>
          <CenterText>{literaryWorks}</CenterText>
          <CardGrid editions={data.literaryWorks} />
        </LiteraryWorksBox>
      </GridContainer>
    </BoxContainerDetails>
  )
}
