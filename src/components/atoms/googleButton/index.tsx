import React from 'react'
import IconButton from '@mui/material/IconButton'
import { useRouter } from 'next/router'
import { useGoogleLogin } from 'react-google-login'
import { LOGIN_MUTATION } from '../../../graphql/mutations/login'
import { clientGraphql } from '../../../config/client-graphql'
import { i18n } from '../../../shared/i18n'
import { useDispatch } from 'react-redux'
import { USER_UPDATE } from '../../../store/actions'

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
        const token = res.data.loginUser.token
        localStorage.setItem(process.env.tokenName, token)
        dispatch({
          type: USER_UPDATE,
          payload: {
            token: token
          }
        })
      })
    // refreshTokenSetup(res);
  }

  const onFailure = res => {
    console.log('Login failed: res:', res)
    alert(
      'Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz'
    )
  }
  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: false,
    accessType: 'offline'
  })

  return (
    <IconButton
      size="large"
      aria-label="account of current user"
      aria-controls="primary-search-account-menu"
      aria-haspopup="true"
      color="inherit"
      onClick={signIn}
    >
      <p style={{ fontSize: '1rem', fontWeight: 'bold' }}>{signInLabel}</p>
    </IconButton>
  )
}
