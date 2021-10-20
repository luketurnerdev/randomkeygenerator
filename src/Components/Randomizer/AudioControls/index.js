import {useState} from 'react';
const AudioControls = () => {
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

      return (
         <div>
              <h1>AudioControls Component</h1>
              <VolumeDisplay />
         </div>
      )
}

export default AudioControls;