import Clock from "../Clock"
import {CircularProgress, Box} from '@mui/material';
import TimerIcon from '@mui/icons-material/Timer';
import {activateChord} from "../../../utils/playSounds";
import styles from "./styles"
import {decideUpcomingKey} from "../../../utils/keyChanges";
import {useState, useEffect} from 'react';


const KeyDisplay = props => {
    
    const {chordMovement, modifiers, delayInSeconds, paused, setPaused} = props;
    const [timeLeft, setTimeLeft] = useState(delayInSeconds)
    const keysWithFlats = ["Ab","A","Bb","B","C","Db","D","Eb","E","F","Gb","G"];
    // const keysWithFlats = ["C", "E", "G"];
    // const keysWithFlats = ["Gb"];
    // const keysWithSharps = ["A","A#","B","C","C#","D","D#","E","F","F#","G", "G#"];
  
    const [currentKeyset, setCurrentKeyset] = useState(keysWithFlats);
  
    const [currentKey, setCurrentKey] = useState("C");
    const [upcomingKey,setUpcomingKey] = useState("C");
    const [currentMod, setCurrentMod] = useState("Major");
    const [upcomingMod,setUpcomingMod] = useState("Major");
  
    // If chordMovement prop has changed, change upcoming instantly
    useEffect(() => {
      console.log('key order has changed to ' +chordMovement)
      changeChordBasedOnChordMovement()
    
    }, [chordMovement])

    useEffect(() => {
      changeChordBasedOnChordMovement()
      console.log('mod changed')
    
    }, [modifiers])
    
    // When user changes delay while app running, reset timer
    useEffect(() => {
      setTimeLeft(delayInSeconds);
    }, [delayInSeconds])

    const changeChordBasedOnChordMovement = () => {
      // Set the new chord in render state
      setUpcomingKey(decideUpcomingKey(chordMovement, upcomingKey, currentKeyset));
    }


    const updateChordsInRender = () => {

      setUpcomingKey(decideUpcomingKey(chordMovement, upcomingKey, currentKeyset));
      setCurrentKey(upcomingKey);

      setUpcomingMod(modifiers[Math.floor(Math.random() * modifiers.length)]);
      setCurrentMod(upcomingMod);
    }
    
    const InnerCircle = () => {

      return (
        <>
        <CircularProgress 
          thickness={2} 
          style={styles.progress} 
          variant="determinate"
          value={(100 / delayInSeconds) * timeLeft} 
        />
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
              {currentKey}
            </div>
            <div style={styles.currentMod}>
              {currentMod}
            </div>
            <div style={styles.upcomingKey}>
              Next: {upcomingKey} {upcomingMod}
            </div>
            <div style={styles.timerContainer}>
              <TimerIcon style={styles.timer} /> 
              <Clock
                timeLeft={timeLeft}
                setTimeLeft={setTimeLeft}
                styles={styles}
                paused={paused}
                setPaused={setPaused}
                currentChord={`${currentKey}${currentMod}`}
                upcomingChord={`${upcomingKey}${upcomingMod}`}
                activateChord={activateChord}
                updateChordsInRender={updateChordsInRender}
                delayInSeconds={delayInSeconds}
              />
            </div>
          </Box>
        </Box>
        </>
      )
    }

    const OuterCircle = () => {
      return (
        <>
        <CircularProgress thickness={2} style={styles.outerProgress} variant="determinate" value={100} />
        </>
      )
    }

    return (
<>


      
<Box style={styles.circleBox} sx={{ position: 'relative', display: 'inline-flex' }}>
  <InnerCircle />
  <OuterCircle />
</Box>
</>

      
    )
  }

export default KeyDisplay;