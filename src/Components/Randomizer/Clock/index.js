import {useRef, useEffect, useCallback, useContext} from 'react';
import ClockContext from '../../../Contexts/ClockContext';
import Countdown from 'react-countdown'

const Clock = props => {
    const clockRef = useRef();
    const {delayInSeconds, styles, activateChord, upcomingChord, updateChordsInRender, clock, setClock, timeLeft, setTimeLeft} = props;
    const handleStart = () => clockRef.current.start();
    const checkIfCompleted = () => clockRef.current.isCompleted();
    const isPaused = () => clockRef.current.isPaused();
    const handlePause = () => clockRef.current.pause();
    const handleStop = () => clockRef.current.stop();

    console.log('render clock')
    console.log(clock)

    // Update paused state based on context change
    useEffect(() => {
        if (clock.paused) {
          handlePause();
        }

        else {
          handleStart();
        }
    }, [clock.paused])


    const handleTimeLeft = () => {
      // this happens every tick
        console.log('tick')
      if (timeLeft > 1 ) {
          setTimeLeft(timeLeft-1)
      }

      else {
            handleComplete();
      }

    }

    
    const handleComplete = () => {
        console.log('comp')
        // if user has not stopped it, loop it again
        if (!clock.paused) {
          // Stop clock
          handleStop();

          // Play new sound
          activateChord(upcomingChord);
          updateChordsInRender();
          // Reset timer  
          setTimeLeft(delayInSeconds)

          // Start clock
          handleStart();
        }


    }

    const clockRenderer = ({ hours, minutes, seconds, completed, api}) => {

        // Render a countdown
        return (
          <div style={styles.countdown} >
              
            <h4>{(hours > 0) && `${seconds} Hours`} {(minutes > 0) && `${minutes} Mins`}  {timeLeft}</h4>
          </div>
        )
      }
  
    return (
      <div>
        <Countdown 
          date={Date.now() + clock.secondsLeft * 1000}
          ref={clockRef}
          autoStart={true}
          renderer={clockRenderer}
        //   onComplete={handleComplete}
          onTick={handleTimeLeft}
        />
      </div>
    )
  }

export default Clock;