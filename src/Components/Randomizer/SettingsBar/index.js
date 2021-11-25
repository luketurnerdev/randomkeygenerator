import {Chip, Modal, Box, Button} from "@mui/material"
import TimerIcon from '@mui/icons-material/Timer';
import SettingsLine from "../../SettingsLine";
import PlusButton from "../../PlusButton";
import DoneIcon from '@mui/icons-material/Done';
import MinusButton from "../../MinusButton";
import styles from "./styles";
import {useState, useContext} from 'react';


const SettingsBar = props => {
    // const [clock, setClock] = useContext(ClockContext);
    const [modalOpen, setModalOpen] = useState(false);
    const {modifiers, setModifiers, delayInSeconds, setDelayInSeconds} = props;


    const addOrRemoveMod = modString => { 
      let prev = modifiers;

      // Either add or remove it from list
      prev.includes(modString) ? modifiers.length >1 && setModifiers(prev.filter((e) => {return e != modString})) : setModifiers([...prev, modString])
  }

    const toggleDelayModal = () => {
      setModalOpen(true);
    }


    const delayInner = () => {
        return (
          <div style ={styles.delayInner}>
            <TimerIcon style={styles.timer} />
            {delayInSeconds}s delay
          </div>
        )
      }

    const DelayModal = () => {
      const [delayNumber, setDelayNumber] = useState(delayInSeconds);

      const handleClick = newNumber => {
        if (newNumber >= 1 &&  newNumber <= 999) {
          setDelayNumber(newNumber)
        }
      }

      const handleSetDelay = () => {
        setDelayInSeconds(delayNumber)
        // setTimeLeft(delayNumber)
        setModalOpen(false);
      }
      return (
        <Modal open={modalOpen}>

          <Box style={styles.modalContainer}>
            <Box style={styles.delayText} >
              Delay (in seconds):
            </Box>
            <Box style={styles.controls}>
              <Button onClick={() => handleClick(delayNumber-1) } >
                <Box style={styles.button}>
                    <MinusButton />
                  </Box>
              </Button>

              <Box style={styles.delayCircle}>
                {delayNumber}
              </Box>
              
              <Button onClick={() => handleClick(delayNumber+1) } >
                <Box style={styles.button}>
                    <PlusButton />
                  </Box>
              </Button>
            </Box>

            <Box style={styles.buttons} >
              <Button style={styles.cancel} onClick={() => setModalOpen(false)}> Cancel</Button>
              <Button style={styles.setDelay} onClick={handleSetDelay}>Set Delay</Button>
            </Box>


          </Box>
        </Modal>
      )
    }
    const label = text => {
      return (
        <Box style={styles.chipBox}>
          {modifiers.includes(text) && <DoneIcon style={styles.tick}/>}
          <span>{text}</span>
        </Box>
      )
    }
    return (
        <div style= {styles.settingsBar}>
            <Chip onClick={toggleDelayModal} style={styles.chip} label={delayInner()} />
            <SettingsLine />
            <Chip
                onClick={() => addOrRemoveMod("Major")}
                style={styles.chip}
                label={label("Major")} 
              />
            <Chip
              onClick={() => addOrRemoveMod("Minor")}
              style={styles.chip}
              label={label("Minor")} 
              />
            

            <DelayModal />      
        </div>
    )
}

export default SettingsBar;