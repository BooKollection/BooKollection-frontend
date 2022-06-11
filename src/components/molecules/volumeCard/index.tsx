import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { i18n } from '../../../shared/i18n'
import {
  StyledButton,
  CustomPopover,
  CenterText,
  CustomText,
  Card
} from '../../atoms'
import VolumeDetails from '../volumeDetails'
import { CustomButtonBox } from './style'
import { DialogDetails } from '../dialogDetails'

export type VolumeType = {
  id: string
  coverPrice: string
  name: string
  imageUrl: string
  edition: string
  publisher: string
  number: number
  owned: boolean
  editionId: string
  language: string
  synopsis: string
  releaseDate: string
  acquisitionDifficulty: number
  acquisitionDifficultyAverage: number
  paperBack: number
  isbn10: string
  isbn13: string
}
export const VolumeCard = ({ data }: { data: VolumeType }) => {
  const { locale, push } = useRouter()
  const { addToCollection, details } = i18n[locale]
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [open, setOpen] = useState(false)
  const { name, imageUrl, edition, publisher, number, owned, editionId } = data
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }
  const handleOpen = () => setOpen(true)

  return (
    <>
      <Card open={Boolean(anchorEl)} owned={owned} onClick={handleClick}>
        <Image
          unoptimized={true}
          src={imageUrl}
          alt="Picture of the author"
          width={150}
          height={200}
        />
        <CenterText>{name}</CenterText>
        <CenterText>{edition}</CenterText>
        <CustomText>{publisher}</CustomText>
        <CustomText> Volume {number}</CustomText>
        <CustomPopover open={Boolean(anchorEl)} anchorEl={anchorEl}>
          <CustomButtonBox width="12em">
            <StyledButton
              onClick={() => {
                push({ pathname: '/edition', query: { keyword: editionId } })
              }}
            >
              {addToCollection}
            </StyledButton>
            <StyledButton onClick={handleOpen}>{details}</StyledButton>
          </CustomButtonBox>
        </CustomPopover>
      </Card>
      <DialogDetails open={open} setOpen={setOpen} title={details}>
        <VolumeDetails data={data} />
      </DialogDetails>
    </>
  )
}
