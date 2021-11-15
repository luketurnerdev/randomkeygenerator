// theme.js
import {deepPurple} from '@material-ui/core/colors'
import { createTheme } from '@material-ui/core/styles' 

const font =  "'Be Vietnam', sans-serif";

const myTheme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500]
    }
  },
  typography: {
    body1: {
      fontFamily: font,
      // fontFamily: 'Sans Serif',
      fontWeight: 300,
      fontSize: 50,
    }
  }
})

export default myTheme;