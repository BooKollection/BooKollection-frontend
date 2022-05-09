import React, { useState } from 'react'
import { Box, IconButton, Slide, Toolbar, Typography } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { i18n } from '../../../shared/i18n'
import { StyledButton } from '../../atoms/button'
import { CustomPopper } from '../../atoms/customPopper'
import { CenterText, CustomText } from '../../atoms/text'
import VolumeDetails from '../volumeDetails'
import { Card, VolumeAppBar } from './style'
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
  const { addToCollection, details } = i18n[locale]
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
          <Box>
            <StyledButton
              onClick={() => {
                push('/edition?id=' + editionId)
              }}
            >
              {addToCollection}
            </StyledButton>
            <StyledButton onClick={handleOpen}>{details}</StyledButton>
          </Box>
        </CustomPopper>
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
