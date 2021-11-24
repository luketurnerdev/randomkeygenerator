import {Slider, Stack} from "@mui/material"
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import VolumeDownOutlinedIcon from '@mui/icons-material/VolumeDownOutlined';
import styles from "./styles"
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {setVolume} from "../../../utils/playSounds"

  const CustomSlider = withStyles(theme => ({
    disabled: {
      color: theme.palette.primary.main
    },
    thumb: {
      color: "#5641E6",
    },
    rail: {
        color: '#CFC8FF',
    }
  }))(Slider);

  const handleSetVolume = e => {
    console.log(e.target.value);
    setVolume(e.target.value);
  }

  

const VolumeSection = () => {
    return (
        <div>
            <Stack style={styles.container} spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                <VolumeDownOutlinedIcon style={styles.icon}/>
                    <CustomSlider defaultValue={50} style={{width: '248px'}} onChange={e => handleSetVolume(e)} />
                <VolumeUpOutlinedIcon style={styles.icon}/>
            </Stack>
        </div>
    )
}

export default VolumeSection;