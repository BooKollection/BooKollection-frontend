import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { editionTitles } from '../../../shared/i18n'
import { StyledButton } from '../../atoms/button'
import { CustomPopper } from '../../atoms/customPopper'
import { CenterText, CustomText } from '../../atoms/text'
import { Card } from './style'

const myLoader = ({ src }) => {
  return src
}

export const VolumeCard = ({
  id,
  name,
  imgSrc,
  edition,
  publisher,
  status,
  number,
  owned,
  editionId
}: {
  id: string
  name: string
  imgSrc: string
  edition: string
  publisher: string
  status?: boolean
  number?: number
  owned: boolean
  editionId: string
}) => {
  const { locale, push } = useRouter()
  const { addToCollection, details } = editionTitles[locale]
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }
  return (
    <Card owned={owned} onClick={handleClick}>
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
      <CustomText> Volume {number}</CustomText>
      <CustomPopper anchorEl={anchorEl} placement="right">
        <>
          <StyledButton
            sx={{ maxWidth: '100%' }}
            onClick={() => {
              push('/edition?id=' + editionId)
            }}
          >
            {addToCollection}
          </StyledButton>
          <StyledButton
            sx={{ maxWidth: '100%' }}
            onClick={() => {
              push('/edition?id=' + editionId)
            }}
          >
            {details}
          </StyledButton>
        </>
      </CustomPopper>
    </Card>
  )
}
