import { useRouter } from 'next/router'
import { ThemeProvider } from '@mui/material/styles'
import moment from 'moment'
import VLibras from '@djpfs/react-vlibras'
import { theme } from '../styles/theme'
import { storeWrapper } from '../store'
import { Navbar } from '../components/molecules/navbar'
import '../styles/globals.css'
import { Backdrop } from '../components/atoms/backdrop'

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter()
  moment.locale(locale)

  return (
    <ThemeProvider theme={theme}>
      <Backdrop />
      <Navbar>
        <VLibras />
        <Component {...pageProps} />
      </Navbar>
    </ThemeProvider>
  )
}

export default storeWrapper.withRedux(MyApp)
