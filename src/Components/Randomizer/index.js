import {useState, useEffect, useContext} from 'react';
import ClockContext from "../../Contexts/ClockContext"
import styles from "./styles";
import KeyDisplay from "./KeyDisplay";
import VolumeSection from "./VolumeSection";
import SettingsBar from "./SettingsBar";
import PlayButton from "../PlayButton";
import ChangeOrderDisplay from "./ChangeOrderDisplay";
import ReactGA from 'react-ga';


const Randomizer = props => {
  // const [clock, setClock] = useContext(ClockContext);

  // Default state 

  const [keyOrder, setKeyOrder] = useState("Random")
  const [delayInSeconds, setDelayInSeconds] = useState(5);
  const [modifiers, setModifiers] = useState(["Major"])
  const [paused, setPaused] = useState(true);
  const {mobile} = props;

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  });

  return (
    <div style={styles.mainContainer}>
      <ChangeOrderDisplay
          keyOrder={keyOrder}
          setKeyOrder={setKeyOrder}
        />
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
