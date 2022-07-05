import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { MobileDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { Box, TextField, Typography, useTheme } from '@mui/material'
import { i18n } from '../../../shared/i18n'
import {
  StyledButton,
  CustomPopover,
  CenterText,
  CustomText,
  Card,
  SelectionDropdown
} from '../../atoms'
import VolumeDetails from '../m-volume-details'
import { CustomButtonBox, CustomTextField, NotAdquired } from './style'
import { DialogDetails } from '../m-dialog-details'
import {
  CREATE_USER_VOLUME_MUTATION,
  DELETE_USER_VOLUME_MUTATION
} from '../../../graphql'
import { clientGraphql } from '../../../graphql/client-graphql'
import { CustomModal } from '../m-modal'
import { useDispatch } from 'react-redux'
import { snackbarUpdate } from '../../../store/actions/snackbar'
import { COINS } from '../../../shared/constants'

export type VolumeType = {
  id: string
  type: string
  coverPrice: string
  coverPriceUnit: string
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
  haveVolume: boolean
  purchasedPrice?: string
  purchasedDate?: Date
}
export const VolumeCard = ({ data }: { data: VolumeType }) => {
  const { locale } = useRouter()
  const [openModal, setOpenModal] = useState(false)
  const { addToCollection, details, removeVolume } = i18n[locale]
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const [
    {
      id,
      name,
      imageUrl,
      edition,
      publisher,
      number,
      coverPrice,
      coverPriceUnit,
      haveVolume
    },
    setVolume
  ] = useState(data)
  const [userVolume, setUserVolume] = useState({
    purchasedPrice: coverPrice.split(' ')[1],
    purchasedDate: new Date(),
    purchasedPriceUnit: i18n[locale][coverPriceUnit],
    volume: id
  })
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }
  const handleSnackbarOpen = (message: string) => {
    dispatch(
      snackbarUpdate({ open: true, message: message, severity: 'error' })
    )
  }
  const theme = useTheme()

  const coins = COINS.reduce((acc, coin: string) => {
    const i18nValue = i18n[locale][coin]
    acc[i18nValue] = coin
    return acc
  }, {})

  const i18nOptions = Object.keys(coins)
  const setDropdown = (value: string) => {
    setUserVolume({
      ...userVolume,
      purchasedPriceUnit: value
    })
  }

  const handleOpen = () => setOpen(true)

  const deleteUserVolume = () => {
    clientGraphql
      .mutate({
        mutation: DELETE_USER_VOLUME_MUTATION,
        variables: {
          volumeId: id
        }
      })
      .then(() => {
        setOpenModal(false)
        snackbarUpdate({
          open: true,
          message: i18n[locale].deleteVolumeMessage,
          severity: 'success'
        })
        setVolume({
          ...data,
          haveVolume: false
        })
      })
      .catch(() => {
        dispatch(
          snackbarUpdate({
            open: true,
            message: i18n[locale].errorDeleteVolumeMessage,
            severity: 'error'
          })
        )
      })
  }
  const addToCollectionHandler = () => {
    let message = ''
    const userVolumeVerified = Object.assign({}, userVolume)
    userVolumeVerified.purchasedPrice = userVolume.purchasedPrice.replace(
      ',',
      '.'
    )

    userVolumeVerified.purchasedPriceUnit =
      coins[userVolumeVerified.purchasedPriceUnit]

    if (userVolume.purchasedDate > new Date()) {
      message += i18n[locale].purchasedDateInvalidMessage + '. '
    }
    if (!Number(userVolumeVerified.purchasedPrice)) {
      message += i18n[locale].priceInvalidMessage
    }
    if (message !== '') {
      handleSnackbarOpen(message)
    } else {
      clientGraphql
        .mutate({
          mutation: CREATE_USER_VOLUME_MUTATION,
          variables: {
            ...userVolumeVerified,
            purchasedPrice: Number(userVolumeVerified.purchasedPrice)
          }
        })
        .then(() => {
          setOpenModal(false)
          dispatch(
            snackbarUpdate({
              open: true,
              message: i18n[locale].sucessAddVolumeMessage,
              severity: 'success'
            })
          )
          setVolume({
            ...data,
            haveVolume: true
          })
        })
        .catch(() => {
          dispatch(
            snackbarUpdate({
              open: true,
              message: i18n[locale].erroAddVolumeMessage,
              severity: 'error'
            })
          )
        })
    }
  }

  return (
    <>
      <CustomModal
        bgColor={theme.palette.primary.darkContrast}
        border="none"
        open={openModal}
        setOpen={setOpenModal}
      >
        <Box
          justifyContent={'center'}
          justifyItems={'center'}
          alignItems={'center'}
          display="flex"
          flexDirection={'column'}
        >
          <Typography color={theme.palette.primary.contrastText} align="center">
            {i18n[locale].purchasedPrice}
          </Typography>
          <Box
            display={'flex'}
            flexDirection={'row'}
            marginBottom={2}
            sx={{ flexWrap: 'nowrap' }}
          >
            <SelectionDropdown
              options={i18nOptions}
              value={userVolume.purchasedPriceUnit}
              setValue={setDropdown}
            />
            <CustomTextField
              required
              size="small"
              value={userVolume.purchasedPrice}
              onChange={event => {
                setUserVolume({
                  ...userVolume,
                  purchasedPrice: event.target.value
                })
              }}
            />
          </Box>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MobileDatePicker
              label={i18n[locale].purchasedDate}
              inputFormat="dd/MM/yyyy"
              value={userVolume.purchasedDate}
              onChange={event => {
                setUserVolume({
                  ...userVolume,
                  purchasedDate: event
                })
              }}
              renderInput={params => (
                <TextField
                  fullWidth={true}
                  {...params}
                  sx={{
                    color: theme.palette.primary.contrastText,
                    svg: { color: theme.palette.primary.contrastText },
                    input: {
                      color: theme.palette.primary.contrastText
                    }
                  }}
                />
              )}
            />
          </LocalizationProvider>
          <StyledButton
            size="medium"
            sx={{
              background: theme.palette.primary.light,
              width: '100%',
              maxWidth: '240px',
              marginTop: 2
            }}
            onClick={addToCollectionHandler}
          >
            {addToCollection}
          </StyledButton>
        </Box>
      </CustomModal>
      <Card open={Boolean(anchorEl)} onClick={handleClick}>
        <Box style={{ position: 'relative' }}>
          <Image
            unoptimized={true}
            src={imageUrl}
            alt="Picture of the author"
            width={150}
            height={200}
          />
          {!haveVolume && <NotAdquired />}
        </Box>
        <CenterText>{name}</CenterText>
        <CenterText>{edition}</CenterText>
        <CustomText>{publisher}</CustomText>
        <CustomText> Volume {number}</CustomText>
        <CustomPopover open={Boolean(anchorEl)} anchorEl={anchorEl}>
          <CustomButtonBox width="12em">
            {haveVolume ? (
              <StyledButton
                style={{ width: '100%' }}
                onClick={deleteUserVolume}
              >
                {removeVolume}
              </StyledButton>
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
