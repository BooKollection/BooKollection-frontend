import React from 'react'
import IconButton from '@mui/material/IconButton'
import { useRouter } from 'next/router'
import { useGoogleLogin } from '@react-oauth/google'
import { useDispatch } from 'react-redux'
import PersonIcon from '@mui/icons-material/Person'
import Tooltip from '@mui/material/Tooltip'
import { LOGIN_MUTATION } from '../../../graphql/mutations/login'
import { clientGraphql } from '../../../graphql/client-graphql'
import { i18n } from '../../../shared/i18n'
import { userUpdate } from '../../../store/actions/user'
import { loadingUpdate } from '../../../store/actions/loading'

export const GoogleButton = () => {
  const { locale } = useRouter()
  const signInLabel = i18n[locale].signIn
  const dispatch = useDispatch()

  const onSuccess = async res => {
    const { access_token } = res

    clientGraphql
      .mutate({
        mutation: LOGIN_MUTATION,
        variables: {
          reqTokenId: access_token
        }
      })
      .then(res => {
        const { token, name } = res.data.loginUser
        localStorage.setItem(process.env.TOKEN_NAME, token)
        localStorage.setItem('BK_NAME', name)
        dispatch(loadingUpdate({ open: false }))

        dispatch(
          userUpdate({
            token: token,
            name: name
          })
        )
      })
    // refreshTokenSetup(res);
  }

  const onError = () => {
    alert(
      'Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz'
    )
  }
  const signIn = useGoogleLogin({
    onSuccess,
    onError
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
