import Randomizer from "./Components/Randomizer";
import { ThemeProvider } from '@material-ui/core'
import ReactGA from 'react-ga';
import theme from "./theme";
import {useState} from 'react';


const trackingId = "UA-226802790-1";
ReactGA.initialize(trackingId);




function App() {
  const [mobile, setMobile] = useState(window.matchMedia("(max-width: 768px)").matches)

  

  return (
    <ThemeProvider theme={theme}>
      <Randomizer mobile={mobile} />
    </ThemeProvider>
  );


}

export default App;
