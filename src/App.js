import Randomizer from "./Components/Randomizer";
import { ThemeProvider } from '@material-ui/core'
import ClockContext from "./Contexts/ClockContext";
import theme from "./theme";
import {useState} from 'react';



function App() {
  const [mobile, setMobile] = useState(window.matchMedia("(max-width: 768px)").matches)




  return (
  <ClockContext.Provider >
    <ThemeProvider theme={theme}>
      <Randomizer mobile={mobile} />
    </ThemeProvider>
  </ClockContext.Provider>
  );
}

export default App;
