import {Button, Grid, GridItem, Chip, Typography, Menu, MenuItem} from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DoneIcon from '@mui/icons-material/Done';
import {useState} from 'react';

const ChangeOrderDisplay = props => {
    const [anchorEl, setAnchorEl] = useState(null);
    const menuOpen = Boolean(anchorEl);

    const {keyOrder, setKeyOrder} = props;

    const handleMenuClick = orderString => {
      handleClose();
      setKeyOrder(orderString);
    }

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };


    const styles = {
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
        alignItems: 'center'

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
        backgroundColor: '#F0EEFF'
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
            {keyOrder}
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
            Order:
          </Typography>

        <Button
          style={styles.menuButton}
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={menuOpen ? 'true' : undefined}
          onClick={handleClick}
        >
          <MyChip />
        </Button>

        <Menu
          id="basic-menu"
          style={styles.menu}
          anchorEl={anchorEl}
          open={menuOpen}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
      >
          <MenuItem style={styles.menuItem} 
            onClick={() => handleMenuClick("Random")}
          >
           {keyOrder === "Random" && <DoneIcon />}
           <div style={styles.menuText}>
                Random
          </div>
                
          </MenuItem>

          <MenuItem style={styles.menuItem} 
            onClick={() => handleMenuClick("Sequential")}
          >
                  {keyOrder === "Sequential" && <DoneIcon />}
                  <div style={styles.menuText}>
                    Sequential
                  </div>
            
          </MenuItem>

          <MenuItem style={styles.menuItem} 
            onClick={() => handleMenuClick("Fifths")}
          >
             {keyOrder === "Fifths" && <DoneIcon />}
             <div style={styles.menuText}>
                Fifths
          </div>
          </MenuItem>
        </Menu>
        
      </div>

    </div>
    )
  }

export default ChangeOrderDisplay;