import ContentEditable from 'react-contenteditable'
import {
  Box,
  Button,
  TextareaAutosize,
  TextField,
  useTheme
} from '@mui/material'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { I18N_CREATE_MUTATION } from '../../../graphql'
import { clientGraphql } from '../../../graphql/client-graphql'
import { i18n } from '../../../shared/i18n'
import { StyledButton, StyledTypograph } from '../../atoms'
import { CustomModal } from '../m-modal'
import React from 'react'
import { ContentEdit } from '../../atoms/a-contentEditable'

export const SynopsisPopup = ({ id, open, setOpen, synopsisProp }) => {
  const { locale } = useRouter()
  const theme = useTheme()
  const [synopsisText, setSynopsis] = useState('')

  useEffect(() => {
    setSynopsis(synopsisProp)
  }, [synopsisProp])
  const create = () => {
    clientGraphql
      .mutate({
        mutation: I18N_CREATE_MUTATION,
        variables: {
          language: locale.replace('-', ''),
          synopsis: synopsisText,
          volume: id
        }
      })
      .then(() => {
        setOpen()
      })
  }
  const { synopsis } = i18n[locale]
  return (
    <CustomModal
      open={open}
      setOpen={() => {
        setOpen()
      }}
      bgColor={theme.palette.primary.darkContrastText}
    >
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <StyledTypograph align="center">{synopsis}</StyledTypograph>{' '}
        <ContentEdit
          text={synopsisText}
          setText={setSynopsis}
          disabled={false}
        />
        <StyledButton
          sx={{
            width: '200px',
            marginTop: '20px',
            background: theme.palette.primary.darkContrast
          }}
          onClick={create}
        >
          add
        </StyledButton>
      </Box>
    </CustomModal>
  )
}
