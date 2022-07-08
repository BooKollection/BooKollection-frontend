import { Box } from '@mui/material'
import Image from 'next/image'
import { i18n } from '../../../shared/i18n'
import {
  CenterText,
  CustomText,
  CustomPopover,
  StyledButton,
  Card
} from '../../atoms'
import { DialogDetails } from '../m-dialog-details'
import VolumeDetails from '../m-volume-details'
import { NotAdquired, CustomButtonBox } from './style'

export const VolumeCardTemplate = ({
  anchorEl,
  open,
  openPopover,
  handleClick,
  volume,
  locale,
  deleteUserVolume,
  setOpenModal,
  handleOpen,
  setOpen,
  data
}) => {
  const { name, imageUrl, edition, publisher, number, haveVolume } = volume
  const { addToCollection, details, removeVolume, updateUserVolume } =
    i18n[locale]

  return (
    <>
      <Card open={open} onClick={handleClick}>
        <Box display="flex" position="relative">
          <Image
            unoptimized={true}
            src={imageUrl}
            alt="top"
            width={150}
            height={200}
            style={{ position: 'absolute' }}
          />
          {haveVolume !== null && !haveVolume && (
            <NotAdquired>{i18n[locale].notAdquired}</NotAdquired>
          )}
        </Box>
        <CenterText>{name}</CenterText>
        <CenterText>{edition}</CenterText>
        <CustomText>{publisher}</CustomText>
        <CustomText> Volume {number}</CustomText>
        <CustomPopover open={openPopover} anchorEl={anchorEl}>
          <CustomButtonBox width="12em">
            {haveVolume ? (
              <>
                <StyledButton
                  style={{ width: '100%' }}
                  onClick={deleteUserVolume}
                >
                  {removeVolume}
                </StyledButton>
                <StyledButton
                  style={{ width: '100%' }}
                  onClick={() => {
                    setOpenModal(true)
                  }}
                >
                  {updateUserVolume}
                </StyledButton>
              </>
            ) : (
              <StyledButton
                style={{ width: '100%' }}
                onClick={() => {
                  setOpenModal(true)
                }}
              >
                {addToCollection}
              </StyledButton>
            )}
            <StyledButton style={{ width: '100%' }} onClick={handleOpen}>
              {details}
            </StyledButton>
          </CustomButtonBox>
        </CustomPopover>
      </Card>
      <DialogDetails open={open} setOpen={setOpen} title={details}>
        <VolumeDetails data={data} />
      </DialogDetails>
    </>
  )
}
