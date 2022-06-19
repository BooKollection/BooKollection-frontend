import { useRouter } from 'next/router'
import { ThemeProvider } from '@mui/material/styles'
import moment from 'moment'
import 'moment/locale/pt-br'
import VLibras from '@djpfs/react-vlibras'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { theme } from '../styles/theme'
import { store } from '../store'
import { Navbar } from '../components/molecules'
import '../styles/globals.css'
import { Backdrop } from '../components/atoms/a-backdrop'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter()
  moment.locale(locale.toLowerCase())

  return (
    <GoogleOAuthProvider clientId={process.env.OAUTH_GOOGLE_ID}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Backdrop />
          <Navbar>
            <VLibras />
            <Component {...pageProps} />
          </Navbar>
        </ThemeProvider>
      </Provider>
    </GoogleOAuthProvider>
  )
}

export default MyApp
