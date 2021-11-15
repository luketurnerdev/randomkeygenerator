import {useState, useEffect} from 'react';
import styles from "./styles";
import { ThemeProvider } from '@material-ui/core'
import theme from "../../theme"
import KeyDisplay from "./KeyDisplay";
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
        <ChangeOrderDisplay
            keyOrder={keyOrder}
            setKeyOrder={setKeyOrder}
          />
      /* <div style={styles.component}>
        <KeyDisplay 
          mobile={mobile}
          keyOrder={keyOrder}
          setKeyOrder={setKeyOrder}
          modifiers={modifiers}
          styles={styles}
          delayInSeconds={delayInSeconds}
          setDelayInSeconds={setDelayInSeconds}
        />
      </div>
      <h3> Settings </h3>
      <div style={styles.component}>

      </div>

      <div style={styles.component}>
        <ChangeModDisplay modifiers={modifiers} setModifiers={setModifiers} />
      </div> */
      



  );
}

export default Randomizer;
