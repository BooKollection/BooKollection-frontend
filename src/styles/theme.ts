import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#140030',
      light: '#FFFFFF'
    }
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'none'
        }
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: '#FFFFFF'
        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          color: '#FFFFFF'
        }
      }
    }
  }
})
