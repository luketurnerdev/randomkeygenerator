import {useState, useEffect, useContext} from 'react';
import styles from "./styles";
import KeyDisplay from "./KeyDisplay";
import VolumeSection from "./VolumeSection";
import SettingsBar from "./SettingsBar";
import PlayButton from "../PlayButton";
import ChangeOrderDisplay from "./ChangeOrderDisplay";
import ReactGA from 'react-ga';


const Randomizer = props => {
  const {mobile} = props;

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);

  });

  // Default state 

  const [keyOrder, setKeyOrder] = useState("Random")
  const [delayInSeconds, setDelayInSeconds] = useState(5);
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

      <PlayButton
    
      />
    </div>



  );
}

export default Randomizer;
