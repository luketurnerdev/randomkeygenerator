import {useState, useEffect, useContext} from 'react';
import styles from "./styles";
import KeyDisplay from "./KeyDisplay";
import VolumeSection from "./VolumeSection";
import SettingsBar from "./SettingsBar";
import PlayButton from "../PlayButton";
import InfoBox from "../InfoBox";
import ChangeOrderDisplay from "./ChangeOrderDisplay";
import ReactGA from 'react-ga';
import HarmoniseLogo from '../HarmoniseLogo';



const Randomizer = props => {
  // const [clock, setClock] = useContext(ClockContext);

  // Default state 

  const [keyOrder, setKeyOrder] = useState("Fifths")
  const [delayInSeconds, setDelayInSeconds] = useState(5);
  const [modifiers, setModifiers] = useState(["Major"])
  const [paused, setPaused] = useState(true);
  const {mobile} = props;

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  });

  return (
    <div style={styles.mainContainer}>
        <HarmoniseLogo />
        <ChangeOrderDisplay
            keyOrder={keyOrder}
            setKeyOrder={setKeyOrder}
          />

        <InfoBox style={styles.infoBox} />   

      
      <KeyDisplay
        paused={paused}
        mobile={mobile}
        keyOrder={keyOrder}
        setKeyOrder={setKeyOrder}
        modifiers={modifiers}
        delayInSeconds={delayInSeconds}
        setDelayInSeconds={setDelayInSeconds}
      /> 
      <SettingsBar
        delayInSeconds={delayInSeconds}
        setDelayInSeconds={setDelayInSeconds}
        modifiers={modifiers}
        setModifiers={setModifiers}
      />

      <VolumeSection />

      <PlayButton
        paused={paused}
        setPaused={setPaused}
      />
    </div>



  );
}

export default Randomizer;
