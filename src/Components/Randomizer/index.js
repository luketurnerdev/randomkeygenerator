import {useState, useEffect} from 'react';
import Countdown from 'react-countdown';
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



function Randomizer() {
  const keys = ["Ab","A","Bb","B","C","Db","D","Eb","E","F","Gb","G"];
  const modifiers = ["Major", "Minor"];
  const [currentKey, setCurrentKey] = useState("C");
  const [delayInSeconds, setDelayInSeconds] = useState(2);
  const [currentModifier, setCurrentModifier] = useState(modifiers[0])
  let ding = new Audio("https://freesound.org/data/previews/173/173932_3229685-lq.mp3")
  ding.volume = 0.2;

  let cSound = new Audio("https://freesound.org/data/previews/234/234060_713972-lq.mp3");
  cSound.volume = 0.3;

  
  const changeKeyRandomly = () => { 
    let newKey = keys[Math.floor(Math.random() * keys.length)];
    setCurrentKey(newKey)
    
    let newMod = modifiers[Math.floor(Math.random() * modifiers.length)];
    setCurrentModifier(newMod)
}
  
  const KeyDisplay = () => {
    return (
      <>
        <Countdown 
          date={Date.now() + delayInSeconds * 1000}
          renderer={clockRenderer}
        />
        <h1>{currentKey} {currentModifier}</h1>

      </>
    )
  }

  const clockRenderer = ({ hours, minutes, seconds, completed, api}) => {
    if (completed) {
      changeKeyRandomly();
      api.start();
      return <h1>App is Paused </h1>;
    } else {
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
