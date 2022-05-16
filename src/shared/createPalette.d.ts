import {
  SimplePaletteColorOptions as MuiSimplePaletteColorOptions,
  PaletteColor as MuiPaletteColor
} from '@mui/material/styles/createPalette'
export {
  Palette,
  PaletteColorOptions,
  PaletteOptions,
  TypeText,
  TypeAction,
  TypeBackground
} from '@mui/material/styles/createPalette'
declare module '@mui/material/styles/createPalette' {
  interface SimplePaletteColorOptions extends MuiSimplePaletteColorOptions {
    darkContrast?: string
    darkContrastText?: string
  }
  interface PaletteColor extends MuiPaletteColor {
    darkContrast?: string
    darkContrastText?: string
  }
}
