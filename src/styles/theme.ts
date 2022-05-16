import { createTheme } from '@mui/material'

const globalTheme = createTheme({
  palette: {
    primary: {
      light: '#9d4eff',
      main: '#251F36',
      dark: '#161123',
      contrastText: '#FFFFFF',
      darkContrastText: '#453d56',
      darkContrast: '#3f3357'
    },
    secondary: {
      main: '#512096'
    }
  }
})

export const theme = createTheme({
  ...globalTheme,
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
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          margin: 0,
          '& > .MuiGrid-item': {
            padding: 0
          }
        }
      }
    }
  }
})
