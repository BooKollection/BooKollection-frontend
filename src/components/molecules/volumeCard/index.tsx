import { Modal } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { editionTitles } from '../../../shared/i18n'
import { StyledButton } from '../../atoms/button'
import { CustomPopper } from '../../atoms/customPopper'
import { CenterText, CustomText } from '../../atoms/text'
import VolumeDetails from '../volumeDetails'
import { Card } from './style'

export type VolumeType = {
  id: string
  name: string
  imageUrl: string
  edition: string
  publisher: string
  status: boolean
  number: number
  owned: boolean
  editionId: string
  price: number
  language: string
  synopsis: string
  releaseDate: Date
  acquisitionDifficulty: number
  acquisitionDifficultyAverage: number
}
export const VolumeCard = ({ data }: { data: VolumeType }) => {
  const { locale, push } = useRouter()
  const { addToCollection, details } = editionTitles[locale]
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [open, setOpen] = useState(false)
  const {
    name,
    imageUrl,
    edition,
    publisher,
    status,
    number,
    owned,
    editionId
  } = data
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }
  const handleOpen = () => setOpen(true)

  const handleClose = () => {
    setOpen(false)
    setAnchorEl(null)
  }
  return (
    <>
      <Card owned={owned} onClick={handleClick}>
        <Image
          unoptimized={true}
          src={imageUrl}
          alt="Picture of the author"
          width={150}
          height={200}
        />
        <CenterText>{name}</CenterText>
        <CenterText>{edition}</CenterText>
        <CustomText>{status}</CustomText>
        <CustomText>{publisher}</CustomText>
        <CustomText> Volume {number}</CustomText>
        <CustomPopper
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          placement="right"
        >
          <>
            <StyledButton
              sx={{ maxWidth: '100%' }}
              onClick={() => {
                push('/edition?id=' + editionId)
              }}
            >
              {addToCollection}
            </StyledButton>
            <StyledButton sx={{ maxWidth: '100%' }} onClick={handleOpen}>
              {details}
            </StyledButton>
          </>
        </CustomPopper>
      </Card>
      <Modal open={open} onClose={handleClose}>
        <VolumeDetails data={data} />
      </Modal>
    </>
  )
}
