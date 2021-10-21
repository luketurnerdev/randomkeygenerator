import {useState} from 'react';
import {Button} from "@mui/material";
import { Howl, Howler } from 'howler';
import LoopIcon from '@mui/icons-material/Loop';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import {chords} from "../../../utils/musicImports";

const AudioControls = props => {
  const {currentChord} = props;
  const [looping, setLooping] = useState(false);

  const styles = {
    audioContainer: {
      border: '2px solid',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    volumeIcons: {
      display: 'flex',
      justifyContent: 'space-evenly'
    },
    volumeOn: {
      // opaci
    },
    volumeOff: {
      // backgroundColor: 'red'
      // position: 'static'
    }
  }

  
  const VolumeDisplay = () => {
    const [volume, setVolume] = useState(Howler.volume());

    const changeVolume = amount => {
      let existing = Howler.volume()
      console.log('existing ' + existing)
      
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

            <Button style={styles.volumeControls} ><PauseCircleOutlineIcon /> </Button>


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
              currentChord.play()
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