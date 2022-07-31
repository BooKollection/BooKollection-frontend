import { Box } from '@mui/material'
import Image from 'next/image'
import { useState } from 'react'
import { i18n } from '../../../shared/i18n'
import { i18nFormatData } from '../../../utils/formatData'
import {
  CenterText,
  CustomText,
  CustomPopover,
  StyledButton,
  Card
} from '../../atoms'
import { DialogDetails } from '../m-dialog-details'
import { SynopsisPopup } from '../m-synopsis-edition-popup'
import VolumeDetails from '../m-volume-details'
import { NotAdquired, CustomButtonBox } from './style'

export const VolumeCardTemplate = ({
  isLogged,
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
  const [synopsisModal, setSynopsisModal] = useState(false)
  const { name, imageUrl, edition, publisher, number, haveVolume } = volume
  const { addToCollection, details, removeVolume, updateUserVolume } =
    i18n[locale]
  const handleOpenAdm = () => {
    setSynopsisModal(true)
  }
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
        <CenterText>{i18nFormatData(edition, locale)}</CenterText>
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
                disabled={!isLogged}
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
            <StyledButton style={{ width: '100%' }} onClick={handleOpenAdm}>
              edit
            </StyledButton>
          </CustomButtonBox>
        </CustomPopover>
      </Card>
      <DialogDetails open={open} setOpen={setOpen} title={details}>
        <VolumeDetails data={data} />
      </DialogDetails>
      <SynopsisPopup
        open={synopsisModal}
        id={data.id}
        setOpen={() => {
          setSynopsisModal(false)
        }}
        synopsisProp={data.synopsis}
      />
    </>
  )
}
