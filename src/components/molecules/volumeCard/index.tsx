import React, { useState } from 'react'
import { IconButton, Slide, Toolbar, Typography } from '@mui/material'
import Dialog from '@mui/material/Dialog'
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
import { CustomButtonBox, VolumeAppBar } from './style'
import { TransitionProps } from '@mui/material/transitions'
import CloseIcon from '@mui/icons-material/Close'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})
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

  const handleClose = () => {
    setOpen(false)
    setAnchorEl(null)
  }
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
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <VolumeAppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {details}
            </Typography>
          </Toolbar>
        </VolumeAppBar>
        <VolumeDetails data={data} />
      </Dialog>
    </>
  )
}
