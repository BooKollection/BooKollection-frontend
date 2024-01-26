import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useTheme } from '@mui/material'
import { i18n } from '../../../shared/i18n'
import { UPDATE_USER_VOLUME_MUTATION } from '../../../graphql'
import { clientGraphql } from '../../../graphql/client-graphql'
import { useDispatch, useSelector } from 'react-redux'
import { snackbarUpdate } from '../../../store/actions/snackbar'
import { VolumeModal } from './modal'
import { VolumeCardTemplate } from './volumeTemplate'
import { VolumeType } from './type'
import {
  createUserVolumeHandler,
  deleteUserVolumeHandler,
  formatUserVolume,
  getI18nCoins
} from './functions'
import { loadingUpdate } from '../../../store/actions/loading'
import { IRootState } from '../../../store/reducers'
import { LiteraryWork } from '../../../shared/types/literaryWork'
import { userUpdate } from '../../../store/actions/user'

export const VolumeCard = ({
  data,
  setVolumeEdition
}: {
  data: VolumeType
  setVolumeEdition: (value: unknown) => void
}) => {
  const { locale } = useRouter()
  const { collection } = useSelector((state: IRootState) => state.user)
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
    const oldVolume = volume
    await deleteUserVolumeHandler({
      dispatch,
      locale,
      setOpenModal,
      setVolume,
      snackbarUpdate,
      volume
    })
    console.log(oldVolume)
    const userLiteraryWorks: LiteraryWork[] = collection.literaryWorks.filter(
      (literaryWork: LiteraryWork) =>
        literaryWork.id === oldVolume.literaryWork.id
    )

    if (userLiteraryWorks.length === 1) {
      const userLiteraryWork = userLiteraryWorks[0]
      const rest = userLiteraryWork.totalVolumes - 1

      if (rest === 0) {
        dispatch(
          userUpdate({
            collection: {
              ...collection,
              literaryWorks: collection.literaryWorks.filter(
                (stateLiteraryWork: LiteraryWork) =>
                  stateLiteraryWork.id !== userLiteraryWork.id
              )
            }
          })
        )
      }
    }
  }

  const updateUserVolumeHandler = () => {
    const userVolumeVerified = formatUserVolume({
      coins,
      handleSnackbarOpen,
      locale,
      userVolume
    })
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
