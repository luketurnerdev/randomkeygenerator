import {useRef, useEffect, useState} from 'react';
import Countdown from 'react-countdown'
const Clock = props => {
    const {paused, handleChordChange, delayInSeconds} = props;
    const clockRef = useRef();
    const handleStart = () => clockRef.current.start();
    const checkIfCompleted = () => clockRef.current.isCompleted();
    const isPaused = () => clockRef.current.isPaused();
    const isStopped = () => clockRef.current.isStopped();
    const handlePause = () => clockRef.current.pause();
    const handleStop = () => clockRef.current.stop();
    const [secondsLeft, setSecondsLeft] = useState(delayInSeconds);

    useEffect(() => {
        // Pause on first load
        // handlePause();
        // console.log(`is paused? ${isPaused()}`)
    }, [])
    
    useEffect(() => {
        console.log(`is paused? ${isPaused()}`)
        pauseOrUnpause();
    }, [paused])


    const styles = {
      countdown: {
        textAlign: 'center',
        fontWeight: 400
      },
    }

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
          handleStop();
          handleChordChange();
          setSecondsLeft(delayInSeconds);
          handleStart();
        }

    }

    const clockRenderer = ({ hours, minutes, seconds, completed, api}) => {

          
            // Render a countdown
            return (
              <div style={styles.countdown} >
              
               <h5>{(hours > 0) && `${hours} Hours`} {(minutes > 0) && `${minutes} Mins`}  {seconds} sec</h5>
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