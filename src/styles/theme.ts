import { createTheme } from '@mui/material'

const globalTheme = createTheme({
  palette: {
    primary: {
      light: '#9d4eff',
      main: '#251F36',
      dark: '#161123',
      contrastText: '#FFFF',
      darkContrastText: '#453d56',
      darkContrast: '#3f3357'
    },
    secondary: {
      light: '#9d4eff',
      main: '#512096',
      dark: '#161123',
      contrastText: '#FFFF',
      darkContrastText: '#453d56',
      darkContrast: '#3f3357'
    }
  }
})

export const theme = createTheme({
  ...globalTheme,
  zIndex: {
    drawer: 1200
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#FFFF'
        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          color: '#FFFF'
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
