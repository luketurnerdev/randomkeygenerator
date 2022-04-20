import { useState } from 'react';
import {Modal, Box} from "@mui/material"
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';import styles from './styles';
const InfoBox = () => {

    const [open, setOpen] = useState(false);

    return (
    <>
        <div onClick={() => setOpen(!open)} style={styles.iconBackground}>
            <InfoOutlinedIcon style={styles.icon} />
        </div>

        <Modal style={styles.modal} open={open}>
            <Box>
                <ClearOutlinedIcon style={styles.button} onClick={() => setOpen(false)} />
                <Box style={styles.textBox}>
                    <Box style={styles.mainText}>
                        <h2>harmonise.me</h2>
                    </Box>
                    <Box style={styles.subText}>
                        <h5>Developed by Luke Turner: <a target="_blank" style={styles.link} href="http://www.lukedturner.com">lukedturner.com</a></h5>
                        <h5 style={styles.text}> <a style={styles.link} href="mailto:luke@lukedturner.com">luke@lukedturner.com</a></h5>
                    </Box>
                </Box>
            </Box>
            
        </Modal>

    </>
    )
}

export default InfoBox;