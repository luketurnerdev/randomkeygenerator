import {useState} from 'react';
import {Button} from "@mui/material";
import { Howler } from 'howler';
import LoopIcon from '@mui/icons-material/Loop';
const AudioControls = props => {
  const {currentChord, chords} = props;
  const [looping, setLooping] = useState(false);
  const [volume, setVolume] = useState(50);

    const VolumeDisplay = () => {
        return ( 
          <input min="1" max="100" value={volume} onClick={e => changeVolume(e)} type="range" >
          </input>
        )
      }

      const changeVolume = e => {
            // TODO
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
         <div>
              <h1>AudioControls Component</h1>
              <VolumeDisplay />
              
              <Button variant={looping ? "contained" : "outlined"} onClick={() => toggleLoop()}>
                <LoopIcon /> Loop
              </Button>
              <h1>{looping ? "Looping" : "not looping"}</h1>
         </div>
      )
}

export default AudioControls;