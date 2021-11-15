import Clock from "../Clock"
import AudioControls from "../AudioControls";
import { Paper, Grid, CircularProgress, Box, Typography} from '@mui/material';
import {chords} from "../../../utils/musicImports";
import TimerIcon from '@mui/icons-material/Timer';
import {activateChord} from "../../../utils/playSounds";
import DelayDisplay from "./../DelayDisplay";
import styles from "./styles"
import {decideUpcomingKey} from "../../../utils/keyChanges";
import {useState} from 'react';


const KeyDisplay = props => {
    const {mobile, keyOrder, setKeyOrder, modifiers, delayInSeconds, setDelayInSeconds} = props;
    const keysWithFlats = ["Ab","A","Bb","B","C","Db","D","Eb","E","F","Gb","G"];
    // const keysWithFlats = ["Gb"];
    // const keysWithSharps = ["A","A#","B","C","C#","D","D#","E","F","F#","G", "G#"];
  
    const [currentKeyset, setCurrentKeyset] = useState(keysWithFlats);
    const [paused, setPaused] = useState(true);
  
    const [currentKey, setCurrentKey] = useState("C");
    const [upcomingKey,setUpcomingKey] = useState("D");
    const [currentMod, setCurrentMod] = useState("Major");
    const [upcomingMod,setUpcomingMod] = useState("Major");
  
    const playNewChord = () => {
      let chord = chords[`${upcomingKey}${upcomingMod}`];
      chord.play();
    }


    const updateChordsInRender = () => {

      setUpcomingKey(decideUpcomingKey(keyOrder, upcomingKey, currentKeyset));
      setCurrentKey(upcomingKey);

      setUpcomingMod(modifiers[Math.floor(Math.random() * modifiers.length)]);
      setCurrentMod(upcomingMod);
    }
    

    return (
<>


      
<Box style={styles.circleBox} sx={{ position: 'relative', display: 'inline-flex' }}>
    <CircularProgress style={styles.progress} variant="determinate" value={100} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box style={styles.innerText}>
          <div style={styles.currentKey}>
            Gb
          </div>
          <div style={styles.currentMod}>
            Major
          </div>
          <div style={styles.upcomingKey}>
            Next: Db Major
          </div>
          <div style={styles.timerContainer}>
            <TimerIcon style={styles.timer} /> 2
          </div>
        </Box>
      </Box>
    </Box>

      {/* <Paper elevation={4} style={styles.keyContainer}>
        <Grid container  direction="column" style={mobile ? styles.gridMobile : styles.gridMobile}>
          <Grid item xs={10} style={styles.currentKey}>
            <h5 style={styles.key}>{currentKey} {currentMod}</h5> 
          </Grid>
          <Grid item xs={2} style={styles.nextKey}>  
              <div>
                  <h5 style={styles.gridItemText}>Next:</h5> 
                  <h5 style={styles.gridItemText}>{upcomingKey} {upcomingMod}</h5> 
              </div>

            <div style={styles.clockSection}>
              <TimerIcon style={styles.timerIcon} />  
              <Clock
                styles={styles}
                paused={paused}
                currentChord={`${currentKey} ${currentMod}`}
                upcomingChord={`${upcomingKey}${upcomingMod}`}
                activateChord={activateChord}
                updateChordsInRender={updateChordsInRender}
                delayInSeconds={delayInSeconds}
              />

         </div>
          </Grid>

          

         </Grid> 

         <DelayDisplay 
              delayInSeconds={delayInSeconds}
              setDelayInSeconds={setDelayInSeconds}
          />

      </Paper>

      <AudioControls
        currentChord={chords[`${currentKey}${currentMod}`]}
        setPaused={setPaused}
        paused={paused}
        delayInSeconds={delayInSeconds}
    /> */}

</>

      
    )
  }

export default KeyDisplay;