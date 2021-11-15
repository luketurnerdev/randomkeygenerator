import {Button, ButtonGroup, Chip, Typography, Menu, MenuItem} from '@mui/material'
import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DoneIcon from '@mui/icons-material/Done';
import {useState} from 'react';

const ChangeOrderDisplay = props => {
    const {keyOrder, setKeyOrder} = props;

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const menuOpen = Boolean(anchorEl);

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
        border: '2px solid red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

      },
      buttonGroup: {
        margin: '10px',
      },
      orderBar: {
        display: 'flex',
        border: '2px solid',
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
      menuItem: {
        // color: 'red'
      }
    }

    const setColor = orderString => {
      //TODO
      // is the arg in the modifier list?
      return keyOrder === orderString ? styles.buttonSelected : styles.buttonDeselected

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
          
          <Chip style={styles.chip} size="small" label={order()}>
          
            </Chip>
          
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
            onClick={() => setKeyOrder("randomKey")}
          >
             {keyOrder === "randomKey" && <DoneIcon />}
                Random
          </MenuItem>

          <MenuItem style={styles.menuItem} 
            onClick={() => setKeyOrder("sequential")}
          >
             {keyOrder === "sequential" && <DoneIcon />}
                Sequential
          </MenuItem>

          <MenuItem style={styles.menuItem} 
            onClick={() => setKeyOrder("fifths")}
          >
             {keyOrder === "fifths" && <DoneIcon />}
                Fifths
          </MenuItem>
        </Menu>
        
      </div>


      {/* <h5 style={styles.title}>Order</h5>
          <ButtonGroup style={styles.buttonGroup} size ="small" variant="contained" aria-label="outlined primary button group">
              <Button style={setColor("randomKey")} onClick={() => setKeyOrder("randomKey")}>Random</Button>
              <Button style={setColor("sequential")} onClick={() => setKeyOrder("sequential")}>Sequential</Button>
              <Button style={setColor("fifths")} onClick={() => setKeyOrder("fifths")}>Fifths</Button>
          </ButtonGroup> */}
    </div>
    )
  }

export default ChangeOrderDisplay;