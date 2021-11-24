import {Button} from "@mui/material";
import styles from "./styles"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import {pauseSynth, resumeSynth} from "../../utils/playSounds"
import { useState } from "react";

const PlayButton = props => {
    const {paused, setPaused} = props;
    // const [currentChord, setCurrentChord] = useState("");
    const handleClick = () => {
        setPaused(!paused)
        if (!paused) {
            pauseSynth();
        }

        else {
            // ?
            resumeSynth();
        }
    }

    return (
        <Button style={styles.button} onClick={handleClick}>
            {paused ? <PlayArrowIcon style={styles.icon} /> : <PauseIcon style={styles.icon} />}
            <h5 style={styles.text}>{paused ? "Play" : "Pause"} </h5>
        </Button>
    ) 
}

export default PlayButton;