import {useState} from 'react';
import {Howler} from 'howler';
import Countdown from 'react-countdown';
import {chords} from "../../utils/musicImports";
import {generateRandomKey, generateSequentialKey, generateFifthsKey} from "../../utils/keyChanges";
import { Paper, Grid, Slide, TextField, Button } from '@mui/material';





const Randomizer = () => {
  const keysWithFlats = ["Ab","A","Bb","B","C","Db","D","Eb","E","F","Gb","G"];
  // const keysWithSharps = ["A","A#","B","C","C#","D","D#","E","F","F#","G", "G#"];

  const [currentKeyset, setCurrentKeyset] = useState(keysWithFlats);
  const [keyOrder, setKeyOrder] = useState("sequential")
  const [delayInSeconds, setDelayInSeconds] = useState(3);
  const [loop, setLoop] = useState(true)
  const [volume, setVolume] = useState(50);
  const [modifiers, setModifiers] = useState(["Minor"])

  // */
  

  //TODO:

  // make metronome reset on  chord regardless of bpm and timing
  // keep a log of chords played in case cool progressions emerge
  // users can save these later?
  
  //Allow user to choose flats or sharps

  const styles = {
    paperContainer: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      border: '1px solid green',
      margin: ' 0 15%',
    },
    keyDisplayGrid: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '10vh',
      width: '100%%',
      textAlign: 'center',
      border: '2px solid red'
    },
    keyDisplayItem: {
      // border: '2px solid green',
    },
    gridItemText: {
      margin: '5px 0 ',
    },
    countdown: {
      margin: '10px 0',
      border: '2px solid red',
      textAlign: 'center',
      fontWeight: 400
    },
    delayDisplay: {
      border: '2px solid black',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    seconds: {
      width: '75%',
      height: '30%',
      padding: '0 10px',
    },
    delayText: {

    }
  }

  const changeVolume = e => {
    let vol = e.target.value;

    setVolume(vol);
    // for (const key in chords) {

    //   chords[key].volume = newVol/100;
    // }
  }

  const KeyDisplay = () => {
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
      chord.play()
      if (chord) {

        // chord.once('load', () => {})
        // chord.volume = volume / 100;
        // chord.play();
        // // TODO - if loop selected
        // chord.loop = loop;
      }
      else {
        console.error('no chord found')
      }
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

        
        setUpcomingMod(modifiers[Math.floor(Math.random() * modifiers.length)]);
        setCurrentMod(upcomingMod);


        return <h1>paused</h1>
        } 
        
        else {
          // Render a countdown
          return (
            <div style={styles.countdown} >
            
            <span>{(hours > 0) && hours} {minutes} mins {seconds} sec</span>
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
</>

      
    )
  }

  const ChangeOrderDisplay = () => {
    return (
      <div>
      <h1>Key order: {keyOrder}</h1>
      <button 
        onClick={() => setKeyOrder("randomKey")}
      >
        {keyOrder === "randomKey" ? "RANDOM" : "Random"}
      </button>
      <button onClick={() => setKeyOrder("sequential")}
      >
        {keyOrder === "sequential" ? "SEQUENTIAL" : "sequential"}

      </button>
      <button onClick={() => setKeyOrder("fifths")}
      >
        {keyOrder === "fifths" ? "FIFTHS" : "fifths"}
      </button>
      </div>
    )
  }



  const VolumeDisplay = () => {
    return ( 
      <input min="1" max="100" value={volume} onClick={e => changeVolume(e)} type="range" >
      </input>
    )
  }



  const ChangeModDisplay = props => {
    const {modifiers, setModifiers} = props;
    const addOrRemoveMod = modString => {
      let prev = modifiers;
      prev.includes(modString) ? setModifiers(prev.filter((e) => {return e != modString})) : setModifiers([...prev, modString])
    }


    return (
      <div>
       <h1>Modifiers: {modifiers}</h1>

      <button onClick={() => addOrRemoveMod("Major")}>
       Major
     </button>

    <button onClick={() => addOrRemoveMod("Minor")}>
       Minor
    </button>


     </div>
    )
  }


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
        <KeyDisplay />
      
        <DelayDisplay />
        <ChangeOrderDisplay />
        <ChangeModDisplay modifiers={modifiers} setModifiers={setModifiers} />

        {/* <VolumeDisplay />  */}
        {/* <h1>Vol: {volume} </h1>

        <h1>Random? {randomizeMod.toString()} </h1>
        <h5>Delay</h5>
        <button onClick={() => changeKeySequentially()}> Test </button>
        <input type="number" onChange={e => changeDelay(e)} /> <span> seconds </span>
        <h5>Seconds</h5> */}
      </div>
    </Paper>
  );
}

export default Randomizer;
