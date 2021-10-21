import {Button, ButtonGroup} from '@mui/material'

const ChangeOrderDisplay = props => {
    const {keyOrder, setKeyOrder} = props;

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

    }

    const setColor = orderString => {
      //TODO
      // is the arg in the modifier list?
      return keyOrder === orderString ? styles.buttonSelected : styles.buttonDeselected

    }
    return (
    <div style={styles.container}>
      <h5 style={styles.title}>Order</h5>
          <ButtonGroup style={styles.buttonGroup} size ="small" variant="contained" aria-label="outlined primary button group">
              <Button style={setColor("randomKey")} onClick={() => setKeyOrder("randomKey")}>Random</Button>
              <Button style={setColor("sequential")} onClick={() => setKeyOrder("sequential")}>Sequential</Button>
              <Button style={setColor("fifths")} onClick={() => setKeyOrder("fifths")}>Fifths</Button>
          </ButtonGroup>
    </div>
    )
  }

export default ChangeOrderDisplay;