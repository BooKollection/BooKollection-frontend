import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useTheme } from '@mui/material'
import { i18n } from '../../../shared/i18n'
import { useDispatch } from 'react-redux'
import { snackbarUpdate } from '../../../store/actions/snackbar'
import { VolumeModal } from './modal'
import { VolumeCardTemplate } from './volumeTemplate'
import { VolumeType } from './type'
import {
  createUserVolumeHandler,
  deleteUserVolumeHandler,
  getI18nCoins,
  updateUserVolumeAux
} from './functions'
import { loadingUpdate } from '../../../store/actions/loading'
import { userUpdate } from '../../../store/actions/user'

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
    id: '',
    purchasedPrice: '',
    purchasedDate: new Date(),
    purchasedPriceUnit: '',
    volume: ''
  })
  const theme = useTheme()
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
      volume: data.id,
      id: data.userVolumeId
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
  const coins = getI18nCoins(locale)
  const i18nOptions = Object.keys(coins)

  const setDropdown = (value: string) => {
    setUserVolume({
      ...userVolume,
      purchasedPriceUnit: value
    })
  }

  const handleOpen = () => setOpen(true)

  const deleteUserVolume = async () => {
    await deleteUserVolumeHandler({
      dispatch,
      locale,
      setOpenModal,
      setVolume,
      snackbarUpdate,
      volume
    })

    dispatch(
      userUpdate({
        getCollectionInfoPage: true
      })
    )
  }

  const updateUserVolumeHandler = () => {
    return updateUserVolumeAux({
      coins,
      data,
      dispatch,
      handleSnackbarOpen,
      locale,
      setOpenModal,
      setVolume,
      setVolumeEdition,
      snackbarUpdate,
      userVolume
    }).then(() =>
      dispatch(
        userUpdate({
          getCollectionInfoPage: true
        })
      )
    )
  }
  const addToCollectionHandler = async () => {
    dispatch(loadingUpdate({ open: true }))
    try {
      await createUserVolumeHandler({
        coins,
        handleSnackbarOpen,
        locale,
        userVolume
      })
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
      dispatch(loadingUpdate({ open: false }))
      dispatch(
        userUpdate({
          getCollectionInfoPage: true
        })
      )
    } catch {
      return dispatch(loadingUpdate({ open: false }))
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

export type { VolumeType }
