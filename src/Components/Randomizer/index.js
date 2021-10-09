import {useState, useEffect} from 'react';
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
  console.log(chords["CMajor"])
  // chords["CMajor"].play()
  // const keys = ["Ab","A","Bb","B","C","Db","D","Eb","E","F","Gb","G"];
  const keys = ["C","E", "Db"];
  // const modifiers = ["Major", "Minor"];
  const modifiers = ["Major"];
  const [currentKey, setCurrentKey] = useState("C");
  const [upcomingKey,setUpcomingKey] = useState("");
  const [upcomingMod,setUpcomingMod] = useState("");
  const [delayInSeconds, setDelayInSeconds] = useState(3);
  const [currentMod, setCurrentMod] = useState(modifiers[0])
  const [volume, setVolume] = useState(0.4);



  

  //TODO:

  // make metronome reset on new chord regardless of bpm and timing
  // keep a log of chords played in case cool progressions emerge
  // users can save these later?
  
  //Allow user to choose flats or sharps

  const playChord = chordString => {
    console.log(chordString)
    // switch (chordString) {
    //   case "CMajor": {
    //     CMajor.play();
    //     break;
    //   }
    //   case "DbMajor": {
    //     DbMajor.play();
    //     break;
    //   }
    //   case "EMajor": {
    //     EMajor.play();
    //     break;
    //   }
    // }
  }

  const decideNewKey = () => {
    let newKey = keys[Math.floor(Math.random() * keys.length)];
    let newMod = modifiers[Math.floor(Math.random() * modifiers.length)];
    setUpcomingKey(newKey)
    setUpcomingMod(newMod)
  } 
  
  const KeyDisplay = () => {
    return (
      <>
        <Countdown 
          date={Date.now() + delayInSeconds * 1000}
          renderer={clockRenderer}
        />
        <h1>{currentKey} {currentMod} </h1>
        <br />
        <br />
        <br />
        <span>Upcoming: {upcomingKey} {upcomingMod}</span>

      </>
    )
  }

  const clockRenderer = ({ hours, minutes, seconds, completed, api}) => {

    if (completed) {
        console.log('in completed')
        // Start timer over
        api.start();
        // Play sound of new key
        playChord(`${upcomingKey}${upcomingMod}`)
  
        // Decide on next upcoming key
        decideNewKey();
        setCurrentKey(upcomingKey)
        
        setCurrentMod(upcomingMod)

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
        <p>{!currentKey && "null"}</p>
        <h5>Delay</h5>
        <input type="number" onChange={e => changeDelay(e)} /> <span> seconds </span>
        {/* <div>
            <button onClick={() => decrementDelay(1)}>Down</button>
            <p>{delayInSeconds}</p>
            <button onClick={() => incrementDelay(1)}>Up</button>
        </div> */}
        <h5>Seconds</h5>
      </div>
    </div>
  );
}

export default Randomizer;
