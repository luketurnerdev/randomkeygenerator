import {Howler} from 'howler';
import Countdown from 'react-countdown';
import AudioControls from "../AudioControls";
import { Paper, Grid, Button } from '@mui/material';
import {chords} from "../../../utils/musicImports";
import TimerIcon from '@mui/icons-material/Timer';
import {generateRandomKey, generateSequentialKey, generateFifthsKey} from "../../../utils/keyChanges";
import {useState, useContext, useRef} from 'react';
import {ClockContext} from "../../../Contexts/ClockContext";



const KeyDisplay = props => {
    const {keyOrder, setKeyOrder, modifiers, styles, delayInSeconds} = props;
    const keysWithFlats = ["Ab","A","Bb","B","C","Db","D","Eb","E","F","Gb","G"];
    // const keysWithSharps = ["A","A#","B","C","C#","D","D#","E","F","F#","G", "G#"];
  
    const [currentKeyset, setCurrentKeyset] = useState(keysWithFlats);
  
    const [currentKey, setCurrentKey] = useState("C");
    const [upcomingKey,setUpcomingKey] = useState("Db");
    const [currentMod, setCurrentMod] = useState("Major");
    const [upcomingMod,setUpcomingMod] = useState("Major");

    const clockRef = useRef();
    const handleStart = () => clockRef.current.start();
    const handlePause = () => clockRef.current.pause();




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
      
  
      console.log('crank')
      // TODO - when 3 sec left, play click (but dont alter state)
       if (completed) {
        // Stop any previous chords
        Howler.stop()
        
        // Play current
        playChord();
        
        //Restart clock
        
        // Current is discarded. 
        // Upcoming becomes current.  
        
        setUpcomingKey(decideUpcomingKey());
        setCurrentKey(upcomingKey);
        
        // Change state for next reset
        
        // Always randomly select from list of available mods (chosen by user)
        setUpcomingMod(modifiers[Math.floor(Math.random() * modifiers.length)]);
        setCurrentMod(upcomingMod);
        api.start();
        // setSecondsLeft(delayInSeconds)
        
        return <h1>paused</h1>

        } 
        
        else {
          // Render a countdown
          return (
            <div style={styles.countdown} >
            
             <h5>{(hours > 0) && `${hours} Hours`} {(minutes > 0) && `${minutes} Mins`}  {seconds} sec</h5>
            </div>
          )
        }
    };

    const Clock = () => {
    
      return (
        <div>
          <Countdown 
            date={Date.now() + 5000}
            ref={clockRef}
            renderer={clockRenderer}
          />
        </div>
      )
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

        <ClockContext.Provider value={{paused: true}}>
            <Clock />
        </ClockContext.Provider>
            

          
          </Grid>
         </Grid> 

        
      </Paper>

    <Button onClick={handleStart}>hi</Button>
    <Button onClick={handlePause}>hi</Button>

    <AudioControls
      currentChord={chords[`${currentKey}${currentMod}`]}
      // paused={paused}
      // setPaused={setPaused}  
    />
</>

      
    )
  }

export default KeyDisplay;