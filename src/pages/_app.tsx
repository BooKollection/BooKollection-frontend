import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../styles/theme'
import { useRouter } from 'next/router'
import moment from 'moment'
import VLibras from '@djpfs/react-vlibras'
import { storeWrapper } from '../store'
import { Navbar } from '../components/molecules/navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter()
  moment.locale(locale)

  return (
    <ThemeProvider theme={theme}>
      <Navbar>
        <VLibras />
        <Component {...pageProps} />
      </Navbar>
    </ThemeProvider>
  )
}

export default storeWrapper.withRedux(MyApp)
