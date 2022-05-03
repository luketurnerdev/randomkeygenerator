import Randomizer from "./Components/Randomizer";
import { ThemeProvider } from '@material-ui/core'
import ClockContext from "./Contexts/ClockContext";
import theme from "./theme";
import {useState} from 'react';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBPOWdAauqAQ1UEkSr_31-f0OFO4L1v3Ag",
  authDomain: "harmonise-me.firebaseapp.com",
  projectId: "harmonise-me",
  storageBucket: "harmonise-me.appspot.com",
  messagingSenderId: "249574349731",
  appId: "1:249574349731:web:74075c92c84fb609d65816",
  measurementId: "G-7PY2ZBZTLT"
};

const app = initializeApp(firebaseConfig);

// Initialize Analytics and get a reference to the service
const analytics = getAnalytics(app);

function App() {
  const [mobile, setMobile] = useState(window.matchMedia("(max-width: 768px)").matches)

  

  return (
  // <ClockContext.Provider >
    <ThemeProvider theme={theme}>
      <Randomizer mobile={mobile} />
    </ThemeProvider>
  // </ClockContext.Provider>
  );


}

export default App;
