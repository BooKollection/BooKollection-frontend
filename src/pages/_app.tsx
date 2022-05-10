import { ThemeProvider } from '@mui/material/styles'
import { storeWrapper } from '../store'
import { Navbar } from '../components/molecules/navbar'
import '../styles/globals.css'
import { theme } from '../styles/theme'
import VLibras from '@djpfs/react-vlibras'
import { useRouter } from 'next/router'
import moment from 'moment'
import Footer from '../components/molecules/footer'

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter()
  moment.locale(locale)

  return (
    <ThemeProvider theme={theme}>
      <Navbar>
        <VLibras />
        <Component {...pageProps} />
      </Navbar>
      <Footer />
    </ThemeProvider>
  )
}

export default storeWrapper.withRedux(MyApp)
