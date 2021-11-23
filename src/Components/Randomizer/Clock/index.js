import {useRef, useEffect, useCallback, useContext} from 'react';
import Countdown from 'react-countdown'

const Clock = props => {
    const clockRef = useRef();
    const {paused, delayInSeconds, styles, activateChord, upcomingChord, updateChordsInRender, clock, timeLeft, setTimeLeft} = props;
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
        console.log('tick')
      if (timeLeft >=0 ) {
          setTimeLeft(timeLeft-0.01)
      }

      else {
            handleComplete();
      }

    }

    
    const handleComplete = () => {
        console.log('comp')
        // if user has not stopped it, loop it again
        if (!paused) {

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
          autoStart={false}
          renderer={clockRenderer}
          onTick={handleTimeLeft}
          intervalDelay={10}
          precision={3}
        />
      </div>
    )
  }

export default Clock;