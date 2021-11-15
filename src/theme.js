// theme.js
import {deepPurple} from '@material-ui/core/colors'
import { createTheme } from '@material-ui/core' 

const font =  "'Be Vietnam', sans-serif";

const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500]
    },
    secondary: {
      main: deepPurple[800]
    }
  },
})


export default theme;