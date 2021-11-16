import {Slider, Stack} from "@mui/material"
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import VolumeDownOutlinedIcon from '@mui/icons-material/VolumeDownOutlined';
import styles from "./styles"
import { withStyles, makeStyles } from "@material-ui/core/styles";

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

  

const VolumeSection = () => {
    return (
        <div>
            <Stack style={styles.container} spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                <VolumeDownOutlinedIcon style={styles.icon}/>
                    <CustomSlider style={{width: '248px'}}  />
                <VolumeUpOutlinedIcon style={styles.icon}/>
            </Stack>
        </div>
    )
}

export default VolumeSection;