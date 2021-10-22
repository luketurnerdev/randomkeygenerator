import {useState} from 'react';
import {TextField, Button} from '@mui/material';

const DelayDisplay = props => {
  const [color, setColor] = useState("grey");
  const {delayInSeconds, setDelayInSeconds} = props;
  const [delay,setDelay] = useState(delayInSeconds);
  var reg = /^\d+$/;
    const styles = {
      delayDisplay: {
          border: '2px solid black',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          padding: '10px'
        },
        button: {
          height: '50%',
          backgroundColor: color,
        }
    }

    const changeDelay = () => {
      if (delay && delay >= 1) {
        setColor("grey");
        setDelayInSeconds(delay)
      }
    }

    const typeInField = e => {
      setColor("green");
      if (reg.test(e.target.value) || e.target.value === "") 
      {
        setDelay(e.target.value)
      }
    }

    return (
      <div style={styles.delayDisplay}>
          {//todo - DO NOT ALLOW HYPHENS ETC} - regex 
        }
        <TextField 
          value={delay}
          size="small"
          variant="outlined"
          label={`Delay (${delayInSeconds} seconds)`}
          style={styles.textField} 
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
          // type="number"value={delay} 
          onChange={e => typeInField(e)} 
        />
        <Button 
          variant="contained"
          style={styles.button} 
          onClick={changeDelay}
          >Set</Button>

        
      </div>
    )

  }

  export default DelayDisplay;