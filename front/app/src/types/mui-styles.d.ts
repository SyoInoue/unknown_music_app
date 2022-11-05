import { Theme } from '@mui/material/styles' // eslint-disable-line

declare module '@mui/styles' {
  interface DefaultTheme extends Theme {}
}
