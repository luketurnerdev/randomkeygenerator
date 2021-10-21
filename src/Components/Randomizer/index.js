import {useState} from 'react';
import styles from "./styles";
import KeyDisplay from "./KeyDisplay";
import ChangeModDisplay from "./ChangeModDisplay";
import DelayDisplay from "./DelayDisplay";
import ChangeOrderDisplay from "./ChangeOrderDisplay";
import { Paper} from '@mui/material';

const Randomizer = () => {

  const [keyOrder, setKeyOrder] = useState("sequential")
  const [delayInSeconds, setDelayInSeconds] = useState(4);
  const [modifiers, setModifiers] = useState(["Minor"])
  const [paused, setPaused] = useState(true);

  return (
    <Paper elevation={5} style={styles.paperContainer}>
     <h1>Key Randomizer</h1> 
      <div>
        <KeyDisplay 
          keyOrder={keyOrder}
          setKeyOrder={setKeyOrder}
          modifiers={modifiers}
          styles={styles}
          delayInSeconds={delayInSeconds}
          paused={paused}
          setPaused={setPaused}
        />
      
        <DelayDisplay 
          delayInSeconds={delayInSeconds}
          setDelayInSeconds={setDelayInSeconds}
        />
        <ChangeOrderDisplay
          keyOrder={keyOrder}
          setKeyOrder={setKeyOrder}
        />
        <ChangeModDisplay modifiers={modifiers} setModifiers={setModifiers} />


      </div>
    </Paper>
  );
}

export default Randomizer;
