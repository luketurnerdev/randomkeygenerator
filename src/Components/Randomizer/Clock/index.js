import {useRef, useEffect, useState} from 'react';
import Countdown from 'react-countdown'

const Clock = props => {
    const clockRef = useRef();
    // Determine if first time playing
    const {paused, delayInSeconds, styles, activateChord, upcomingChord, updateChordsInRender, timeLeft, setTimeLeft} = props;
    const handleStart = () => clockRef.current.start();
    const handlePause = () => clockRef.current.pause();
    

    // Update paused state based on context change
    useEffect(() => {
        if (paused) {
          handlePause();
        }

        else {
          handleStart();
        }
    }, [paused])


    const handleTimeLeft = () => {
      // this happens every tick
      
      // timeleft starts as 5
      // delay starts as 5.
      // activates immediately (plays upcomingChord)
      if (timeLeft === delayInSeconds) {
        console.log('chord activated because timer reset')
       
      }
      if (timeLeft >=0 ) {
          setTimeLeft(timeLeft-0.01)
      }


      // else {
      //       handleComplete();
      // }

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
          precision={3}
          onComplete={handleComplete}
        />
      </div>
    )
  }

export default Clock;