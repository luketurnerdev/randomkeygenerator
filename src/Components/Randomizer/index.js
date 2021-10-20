import {useState} from 'react';
import styles from "./styles";
import KeyDisplay from "./KeyDisplay";
import ChangeModDisplay from "./ChangeModDisplay";
import AudioControls from "./AudioControls";
import ChangeOrderDisplay from "./ChangeOrderDisplay";
import { Paper, TextField, Button } from '@mui/material';

const Randomizer = () => {

  const [keyOrder, setKeyOrder] = useState("sequential")
  const [delayInSeconds, setDelayInSeconds] = useState(3);
  const [loop, setLoop] = useState(true)
  const [modifiers, setModifiers] = useState(["Minor"])
 
  const DelayDisplay = () => {
    const [delay,setDelay] = useState(delayInSeconds);
    const changeDelay = () => {
      if (delay && delay >= 1) {
        setDelayInSeconds(delay)
      }
    }

    return (
      <div style={styles.delayDisplay}>
        <h5> Change Delay </h5>
          {//todo - DO NOT ALLOW HYPHENS ETC} - regex 
        }
        <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} type="number"value={delay} onChange={e => setDelay(e.target.value)} style={styles.seconds} /> seconds
        <Button onClick={changeDelay}> Set </Button>
      </div>
    )

  }

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
        />
      
        <DelayDisplay />
        <ChangeOrderDisplay
          keyOrder={keyOrder}
          setKeyOrder={setKeyOrder}
        />
        <ChangeModDisplay modifiers={modifiers} setModifiers={setModifiers} />
        <AudioControls />
      </div>
    </Paper>
  );
}

export default Randomizer;
