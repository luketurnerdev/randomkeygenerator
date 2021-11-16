import {useState, useEffect} from 'react';
import styles from "./styles";
import { ThemeProvider } from '@material-ui/core'
import theme from "../../theme"
import KeyDisplay from "./KeyDisplay";
import VolumeSection from "./VolumeSection";
import SettingsBar from "./SettingsBar";
import ChangeModDisplay from "./ChangeModDisplay";
import ChangeOrderDisplay from "./ChangeOrderDisplay";
import { Paper} from '@mui/material';
import ReactGA from 'react-ga';


const Randomizer = props => {
  const {mobile} = props;

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);

  });

  const [keyOrder, setKeyOrder] = useState("Random")
  const [delayInSeconds, setDelayInSeconds] = useState(3);
  const [modifiers, setModifiers] = useState(["Major"])



  return (
    <div style={styles.mainContainer}>
      <ChangeOrderDisplay
          keyOrder={keyOrder}
          setKeyOrder={setKeyOrder}
        />
      <KeyDisplay 
        mobile={mobile}
        keyOrder={keyOrder}
        setKeyOrder={setKeyOrder}
        modifiers={modifiers}
        delayInSeconds={delayInSeconds}
        setDelayInSeconds={setDelayInSeconds}
      />
    <SettingsBar
      delayInSeconds={delayInSeconds}
    />

    <VolumeSection />
    </div>


      // <h3> Settings </h3>
      // <div style={styles.component}>

      // </div>

      // <div style={styles.component}>
      //   <ChangeModDisplay modifiers={modifiers} setModifiers={setModifiers} />
      // </div> 
      



  );
}

export default Randomizer;
