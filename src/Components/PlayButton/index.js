import {Button} from "@mui/material";
import styles from "./styles"
import {useContext} from 'react'
import ClockContext from "../../Contexts/ClockContext";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

const PlayButton = props => {
    const {paused, setPaused} = props;
    const handleClick = () => {
        setPaused(!paused)
    }

    return (
        <Button style={styles.button} onClick={handleClick}>
            {paused ? <PlayArrowIcon style={styles.icon} /> : <PauseIcon style={styles.icon} />}
            <h5 style={styles.text}>{paused ? "Play" : "Pause"} </h5>
        </Button>
    ) 
}

export default PlayButton;