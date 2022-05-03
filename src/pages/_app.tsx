import { ThemeProvider } from '@mui/material/styles'
import { storeWrapper } from '../store'
import { Navbar } from '../components/molecules/navbar'
import '../styles/globals.css'
import { theme } from '../styles/theme'
import VLibras from '@djpfs/react-vlibras';
import Footer from '../components/molecules/footer'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Navbar>
        <Component {...pageProps} />
        <VLibras/>
      </Navbar>
      <Footer/>
    </ThemeProvider>
  )
}

export default storeWrapper.withRedux(MyApp)
