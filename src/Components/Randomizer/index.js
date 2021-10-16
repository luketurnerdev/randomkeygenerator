import {useState} from 'react';
import Countdown from 'react-countdown';
import {chords} from "../../utils/musicImports";
import { Paper, Grid } from '@mui/material';
import { red } from '@mui/material/colors';

// 1. Randomize every 10 seconds
// 2. Add variable amount of seconds
// validate this field
// 2. Go in sequential order
// 3. Go in circle of 5ths
// 5. Allow chord to be major or minor (user sets)
// Add metronome
// change delay setting ui (arrows?)
// 4. Add sounds (chord?)
// have pause from above state for pausing app (global state?)



const Randomizer = () => {
  const modifiers = ["Major", "Minor"];
  const keysWithFlats = ["Ab","A","Bb","B","C","Db","D","Eb","E","F","Gb","G"];
  // const keysWithSharps = ["A","A#","B","C","C#","D","D#","E","F","F#","G", "G#"];

  const [currentKey, setCurrentKey] = useState("G");
  const [upcomingKey,setUpcomingKey] = useState("Ab");
  const [currentMod, setCurrentMod] = useState("Minor");
  const [upcomingMod,setUpcomingMod] = useState("Major");
  const [randomizeMod, setRandomizeMod] = useState(false);
  const [currentKeyset, setCurrentKeyset] = useState(keysWithFlats);
  const [keyOrder, setKeyOrder] = useState("randomKey")
  const [delayInSeconds, setDelayInSeconds] = useState(3);
  const [secondsLeft, setSecondsLeft] = useState(delayInSeconds);
  const [loop, setLoop] = useState(true)
  const [volume, setVolume] = useState(50);


  /*

  // Start of App (or when user presses play)
  1. Upcoming key is set to something (G). Mod set to major for now. Chord should play straight away.
  2. Upcoming key is changed based on mode. Countdown starts.
  3. End of countdown, play upcoming key, and THEN change upcoming key. Restart countdown.

  */
  

  //TODO:

  // make metronome reset on  chord regardless of bpm and timing
  // keep a log of chords played in case cool progressions emerge
  // users can save these later?
  
  //Allow user to choose flats or sharps

  const styles = {
    paperContainer: {
      display: 'flex',
      // justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      border: '1px solid black',
      margin: ' 0 15%',
    },
    keyDisplayGrid: {
      border: '2px solid green',
      height: '10vh',
      width: '30vw'
    },
    keyDisplayItem: {
      border: '2px solid red'
    }
  }

  const changeVolume = e => {
    let vol = e.target.value;
    console.log(e.target.value);

    setVolume(vol);
    // for (const key in chords) {

    //   chords[key].volume = newVol/100;
    // }
  }

  const changeKeySequentially = (currentKey) => {
    let index = currentKeyset.indexOf(currentKey);
    let newKey;
    (index >= currentKeyset.length-1) ? newKey = currentKeyset[0] : newKey = currentKeyset[index+1]

    setUpcomingKey(newKey);
    randomizeModIfEnabled();
  }

  const changeKeyRandomly = () => {
    let newKey = currentKeyset[Math.floor(Math.random() * currentKeyset.length)];
    setUpcomingKey(newKey)
    randomizeModIfEnabled();
  }

  const changeKeyInFifths = currentKey => {
    let index = currentKeyset.indexOf(currentKey);
    let newPos = index+7;
    if (newPos > (currentKeyset.length-1)) {
      newPos = (newPos-currentKeyset.length);
    }
    setUpcomingKey(currentKeyset[newPos]);
    randomizeModIfEnabled();
  }

  const randomizeModIfEnabled = () => {
    if (randomizeMod) {
      let newMod = modifiers[Math.floor(Math.random() * modifiers.length)];
      setUpcomingMod(newMod);
    }
  }

  const playChord = () => {
    let chord = chords[`${upcomingKey}${upcomingMod}`];
    if (chord) {
      chord.volume = volume / 100;
      chord.play();
      // TODO - if loop selected
      chord.loop = loop;
    }
    else {
      console.error('no chord found')
    }
    setCurrentKey(upcomingKey);
  }

  const stopChord = () => {
    // find chord in list by name,
    let currentChord = `${currentKey}${currentMod}`
    chords[currentChord].pause();
    chords[currentChord].currentTime = 0;
  }

  const decideUpcomingKey = keyOrder => {
    switch (keyOrder) {
      case "randomKey": 
        changeKeyRandomly()
        break;

      case "sequential":
        // We pass in upcoming so it starts from correct key
        changeKeySequentially(upcomingKey);
        break;

      case "fifths": 
        changeKeyInFifths(upcomingKey);
        break;

      default: {
        break;
      }
    }
  } 
  
  const KeyDisplay = () => {
    return (
      <Paper elevation={4} >
        <Grid container style={styles.keyDisplayGrid}>
          <Grid item xs={6} style={styles.keyDisplayItem}>
            Current: x
          </Grid>
          <Grid item xs={6} style={styles.keyDisplayItem}>
            Upcoming: y
          </Grid>
          {/* <h1>{currentKey} {currentMod}</h1>
            <Countdown 
              date={Date.now() + delayInSeconds * 1000}
              renderer={clockRenderer}
            />
            <br />
            <span>Upcoming: {upcomingKey} {upcomingMod}</span> */}
        </Grid> 

      </Paper>
    )
  }

  const ChangeOrderDisplay = () => {
    const changeToRandom = () => {
      if (keyOrder != "randomKey") {
        setKeyOrder("randomKey")
        changeKeyRandomly();
      }
    }
    const changeToFifths = () => {
      if (keyOrder != "fifths") {
        setKeyOrder("fifths")
        changeKeyRandomly(currentKey);

      }
    }
    const changeToSequential = () => {
      if (keyOrder != "sequential") {
        setKeyOrder("sequential")
        changeKeySequentially(currentKey);
      }
    }
    // TODO: Clear the upcoming Chord when we change, and set to
    return (
      <div>
      <h1>Key order: {keyOrder}</h1>
      <button 
      onClick={() => changeToRandom()}
      >
        {keyOrder === "randomKey" ? "Random [X]" : "Random"}
      </button>
      <button onClick={() => changeToSequential()}
      >
      {keyOrder === "sequential" ? "sequential [X]" : "sequential"}

      </button>
      <button onClick={() => changeToFifths()}
      >
      {keyOrder === "fifths" ? "fifths [X]" : "fifths"}

      </button>
      </div>
    )
  }

  const ChangeModDisplay = () => {
    return (
     <div>
        <h1>Modifier: {currentMod} </h1>
      <button onClick={() => {
        setRandomizeMod(false);
        setUpcomingMod("Major")
        // setCurrentMod("Major")
      }
    }>
       Major
    </button >
      <button onClick={() => {
        setRandomizeMod(false);
        setUpcomingMod("Minor")
        // setCurrentMod("Minor")
      }
    }>
       Minor
    </button >

    <button onClick={() => {
        setRandomizeMod(true);
      }
    }>
       Random
    </button >


     </div>
    )
  }

  const VolumeDisplay = () => {
    return ( 
      <input min="1" max="100" value={volume} onClick={e => changeVolume(e)} type="range" >
      </input>
    )
  }

  const clockRenderer = ({ hours, minutes, seconds, completed, api}) => {

    // Every second, this re-renders, so we can track the seconds
    if (completed) {
      // Stop any currently playing chord from overlapping
      stopChord();
      // Play upcoming (now current) chord
      playChord();

      decideUpcomingKey(keyOrder);
      setCurrentMod(upcomingMod)

      //Restart clock
      api.start();
      return <h1>App is paused</h1>
      } 
      
      else {
        // Render a countdown
        return <span>{(hours > 0) && hours} hr {minutes} mins {seconds} sec</span>;
      }
  };
 
  const changeDelay = (e) => {
    if (e.target.value >= 1) {
      setDelayInSeconds(e.target.value)
    }
  }


  return (
    <Paper elevation={5} style={styles.paperContainer}>
     <h1>Key Randomizer</h1> 
      <div>
        <KeyDisplay />
        {/* <ChangeOrderDisplay />
        <ChangeModDisplay />
        <VolumeDisplay /> */}
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
