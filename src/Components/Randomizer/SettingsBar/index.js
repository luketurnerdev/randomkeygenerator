import {Chip} from "@mui/material"
import TimerIcon from '@mui/icons-material/Timer';
import SettingsLine from "../../SettingsLine";
import styles from "./styles";

const SettingsBar = props => {
    const {delayInSeconds} = props;

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
            <Chip style={styles.chip} label={delayInner()} />
            <SettingsLine />
            <Chip style={styles.chip} label={"Major"} />
            <Chip style={styles.chip} label={"Minor"} />
        </div>
    )
}

export default SettingsBar;