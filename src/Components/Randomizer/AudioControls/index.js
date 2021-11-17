import {useState} from 'react';
import {Button} from "@mui/material";
import {Howler} from 'howler';
import LoopIcon from '@mui/icons-material/Loop';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import {chords} from "../../../utils/musicImports";
import {pauseSynth} from "../../../utils/playSounds";

const AudioControls = props => {
  const {currentChord, paused, setPaused} = props;
  const [looping, setLooping] = useState(false);

  const styles = {
    audioContainer: {
      margin: '15px 0',
      border: '2px solid',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    volumeIcons: {
      display: 'flex',
      justifyContent: 'space-evenly'
    },
  }

  
  const VolumeDisplay = () => {
    const [volume, setVolume] = useState(Howler.volume());

    const pauseOrUnpause = () => {
      // If we are PAUSING

      if (!paused) {
        Howler.stop();
        // Turn off synth HERE
        pauseSynth();
        // activateChord("C Major")
      }

      // if we are PLAYING
      if (paused) {
        // activateChord("C Major")
      }

      // Set render state
      setPaused (!paused)
    }

    const changeVolume = amount => {
      let existing = Howler.volume()
      
      existing = Math.round(existing * 10) / 10;
      amount = Math.round(amount * 10) / 10;
      let newVol = existing+amount;
      Howler.volume(newVol)
      setVolume(newVol)
    }
    return ( 
          <div style={styles.volumeIcons}>
            <Button disabled={volume < 0.1} 
            onClick={() => changeVolume(-0.1)}>
              <VolumeDownIcon /> 
            </Button>

            <Button onClick={pauseOrUnpause} style={styles.volumeControls} >
              {paused ? <PlayCircleOutlineIcon /> : <PauseCircleOutlineIcon />  }
              </Button>


            <Button disabled={volume > 0.9} style={styles.volumeControls} onClick={() => changeVolume(0.1)}><VolumeUpIcon /> </Button>      

          </div>
        )
      }
      const toggleLoop = () => {

            // Toggle all chords' loop attribute
            for (const key in chords ) {
              chords[key]._loop = !chords[key]._loop;
            }

            // If turning to false, also stop current chord
            if (looping) {
              Howler.stop()
            }
            
            // If turning to true,
            else {
              Howler.stop()
              if (!paused) {currentChord.play()}
            }
            

            //Toggle render state
            setLooping(!looping);

      }

      return (
         <div style={styles.audioContainer}>

              <VolumeDisplay />
              
              <Button variant={looping ? "contained" : "outlined"} onClick={() => toggleLoop()}>
                <LoopIcon /> Loop
              </Button>
         </div>
      )
}

export default AudioControls;