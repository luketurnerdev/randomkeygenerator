import {useRef, useEffect, useState, useContext} from 'react';
import ClockContext from '../../../Contexts/ClockContext';

import Countdown from 'react-countdown'

const Clock = props => {
    const [clock, setClock] = useContext(ClockContext);
    const {styles, activateChord, delayInSeconds, upcomingChord, updateChordsInRender} = props;
    const clockRef = useRef();
    const handleStart = () => clockRef.current.start();
    const checkIfCompleted = () => clockRef.current.isCompleted();
    const isPaused = () => clockRef.current.isPaused();
    const handlePause = () => clockRef.current.pause();
    const handleStop = () => clockRef.current.stop();

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
      
      if (clock.secondsLeft > 1 && !clock.paused) {
        setClock({...clock, secondsLeft: clock.secondsLeft-1 });
      }

    }

    
    const handleComplete = () => {

        // if user has not stopped it, loop it again
        if (!clock.paused) {
          // Stop clock
          handleStop();

          // Play new sound
          activateChord(upcomingChord);
          updateChordsInRender();
          // Reset timer  
          setClock({...clock, secondsLeft: delayInSeconds });

          // Start clock
          handleStart();
        }


    }

    const clockRenderer = ({ hours, minutes, seconds, completed, api}) => {

        // Render a countdown
        return (
          <div style={styles.countdown} >
          
            <h4>{(hours > 0) && `${hours} Hours`} {(minutes > 0) && `${minutes} Mins`}  {clock.secondsLeft}</h4>
          </div>
        )
      }
  
    return (
      <div>
        <Countdown 
          date={Date.now() + clock.secondsLeft * 1000}
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