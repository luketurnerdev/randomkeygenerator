import {useState} from 'react';
import {TextField, Button} from '@mui/material';

const DelayDisplay = props => {
    const styles = {
        delayDisplay: {
            border: '2px solid black',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          },
          seconds: {
            width: '75%',
            height: '30%',
            padding: '0 10px',
          },
    }
    const {delayInSeconds, setDelayInSeconds} = props;
    const [delay,setDelay] = useState(delayInSeconds);
    const changeDelay = () => {
      if (delay && delay >= 1) {
        setDelayInSeconds(delay)
      }
    }

    return (
      <div style={styles.delayDisplay}>
        <h5> Change Delay </h5>
          {//todo - DO NOT ALLOW HYPHENS ETC} - regex 
        }
        <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} type="number"value={delay} onChange={e => setDelay(e.target.value)} style={styles.seconds} /> seconds
        <Button onClick={changeDelay}> Set </Button>
      </div>
    )

  }

  export default DelayDisplay;