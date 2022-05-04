import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { CenterText, CustomText } from '../../atoms/text'
import { Card } from './style'
import { editionTitles } from '../../../shared/i18n/edition'
import { CustomPopper } from '../../atoms/customPopper'
import { StyledButton } from '../../atoms/button'

export const EditionCard = (data: {
  id: string
  name: string
  imageUrl: string
  edition: string
  publisher: string
  status?: boolean
}) => {
  const { locale, push } = useRouter()
  const [openPopper, setOpenPopper] = useState(false)
  const { details } = editionTitles[locale]
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const { id, name, imageUrl, edition, publisher, status } = data
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }
  return (
    <Card onClick={handleClick}>
      <Image
        src={imageUrl}
        alt="Picture of the author"
        width={150}
        height={200}
        unoptimized={true}
      />
      <CenterText>{name}</CenterText>
      <CenterText>{edition}</CenterText>
      <CustomText>{status}</CustomText>
      <CustomText>{publisher}</CustomText>
      <CustomPopper
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        placement="right"
      >
        <StyledButton
          onClick={() => {
            push('/edition?id=' + id)
          }}
        >
          {details}
        </StyledButton>
      </CustomPopper>
    </Card>
  )
}
