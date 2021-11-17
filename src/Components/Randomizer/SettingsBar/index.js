import {Chip} from "@mui/material"
import TimerIcon from '@mui/icons-material/Timer';
import SettingsLine from "../../SettingsLine";
import styles from "./styles";
import {useState} from 'react';

const SettingsBar = props => {
    const [modalOpen, setModalOpen] = useState(false);
    const {modifiers, setModifiers, delayInSeconds} = props;


    const addOrRemoveMod = modString => { 
      let prev = modifiers;

      // Either add or remove it from list
      prev.includes(modString) ? modifiers.length >1 && setModifiers(prev.filter((e) => {return e != modString})) : setModifiers([...prev, modString])
  }

  const setColor = modString => {
    // is the arg in the modifier list?
    return modifiers.includes(modString) ? styles.chipSelected : styles.chipDeselected;

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
    return (
        <div style= {styles.settingsBar}>
            <Chip onClick={toggleDelayModal} style={styles.chipDeselected} label={delayInner()} />
            <SettingsLine />
            <Chip
              onClick={() => addOrRemoveMod("Major")}
              style={setColor("Major")}
              label={"Major"} 
            />
            <Chip
              onClick={() => addOrRemoveMod("Minor")}
              style={setColor("Minor")}
              label={"Minor"} 
            />

            {modalOpen && <h5>modalOpenbro</h5>}
        </div>
    )
}

export default SettingsBar;