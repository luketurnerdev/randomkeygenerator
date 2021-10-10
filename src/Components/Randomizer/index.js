import {useState} from 'react';
import Countdown from 'react-countdown';
import {chords} from "../../utils/musicImports";
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
  const keys = ["Ab","A","Bb","B","C","Db","D","Eb","E","F","Gb","G"];
  const modifiers = ["Major", "Minor"];

  const [currentKey, setCurrentKey] = useState("G");
  const [upcomingKey,setUpcomingKey] = useState("Ab");
  const [currentMod, setCurrentMod] = useState("Minor");
  const [upcomingMod,setUpcomingMod] = useState("Major");
  const [randomizeMod, setRandomizeMod] = useState(false);
  const [keyOrder, setKeyOrder] = useState("randomKey")
  const [delayInSeconds, setDelayInSeconds] = useState(3);
  const [volume, setVolume] = useState(0.4);

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

  const changeKeySequentially = (currentKey) => {
    let index = keys.indexOf(currentKey);
    let newKey;
    (index >= keys.length-1) ? newKey = keys[0] : newKey = keys[index+1]

    setUpcomingKey(newKey);
    randomizeModIfEnabled();
  }

  const changeKeyRandomly = () => {
    let newKey = keys[Math.floor(Math.random() * keys.length)];
    setUpcomingKey(newKey)
    randomizeModIfEnabled();
  }

  const changeKeyInFifths = currentKey => {
    let index = keys.indexOf(currentKey);
    let newPos = index+7;
    if (newPos > (keys.length-1)) {
      newPos = (newPos-keys.length);
    }
    setUpcomingKey(keys[newPos]);
    randomizeModIfEnabled();
  }

  const randomizeModIfEnabled = () => {
    if (randomizeMod) {
      let newMod = modifiers[Math.floor(Math.random() * modifiers.length)];
      setUpcomingMod(newMod);
    }
  }

  const playChord = () => {
    let current = `${upcomingKey}${upcomingMod}`;
    console.log(current)
    if (current) {
      chords[current].play()
    }
    else {

      console.error('no chord found')
    }
    setCurrentKey(upcomingKey);
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
      <>
      <h1>{currentKey} {currentMod}</h1>
        <Countdown 
          date={Date.now() + delayInSeconds * 1000}
          renderer={clockRenderer}
        />
        <br />
        <span>Upcoming: {upcomingKey} {upcomingMod}</span>
      </>
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
        console.log('143')
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

  const clockRenderer = ({ hours, minutes, seconds, completed, api}) => {

    if (completed) {
      playChord();
      decideUpcomingKey(keyOrder);
      setCurrentMod(upcomingMod)
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
    <div className="App">
     <h1>Key Randomizer</h1> 
      <div>
        <KeyDisplay />
        <ChangeOrderDisplay />
        <ChangeModDisplay />
        <h1>Random? {randomizeMod.toString()} </h1>
        <h5>Delay</h5>
        <button onClick={() => changeKeySequentially()}> Test </button>
        <input type="number" onChange={e => changeDelay(e)} /> <span> seconds </span>
        <h5>Seconds</h5>
      </div>
    </div>
  );
}

export default Randomizer;
