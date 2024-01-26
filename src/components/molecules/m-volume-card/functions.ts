import { createUserVolume, deleteUserVolume } from '../../../rest'
import { COINS } from '../../../shared/constants'
import { i18n } from '../../../shared/i18n'
import { VolumeType } from './type'

export const getI18nCoins = (locale: string) =>
  COINS.reduce((acc, coin: string) => {
    const i18nValue = i18n[locale][coin]
    acc[i18nValue] = coin
    return acc
  }, {})

export const formatUserVolume = ({
  userVolume,
  coins,
  locale,
  handleSnackbarOpen
}: {
  userVolume: {
    purchasedPrice: string
    purchasedDate: Date
    purchasedPriceUnit: string
    volume: string
  }
  coins: unknown
  locale: string
  handleSnackbarOpen: (message: string) => void
}) => {
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

export const createUserVolumeHandler = ({
  userVolume,
  coins,
  locale,
  handleSnackbarOpen
}: {
  userVolume: {
    purchasedPrice: string
    purchasedDate: Date
    purchasedPriceUnit: string
    volume: string
  }
  coins: unknown
  locale: string
  handleSnackbarOpen: (message: string) => void
}) => {
  const userVolumeVerified = formatUserVolume({
    coins,
    handleSnackbarOpen,
    locale,
    userVolume
  })
  if (userVolumeVerified) {
    return createUserVolume({
      ...userVolumeVerified,
      purchasedPrice: Number(userVolumeVerified.purchasedPrice),
      locale
    })
  }
}

export const deleteUserVolumeHandler = ({
  locale,
  volume,
  setOpenModal,
  snackbarUpdate,
  setVolume,
  dispatch
}: {
  locale: string
  setOpenModal: (value: React.SetStateAction<boolean>) => void
  snackbarUpdate: (data: unknown) => void
  setVolume: (data: unknown) => void
  volume: VolumeType
  dispatch: (data: unknown) => void
}) => {
  return deleteUserVolume({ volumeId: volume.id, locale })
    .then(() => {
      setOpenModal(false)
      snackbarUpdate({
        open: true,
        message: i18n[locale].deleteVolumeMessage,
        severity: 'success'
      })
      setVolume({
        ...volume,
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
