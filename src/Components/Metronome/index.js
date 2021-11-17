import { useEffect, useState } from "react";
const Metronome = () => {
    const [bpm, setBpm] = useState(120);
    const [isPlaying, setIsPlaying] = useState(false);
    const [intervalFunction, setIntervalFunction] = useState(null);

    let click = new Audio("https://freesound.org/data/previews/54/54406_497386-lq.mp3");
    click.volume = 0.5;

    
    const playClick = () => {
        click.play();
    }

    const handleBpmChange = e => {
        const bpm = e.target.value;
        setIsPlaying(false);
        setBpm(bpm)
    }
    useEffect(() => {
        if (isPlaying) {
            setIntervalFunction(setInterval(playClick, (60 / bpm) * 1000));
        }

        else {
            clearInterval(intervalFunction);
            setIntervalFunction(null)
        };
    }, [isPlaying])

    const restartClick = () => {
        if (!isPlaying) {
            setIsPlaying(true);
        }
    }

    return (
        <div>
            <h5>Metronome</h5>
            <button onClick={() => {setIsPlaying(!isPlaying)}}>{isPlaying ? "Pause" : "Play"}</button>
            <br />
            <br />
            <input 
                type="range" 
                min="40" 
                max="250" 
                value={bpm}
                onChange={handleBpmChange}
                onMouseUp={restartClick}
                />
                <br />
                <br />
                <br />
                {bpm} BPM
        </div>
    )

}


export default Metronome;