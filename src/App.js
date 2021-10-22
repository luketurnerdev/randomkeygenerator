import Randomizer from "./Components/Randomizer";
import Metronome  from "./Components/Metronome";
import {useState} from 'react';
function App() {
  // const [paused, setPaused] = useState(true);
  return (
    <div className="App">
        <Randomizer  />
      {/* <Metronome /> */}
      {/* <button onClick={() => setPaused(!paused)}>Pause / Unpause</button> */}
      {/* <h1>{paused ? "Paused" : "unpaused"}</h1> */}

    </div>
  );
}

export default App;
