import { ThemeProvider } from '@mui/material/styles'
import { Navbar } from '../components/molecules/navbar'
import '../styles/globals.css'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Navbar>
        <Component {...pageProps} />
      </Navbar>
    </ThemeProvider>
  )
}

export default MyApp
