import {useRef, useEffect, useState} from 'react';
import Countdown from 'react-countdown'
const Clock = props => {
    const {styles, paused, handleChordChange, delayInSeconds} = props;
    const clockRef = useRef();
    const handleStart = () => clockRef.current.start();
    const checkIfCompleted = () => clockRef.current.isCompleted();
    const isPaused = () => clockRef.current.isPaused();
    const handlePause = () => clockRef.current.pause();
    const handleStop = () => clockRef.current.stop();
    const [secondsLeft, setSecondsLeft] = useState(delayInSeconds);

    // Update paused state based on upper input
    useEffect(() => {
        pauseOrUnpause();
    }, [paused])

    // If user changes delay while the app is running:
    useEffect(() => {
        setSecondsLeft(delayInSeconds);
    }, [delayInSeconds])

    const handleTimeLeft = () => {
      // this happens every tick
      
      if (secondsLeft > 1) {
        setSecondsLeft(prev => prev-1);
      }

    }

    
    const handleComplete = () => {
        console.log(`completed? ${checkIfCompleted()}`);

        // if user has not stopped it, loop it again
        if (!paused) {
          // Stop clock
          handleStop();

          handleChordChange();
          // Reset timer 
          setSecondsLeft(delayInSeconds);

          // Start clock
          handleStart();
        }


    }

    const clockRenderer = ({ hours, minutes, seconds, completed, api}) => {

        // Render a countdown
        return (
          <div style={styles.countdown} >
          
            <h4>{(hours > 0) && `${hours} Hours`} {(minutes > 0) && `${minutes} Mins`}  {seconds} sec</h4>
          </div>
        )
      }
  
      const pauseOrUnpause = () => {
        if (isPaused()) {
          handleStart();
        }

        else {
          handlePause();
        }
      }
    return (
      <div>
        <Countdown 
          date={Date.now() + secondsLeft * 1000}
          ref={clockRef}
          autoStart={false}
          renderer={clockRenderer}
          onComplete={handleComplete}
          onTick={handleTimeLeft}
        />
      </div>
    )
  }

export default Clock;