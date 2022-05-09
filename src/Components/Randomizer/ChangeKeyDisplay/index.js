import {Button, Grid, GridItem, Chip, Typography, Menu, MenuItem} from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DoneIcon from '@mui/icons-material/Done';
import {useState} from 'react';

const ChangeKeyDisplay = props => {
    const [anchorEl, setAnchorEl] = useState(null);
    const menuOpen = Boolean(anchorEl);

    const {key, setKey} = props;

    const handleMenuClick = orderString => {
      handleClose();
      setKey(orderString);
    }

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };


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
        // minWidth: '100px'
      },
      chipInner: {
        display: 'flex',
        alignItems: 'center',
        color: '#5641E6'
      },
      menuText: {
        margin: '0 10px'
      }
    }

    const MyChip = () => {
      const order = () => {
        return (
          <div style ={styles.chipInner}>
            {key}
            <KeyboardArrowDownIcon />
          </div>
        )
      }
      return (
        <div style={styles.chipContainer}>          
          <Chip style={styles.chip} size="small" label={order()} />        
        </div>
      )
    }
    return (
    <div style={styles.container}>
      <div style={styles.orderBar}>
          <Typography variant="body1" >
            Key:
          </Typography>

        {/* <Button
          style={styles.menuButton}
          id="basic-button"
          aria-haspopup="true"
        >
          {key}
        </Button> */}

        <Chip style={styles.chip} size="small" label="C" /> 
        
      </div>

    </div>
    )
  }

export default ChangeKeyDisplay;