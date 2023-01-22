import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      light: { main: '#ffffff' },
      main: '#155bd5',
      dark: '#4676ff',
      contrastText: '#fff',
    },

    secondary: {
      light: '#ff1414',
      main: '#ff1414',
      dark: '#9e0022',
      contrastText: '#ffff',
    },
    info: {
      light: '#6b7280',
      main: '#ffff',
      dark: '#9e0022',
      contrastText: '#fff',
    },
    error: {
      light: '#0000',
      main: '#0000',
      dark: '#0000',
      contrastText: '#fff',
    },
  },
})
export default theme
