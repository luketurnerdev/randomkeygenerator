import Randomizer from "./Components/Randomizer";
import { ThemeProvider } from '@material-ui/core'
import { Button, Typography } from '@material-ui/core'
import theme from "./theme";
import {useState} from 'react';
import ReactGA from 'react-ga';



function App() {
  const [mobile, setMobile] = useState(window.matchMedia("(max-width: 768px)").matches)
  ReactGA.initialize('UA-210928692-2', {
    debug: true,
    titleCase: false,
    gaOptions: {
      userId: 123
    }
  });


  return (
    <ThemeProvider theme={theme}>
      <Randomizer mobile={mobile} />
      {/* <Metronome /> */}
    </ThemeProvider>
  );
}

export default App;
