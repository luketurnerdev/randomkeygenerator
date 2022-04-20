import {useState, useEffect, useContext} from 'react';
import styles from "./styles";
import KeyDisplay from "./KeyDisplay";
import VolumeSection from "./VolumeSection";
import SettingsBar from "./SettingsBar";
import PlayButton from "../PlayButton";
import InfoBox from "../InfoBox";
import ChangeOrderDisplay from "./ChangeOrderDisplay";
import ReactGA from 'react-ga';
import { pauseSynth, resumeSynth, setVolume } from '../../utils/playSounds';



const Randomizer = props => {
  // const [clock, setClock] = useContext(ClockContext);

  // Default state 

  const [keyOrder, setKeyOrder] = useState("Fifths")
  const [delayInSeconds, setDelayInSeconds] = useState(5);
  const [modifiers, setModifiers] = useState(["Major"])
  const [paused, setPaused] = useState(true);
  const {mobile} = props;

  useEffect(() => {
    // Add GA on pageload
    ReactGA.pageview(window.location.pathname);

    // Add event listener for pause
    document.addEventListener("keyup", pauseIfSpacePressed);
    console.log('added listnere');
  }, []);

  const pauseIfSpacePressed = (event) => {
    if (event.code === "Space" && !event.repeat) {
      if (paused) {
        pauseSynth();
      }

      else {
        resumeSynth();
      }
    }  
  }

  return (
    <div style={styles.mainContainer}>
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
