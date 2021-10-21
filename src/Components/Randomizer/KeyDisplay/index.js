import {Howler} from 'howler';
import Countdown from 'react-countdown';
import AudioControls from "../AudioControls";
import { Paper, Grid, Button } from '@mui/material';
import {chords} from "../../../utils/musicImports";
import {generateRandomKey, generateSequentialKey, generateFifthsKey} from "../../../utils/keyChanges";
import {useState} from 'react';


const KeyDisplay = props => {
    const {keyOrder, setKeyOrder, modifiers, styles, delayInSeconds} = props;
    const keysWithFlats = ["Ab","A","Bb","B","C","Db","D","Eb","E","F","Gb","G"];
    // const keysWithSharps = ["A","A#","B","C","C#","D","D#","E","F","F#","G", "G#"];
  
    const [currentKeyset, setCurrentKeyset] = useState(keysWithFlats);
  
    const [currentKey, setCurrentKey] = useState("C");
    const [upcomingKey,setUpcomingKey] = useState("Db");
    const [currentMod, setCurrentMod] = useState("Major");
    const [upcomingMod,setUpcomingMod] = useState("Major");


    // const randomizeModIfEnabled = () => {
    //   if (randomizeMod) {
    //     let newMod = modifiers[Math.floor(Math.random() * modifiers.length)];
    //     setUpcomingMod(newMod);
    //   }
    // }

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

   
  

    const clockRenderer = ({ hours, minutes, seconds, completed, api}) => {

      // TODO - when 3 sec left, play click (but dont alter state)
      if (completed) {

        // start: current = G. Upcoming = Ab.
        // Countdown begins.
        // upcon complettion..

        // upcoming = Ab (same as before)
        
        // Stop any previous chords
        Howler.stop()
        
        // Play current
        playChord();
        
        //Restart clock
        api.start();
        
        // Current is discarded. 
        // Upcoming becomes current.  
        
        setUpcomingKey(decideUpcomingKey());
        setCurrentKey(upcomingKey);

        // Change state for next reset

        // Always randomly select from list of available mods (chosen by user)
        setUpcomingMod(modifiers[Math.floor(Math.random() * modifiers.length)]);
        setCurrentMod(upcomingMod);


        return <h1>paused</h1>
        } 
        
        else {
          // Render a countdown
          return (
            <div style={styles.countdown} >
            
            <span>{(hours > 0) && `${hours} Hours`} {(minutes > 0) && `${minutes} Mins`}  {seconds} sec</span>
            </div>
          )
        }
    };


   
    return (
<>
      <Paper elevation={4}>
        <Grid container style={styles.keyDisplayGrid}>
          <Grid item xs={6} style={styles.keyDisplayItem}>
            <h5 style={styles.gridItemText}>Current:</h5> 
            <h5 style={styles.gridItemText}>{currentKey} {currentMod}</h5> 

          </Grid>
          <Grid item xs={6} style={styles.keyDisplayItem}>  
                <h5 style={styles.gridItemText}>Next:</h5> 
                <h5 style={styles.gridItemText}>{upcomingKey} {upcomingMod}</h5> 
          </Grid>
         </Grid> 

      </Paper>

    <Countdown
        date={Date.now() + delayInSeconds * 1000}
        renderer={clockRenderer}
    />

    <AudioControls
      chords={chords}
      currentChord={chords[`${currentKey}${currentMod}`]}  
      />
</>

      
    )
  }

export default KeyDisplay;