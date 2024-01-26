import { Box, Typography } from '@mui/material'
import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { i18n } from '../../../shared/i18n'
import { SelectionDropdown, StyledButton } from '../../atoms'
import { CustomModal } from '../m-modal'
import { CustomTextField } from './style'

export const VolumeModal = ({
  openModal,
  setOpenModal,
  i18nOptions,
  theme,
  locale,
  userVolume,
  setDropdown,
  setUserVolume,
  addToCollectionHandler,
  updateUserVolumeHandler,
  haveVolume
}) => {
  const { addToCollection, updateUserVolume } = i18n[locale]
  const buttonLabel = haveVolume ? updateUserVolume : addToCollection
  const buttonOnClick = haveVolume
    ? updateUserVolumeHandler
    : addToCollectionHandler
  return (
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
            value={userVolume.purchasedDate}
            onChange={event => {
              setUserVolume({
                ...userVolume,
                purchasedDate: event
              })
            }}
            sx={{
              color: theme.palette.primary.contrastText,
              svg: { color: theme.palette.primary.contrastText },
              input: {
                color: theme.palette.primary.contrastText
              }
            }}
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
          onClick={buttonOnClick}
        >
          {buttonLabel}
        </StyledButton>
      </Box>
    </CustomModal>
  )
}
