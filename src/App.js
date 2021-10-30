import Randomizer from "./Components/Randomizer";
import Footer from "./Components/Footer"
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
      <Randomizer mobile={mobile} />
      <Footer />
      {/* <Metronome /> */}

    </div>
  );
}

export default App;
