import React from 'react'
import IconButton from '@mui/material/IconButton'
import { useRouter } from 'next/router'
import { useGoogleLogin } from 'react-google-login'
import { useDispatch } from 'react-redux'
import { LOGIN_MUTATION } from '../../../graphql/mutations/login'
import { clientGraphql } from '../../../config/client-graphql'
import { i18n } from '../../../shared/i18n'
import { loadingUpdate } from '../../../store/actions/loading'
import { userUpdate } from '../../../store/actions/user'

export const GoogleButton = () => {
  const clientId = process.env.OAUTH_GOOGLE_ID
  const { locale } = useRouter()
  const signInLabel = i18n[locale].signIn
  const dispatch = useDispatch()

  const onSuccess = async res => {
    const { googleId, tokenId, profileObj } = res

    clientGraphql
      .mutate({
        mutation: LOGIN_MUTATION,
        variables: {
          reqEmail: profileObj.email,
          reqGoogleId: googleId,
          reqTokenId: tokenId
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

  const onFailure = res => {
    alert(
      'Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz'
    )
    dispatch(loadingUpdate({ open: false }))
  }
  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: false,
    accessType: 'offline'
  })

  const signInLoading = () => {
    dispatch(
      loadingUpdate({
        open: true
      })
    )

    signIn()
  }

  return (
    <IconButton
      size="large"
      aria-label="account of current user"
      aria-controls="primary-search-account-menu"
      aria-haspopup="true"
      color="inherit"
      onClick={signInLoading}
    >
      <p style={{ fontSize: '1rem', fontWeight: 'bold' }}>{signInLabel}</p>
    </IconButton>
  )
}
