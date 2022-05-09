import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#140030',
      light: '#FFFFFF'
    },
    secondary: {
      main: '#3E1F69'
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
