import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { CenterText, CustomText } from '../../atoms/text'
import { Card } from './style'
import { editionTitles } from '../../../shared/i18n/edition'
import { CustomPopper } from '../../atoms/customPopper'
import { MenuBox } from '../../atoms/customPopper/style'
import { StyledButton } from '../../atoms/button'
const myLoader = ({ src }) => {
  return src
}

export const EditionCard = ({
  id,
  name,
  imgSrc,
  edition,
  publisher,
  status
}: {
  id: string
  name: string
  imgSrc: string
  edition: string
  publisher: string
  status?: boolean
}) => {
  const { locale, push } = useRouter()
  const { details } = editionTitles[locale]
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }
  return (
    <Card onClick={handleClick}>
      <Image
        loader={myLoader}
        src={imgSrc}
        alt="Picture of the author"
        width={150}
        height={200}
      />
      <CenterText>{name}</CenterText>
      <CenterText>{edition}</CenterText>
      <CustomText>{status}</CustomText>
      <CustomText>{publisher}</CustomText>
      <CustomPopper anchorEl={anchorEl} placement="right">
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
