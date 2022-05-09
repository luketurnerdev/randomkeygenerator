import {Button, Modal, Box, Chip, Typography, Menu, MenuItem} from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DoneIcon from '@mui/icons-material/Done';
import {useState} from 'react';
import { keys } from '@mui/system';

const ChangeKeyDisplay = props => {
   console.log(props);
   const [modalOpen, setModalOpen] = useState(false);

   const styles = {
    tick: {
      width: '30px',
      height: '30px'
    },
    buttonSelected: {
      textTransform: 'none',
      backgroundColor: 'green'
    },
    buttonDeselected: {
      textTransform: 'none',
      backgroundColor: 'grey'

    },
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '10px' 
    },
    buttonGroup: {
      margin: '10px',
    },
    orderBar: {
      display: 'flex',
      alignItems: 'center'
    },
    menuButton: {
      textTransform: 'none'
    },
    chip: {
      backgroundColor: '#F0EEFF',
    },
    chipInner: {
      display: 'flex',
      alignItems: 'center',
      color: '#5641E6'
    },
    menuText: {
      margin: '0 10px'
    },
      settingsBar: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          maxWidth: '90vw',
          marginTop: '20px',
      },
      chipBox: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
      },
  
      chip: {
          backgroundColor: '#F0EEFF',
          color: '#5641E6',
          fontSize: '14px',
          margin: '0 5px'
      },  
      tick: {
          margin: '0 7.5px',
          fontSize: '18px'
      },
      delayInner: {
          display: 'flex',
          fontSize: '14px',
          alignItems: 'center',
          justifyContent: 'space-around'
      },
      timer: {
          fontSize: '16px',
          marginRight: '10px'
      },
      modalContainer: {
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'column',
          width: '280px',
          maxWidth: '80vw',
          height: '182px',
          padding: '16px 8px 8px 24px',
          border: '0.1px solid',
          borderRadius: '5px',
          backgroundColor: '#FFFFFF',
          transform: 'translate(-50%, -50%)',
          position: 'absolute',
          left: '50%',
          top: '50%'
      },
      controls: {
          display: 'flex',
          alignItems: 'center',
      },
      cancel: {
          color: "#5641E6"
      },
      setDelay: {
          backgroundColor: '#5641E6',
          color: '#FFFFFF'
      },
      buttons: {
          display: 'flex',
          justifyContent: 'flex-end',
          width: '80%',
      },
      delayCircle: {
          borderRadius: '10px',
          width: '49px',
          height: '34px',
          backgroundColor: '#F0EEFF',
          color: '#5641E6',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
      },
      delayText: {
          display: 'flex',
          justifyContent: 'flex-start',
          width: '80%'
      },
      button: {
          borderRadius: '100px',
          width: '32px',
          height: '32px',
          backgroundColor: '#F0EEFF',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'     
      },     
  }
  const toggleKeyModal = () => {
    setModalOpen(true);
  }

  const KeyModal = () => {


    const handleSetDelay = () => {
      
    }
    return (
      <Modal open={modalOpen}>

      <Box style={styles.modalContainer}>
        <Box style={styles.delayText} >
          Delay (in seconds):
        </Box>
        <Box style={styles.controls}>
          <Button >
            <Box style={styles.button}>
                button
              </Box>
          </Button>

          <Box style={styles.delayCircle}>
            fuck u
          </Box>
          
          <Button >
            <Box style={styles.button}>
                butthole
              </Box>
          </Button>
        </Box>

        <Box style={styles.buttons} >
          <Button style={styles.cancel} onClick={() => setModalOpen(false)}> Cancel</Button>
          <Button style={styles.setDelay} onClick={handleSetDelay}>Set Delay</Button>
        </Box>


      </Box>
    </Modal>
    )
  }



   const {keySelected} = props;
   return(
    <div style={styles.container}>
    <div style={styles.orderBar}>
        <Typography variant="body1" >
          Order:
        </Typography>
      
        <div style={styles.chipContainer}>          
          <Chip onClick={toggleKeyModal} style={styles.chip} size="small" label={keySelected} />        
        </div>

        <KeyModal />

      </div>
    </div>
   )
  }

export default ChangeKeyDisplay;