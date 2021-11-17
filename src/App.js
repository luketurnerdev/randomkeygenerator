import Randomizer from "./Components/Randomizer";
import { ThemeProvider } from '@material-ui/core'
import ClockContext from "./Contexts/ClockContext";
import theme from "./theme";
import {useState} from 'react';



function App() {
  const [mobile, setMobile] = useState(window.matchMedia("(max-width: 768px)").matches)
  const [clock, setClock] = useState({
    paused: true,
    secondsLeft: 15,
    delayInSeconds: 15
  });



  return (
  <ClockContext.Provider value={[clock, setClock]} >
    <ThemeProvider theme={theme}>
      <Randomizer mobile={mobile} />
      {/* <Metronome /> */}
    </ThemeProvider>
  </ClockContext.Provider>
  );
}

export default App;
