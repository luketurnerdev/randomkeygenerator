import Randomizer from "./Components/Randomizer";
import {useState} from 'react';
import ReactGA from 'react-ga';

function App() {
  const [mobile, setMobile] = useState(window.matchMedia("(max-width: 768px)").matches)

  ReactGA.initialize('UA-210928692-2', {
    debug: true,
    titleCase: false,
    gaOptions: {
      userId: 123
    }
  });

  console.log(ReactGA.ga())
  return (
    <div className="App">
       {mobile && (<h1>Small Screen</h1>)}
      {!mobile && (<h3>Big Screen</h3>)}
      {/* <Randomizer  /> */}
      {/* <Metronome /> */}

    </div>
  );
}

export default App;
