import {useRef, useEffect, useState} from 'react';
import Countdown from 'react-countdown'

const Clock = props => {
    const clockRef = useRef();
    // Determine if first time playing
    const [firstPlay, setFirstPlay] = useState(true);
    const {paused, delayInSeconds, styles, activateChord, currentChord, upcomingChord, updateChordsInRender, timeLeft, setTimeLeft} = props;
    const handleStart = () => clockRef.current.start();
    const handlePause = () => clockRef.current.pause();
    

    // Update paused state based on context change
    useEffect(() => {
        if (paused) {
          handlePause();
        }

        else {
          if (timeLeft === delayInSeconds && firstPlay) {
            activateChord(currentChord);
            setFirstPlay(false);
          }
          handleStart();
        }
    }, [paused])

    useEffect(() => {

    }, [])


    const handleTimeLeft = () => {
      // this happens every tick

      if ((timeLeft === delayInSeconds) && firstPlay) {
        console.log('first time');
      }
      if (timeLeft >0 ) {
          setTimeLeft(timeLeft-0.01)
      }

      if (timeLeft <=0) {
        handleComplete();
      }
    }

    
    const handleComplete = () => {
       console.log('completo')
        // if user has not stopped it, loop it again
        if (!paused) {
          console.log('updating chords in render')
          // Play new sound
          // activateChord(upcomingChord);
          updateChordsInRender();

          // Reset timer  
          // setTimeLeft(delayInSeconds)

          // Start clock
          handleStart();
          activateChord(upcomingChord);
          setTimeLeft(delayInSeconds);
        }


    }

    const clockRenderer = ({ hours, minutes, seconds}) => {

        // Render a countdown
        return (
          <div style={styles.countdown}>             
            <h4>{(hours > 0) && `${seconds} Hours`} {(minutes > 0) && `${minutes} Mins`}  {Math.ceil(timeLeft)}</h4>
          </div>
        )
      }
  
    return (
      <div>
        <Countdown 
          date={Date.now() + delayInSeconds * 1000}
          ref={clockRef}
          // autoStart={true}
          renderer={clockRenderer}
          onTick={handleTimeLeft}
          intervalDelay={10}
          precision={1}
          // onComplete={handleComplete}
        />
      </div>
    )
  }

export default Clock;