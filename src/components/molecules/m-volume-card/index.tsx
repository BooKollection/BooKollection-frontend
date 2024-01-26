import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useTheme } from '@mui/material'
import { i18n } from '../../../shared/i18n'
import {
  DELETE_USER_VOLUME_MUTATION,
  UPDATE_USER_VOLUME_MUTATION
} from '../../../graphql'
import { clientGraphql } from '../../../graphql/client-graphql'
import { useDispatch } from 'react-redux'
import { snackbarUpdate } from '../../../store/actions/snackbar'
import { COINS } from '../../../shared/constants'
import { VolumeModal } from './modal'
import { VolumeCardTemplate } from './volumeTemplate'
import { createUserVolume } from '../../../rest'

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
export const VolumeCard = ({
  data,
  setVolumeEdition
}: {
  data: VolumeType
  setVolumeEdition: (value: unknown) => void
}) => {
  const { locale } = useRouter()
  const [openModal, setOpenModal] = useState(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const [volume, setVolume] = useState(null)
  const [userVolume, setUserVolume] = useState({
    purchasedPrice: '',
    purchasedDate: new Date(),
    purchasedPriceUnit: '',
    volume: ''
  })
  useEffect(() => {
    const value = data.coverPrice.split(' ')[1]
    const purchasedPrice = data.purchasedPrice
      ? data.purchasedPrice
      : data.coverPrice
    setVolume({ ...data, coverPrice: value.replace('.', ',') })
    setUserVolume({
      purchasedPrice: purchasedPrice.split(' ')[1].replace('.', ','),
      purchasedDate: data.purchasedDate ? data.purchasedDate : new Date(),
      purchasedPriceUnit: i18n[locale][data.coverPriceUnit],
      volume: data.id
    })
  }, [data, locale])
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
          volumeId: volume.id
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
  const formatUserVolume = () => {
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
      return null
    }
    return userVolumeVerified
  }
  const updateUserVolumeHandler = () => {
    const userVolumeVerified = formatUserVolume()
    if (userVolumeVerified) {
      clientGraphql
        .mutate({
          mutation: UPDATE_USER_VOLUME_MUTATION,
          variables: {
            ...userVolumeVerified,
            purchasedPrice: Number(userVolumeVerified.purchasedPrice)
          }
        })
        .then(() => {
          const newData = {
            ...data,
            haveVolume: true,
            purchasedPrice:
              userVolume.purchasedPriceUnit +
              ' ' +
              userVolumeVerified.purchasedPrice
          }
          setVolume(newData)
          setVolumeEdition(newData)
          dispatch(
            snackbarUpdate({
              open: true,
              message: i18n[locale].updatedUserVolume,
              severity: 'success'
            })
          )
          setOpenModal(false)
        })
        .catch(() => {
          dispatch(
            snackbarUpdate({
              open: true,
              message: i18n[locale].errorToUpdateUserVolume,
              severity: 'error'
            })
          )
        })
    }
  }
  const addToCollectionHandler = () => {
    const userVolumeVerified = formatUserVolume()
    if (userVolumeVerified) {
      createUserVolume({
        ...userVolumeVerified,
        purchasedPrice: Number(userVolumeVerified.purchasedPrice),
        locale
      }).then(() => {
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
    }
  }

  return (
    volume && (
      <>
        <VolumeModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          i18nOptions={i18nOptions}
          theme={theme}
          locale={locale}
          userVolume={userVolume}
          setDropdown={setDropdown}
          setUserVolume={setUserVolume}
          addToCollectionHandler={addToCollectionHandler}
          updateUserVolumeHandler={updateUserVolumeHandler}
          haveVolume={volume.haveVolume}
        />

        <VolumeCardTemplate
          anchorEl={anchorEl}
          openPopover={Boolean(anchorEl)}
          open={open}
          handleClick={handleClick}
          volume={volume}
          locale={locale}
          deleteUserVolume={deleteUserVolume}
          setOpenModal={setOpenModal}
          handleOpen={handleOpen}
          setOpen={setOpen}
          data={data}
        />
      </>
    )
  )
}
