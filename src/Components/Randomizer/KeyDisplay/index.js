import Clock from "../Clock"
import {Howler} from "howler"
import AudioControls from "../AudioControls";
import { Paper, Grid, Button } from '@mui/material';
import {chords} from "../../../utils/musicImports";
import TimerIcon from '@mui/icons-material/Timer';
import {generateRandomKey, generateSequentialKey, generateFifthsKey} from "../../../utils/keyChanges";
import {useState} from 'react';


const KeyDisplay = props => {
    const {keyOrder, setKeyOrder, modifiers, styles, delayInSeconds} = props;
    const keysWithFlats = ["Ab","A","Bb","B","C","Db","D","Eb","E","F","Gb","G"];
    // const keysWithSharps = ["A","A#","B","C","C#","D","D#","E","F","F#","G", "G#"];
  
    const [currentKeyset, setCurrentKeyset] = useState(keysWithFlats);
    const [paused, setPaused] = useState(true);
  
    const [currentKey, setCurrentKey] = useState("C");
    const [upcomingKey,setUpcomingKey] = useState("Db");
    const [currentMod, setCurrentMod] = useState("Major");
    const [upcomingMod,setUpcomingMod] = useState("Major");

    const decideUpcomingKey = () => {
      switch (keyOrder) {
        case "randomKey": 
          return (generateRandomKey(currentKeyset));
        case "sequential":
          // We pass in upcoming so it starts from correct key
          return (generateSequentialKey(upcomingKey, currentKeyset));
          case "fifths": 
          return (generateFifthsKey(upcomingKey, currentKeyset));
        default: {
          break;
        }
      }
    } 
    const playChord = () => {
      let chord = chords[`${upcomingKey}${upcomingMod}`];
      chord.play();
    }

    const handleChordChange = () => {
      // stop all prev chords
      Howler.stop()
      // play new chord
      playChord();

      // change key

      setUpcomingKey(decideUpcomingKey());
      setCurrentKey(upcomingKey);

      // Change mod

      setUpcomingMod(modifiers[Math.floor(Math.random() * modifiers.length)]);
      setCurrentMod(upcomingMod);

    }

    

   
    return (
<>
      <Paper elevation={4}>
        <Grid container style={styles.keyDisplayGrid}>
          <Grid item xs={5} style={styles.keyDisplayItem}>
            <h5 style={styles.gridItemText}>Current:</h5> 
            <h5 style={styles.gridItemText}>{currentKey} {currentMod}</h5> 

          </Grid>
          <Grid item xs={5} style={styles.keyDisplayItem}>  
                <h5 style={styles.gridItemText}>Next:</h5> 
                <h5 style={styles.gridItemText}>{upcomingKey} {upcomingMod}</h5> 
          </Grid>
          <Grid item xs={2} style={styles.timerBox}>
          <TimerIcon />  

          <Clock
            paused={paused}
            handleChordChange={handleChordChange}
            delayInSeconds={delayInSeconds}
          />

            

          
          </Grid>
         </Grid> 

        
      </Paper>

      <AudioControls
        currentChord={chords[`${currentKey}${currentMod}`]}
        setPaused={setPaused}
        paused={paused}
      // paused={paused}
      // setPaused={setPaused}  
    />

</>

      
    )
  }

export default KeyDisplay;