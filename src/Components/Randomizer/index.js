import {useState, useEffect} from 'react';
// 1. Randomize every 10 seconds
// 2. Add variable amount of seconds
// validate this field
// 2. Go in sequential order
// 3. Go in circle of 5ths
// 5. Allow chord to be major or minor (user sets)
// Add metronome
// change delay setting ui (arrows?)
// 4. Add sounds (chord?)



function Randomizer() {
  const keys = ["Ab","A","Bb","B","C","Db","D","Eb","E","F","Gb","G"];
  const modifiers = ["Major", "Minor"];
  const [currentKey, setCurrentKey] = useState("C");
  const [changing, setChanging] = useState(true);
  const [delayInSeconds, setDelayInSeconds] = useState(5);
  const [currentModifier, setCurrentModifier] = useState(modifiers[0])
  let ding = new Audio("https://freesound.org/data/previews/173/173932_3229685-lq.mp3")
  ding.volume = 0.2;

  let cSound = new Audio("https://freesound.org/data/previews/234/234060_713972-lq.mp3");
  cSound.volume = 0.3;


  useEffect(() => {
    // if changing is true, change key.
    
    if (changing) {
        changeKeyRandomly();
        setChanging(false)
    };

  }, [changing]);

  const playKeySound = (key) => {
    switch(key) {
      case "C": {
        cSound.play();
      }
    }
  }

  const changeKeyRandomly = () => {
    setTimeout(() => {
      let newKey = keys[Math.floor(Math.random() * keys.length)];
      setCurrentKey(newKey)
      
      let newMod = modifiers[Math.floor(Math.random() * modifiers.length)];
      setCurrentModifier(newMod)
  
      setChanging(true);
    }, ( delayInSeconds * 1000));
  }

  const changeDelay = (e) => {
    setDelayInSeconds(e.target.value)
  }

  return (
    <div className="App">
     <h1>Key Randomizer</h1> 
      <div>
        <h1>{currentKey} {currentModifier}</h1>
        <p>{!currentKey && "null"}</p>
        <label> Delay: </label>
        <input type="number" onChange={ (e) => changeDelay(e)}></input> Seconds
      </div>
    </div>
  );
}

export default Randomizer;
