import React from 'react'
import IconButton from '@mui/material/IconButton'
import { useRouter } from 'next/router'
import { useGoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux'
import { LOGIN_MUTATION } from '../../../graphql/mutations/login'
import { clientGraphql } from '../../../config/client-graphql'
import { i18n } from '../../../shared/i18n'
import { loadingUpdate } from '../../../store/actions/loading'
import { userUpdate } from '../../../store/actions/user'
import PersonIcon from '@mui/icons-material/Person';
import Tooltip from '@mui/material/Tooltip'

export const GoogleButton = () => {
  const { locale } = useRouter()
  const signInLabel = i18n[locale].signIn
  const dispatch = useDispatch()

  const onSuccess = async res => {
    const { access_token } = res

    dispatch(
      loadingUpdate({
        open: true
      })
    );

    clientGraphql
      .mutate({
        mutation: LOGIN_MUTATION,
        variables: {
          reqTokenId: access_token
        }
      })
      .then(res => {
        const { token, name } = res.data.loginUser
        localStorage.setItem(process.env.tokenName, token)
        localStorage.setItem('BK_NAME', name)
        dispatch(
          userUpdate({
            token: token,
            name: name
          })
        )
        dispatch(loadingUpdate({ open: false }))
      })
    // refreshTokenSetup(res);
  }

  const onError = res => {
    alert(
      'Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz'
    )
    dispatch(loadingUpdate({ open: false }))
  }
  const signIn = useGoogleLogin({
    onSuccess,
    onError,
  })

  const signInLoading = () => {
    signIn()
  }

  return (
    <Tooltip title={signInLabel}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        color="inherit"
        onClick={signInLoading}
      >
        <PersonIcon />
      </IconButton>
    </Tooltip>
  )
}
