import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import {
  CenterText,
  CustomText,
  Card,
  CustomPopover,
  StyledButton
} from '../../atoms'
import { i18n } from '../../../shared/i18n'
import { Box } from '@mui/material'

export const EditionCard = ({
  data
}: {
  data: {
    id: string
    name: string
    imageUrl: string
    edition: string
    publisher: string
    status?: string
    totalVolumes?: number
    adquiredVolumes?: number
  }
}) => {
  const { locale, push } = useRouter()
  const { details, statusLabelTypes } = i18n[locale]
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const {
    id,
    name,
    imageUrl,
    edition,
    publisher,
    status,
    totalVolumes,
    adquiredVolumes
  } = data

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }

  return (
    <Card open={Boolean(anchorEl)} onClick={handleClick}>
      <Image
        src={imageUrl}
        alt="Picture of the author"
        width={150}
        height={200}
        unoptimized={true}
      />
      <CenterText fontWeight={'bold'}>{name}</CenterText>
      <CenterText>{edition}</CenterText>
      <CustomText>{publisher}</CustomText>
      {status && (
        <CustomText
          padding="1px 7px"
          borderRadius={1}
          bgcolor={
            status === 'Complete'
              ? '#04C900'
              : status === 'Hiatus'
              ? '#838269'
              : '#faf324be'
          }
          textAlign="center"
        >
          {statusLabelTypes[status]}
        </CustomText>
      )}
      {totalVolumes && adquiredVolumes && (
        <CustomText>
          {adquiredVolumes}/{status !== 'Complete' ? '???' : totalVolumes}
        </CustomText>
      )}
      <CustomPopover open={Boolean(anchorEl)} anchorEl={anchorEl}>
        <Box width="10em">
          <StyledButton
            onClick={() => {
              push({ pathname: '/edition', query: { id: id } })
            }}
          >
            {details}
          </StyledButton>
        </Box>
      </CustomPopover>
    </Card>
  )
}
