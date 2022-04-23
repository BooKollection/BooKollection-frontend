import React from 'react'
import { useGoogleLogin } from 'react-google-login'
import { LOGIN_MUTATION } from '../../../api/graphql/querys/login'
import { clientGraphql } from '../../../config/client-graphql'
import IconButton from '@mui/material/IconButton'
import { useRouter } from 'next/router'
import { googleButtonLabel } from '../../../shared/i18n/googleButton'

export const GoogleButton = () => {
  const clientId = process.env.OAUTH_GOOGLE_ID
  const { locale } = useRouter()
  const { label } = googleButtonLabel[locale]

  const onSuccess = async res => {
    const { googleId, tokenId, profileObj } = res
    console.log('Login Success: currentUser:', profileObj, res)

    alert(
      `Logged in successfully welcome ${profileObj.name} 😍. \n See console for full profile object.`
    )
    clientGraphql
      .mutate({
        mutation: LOGIN_MUTATION,
        variables: {
          reqEmail: profileObj.email,
          reqGoogleId: googleId,
          reqTokenId: tokenId
        }
      })
      .then(res => console.log(res))
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
      <p style={{ fontSize: '1rem', fontWeight: 'bold' }}>{label}</p>
    </IconButton>
  )
}
