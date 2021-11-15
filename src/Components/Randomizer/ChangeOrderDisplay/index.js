import {Button, ButtonGroup, Chip, Typography, Menu, MenuItem} from '@mui/material'
import { makeStyles } from '@material-ui/core/styles';
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
      }

    }

    const setColor = orderString => {
      //TODO
      // is the arg in the modifier list?
      return keyOrder === orderString ? styles.buttonSelected : styles.buttonDeselected

    }

    const MyChip = () => {
      return (
        <Chip size="small" label={keyOrder}/>
      )
    }
    return (
    <div style={styles.container}>
      <div style={styles.orderBar}>
        <div style={styles.orderTitle}>
          <Typography variant="h1">
            hi
          </Typography>
        </div>



      <Button
        // color={theme}
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
          anchorEl={anchorEl}
          open={menuOpen}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
      >
          <MenuItem >Profile</MenuItem>
          <MenuItem >My account</MenuItem>
          <MenuItem >Logout</MenuItem>
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