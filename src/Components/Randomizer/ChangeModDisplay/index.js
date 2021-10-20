import {Button, ButtonGroup} from '@mui/material'
const ChangeModDisplay = props => {
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
        flexDirection: 'column',
        alignItems: 'center'
      },
    }
    const {modifiers, setModifiers} = props;

    const addOrRemoveMod = modString => { 
        let prev = modifiers;

        // Either add or remove it from list
        prev.includes(modString) ? modifiers.length >1 && setModifiers(prev.filter((e) => {return e != modString})) : setModifiers([...prev, modString])
    }

    const setColor = modString => {
      //TODO
      // is the arg in the modifier list?
      return modifiers.includes(modString) ? styles.buttonSelected : styles.buttonDeselected

    }


    return (
      
      <div style={styles.container}>
        <h5>Chord Types (select at least 1)</h5>
        <ButtonGroup size ="small" variant="contained" aria-label="outlined primary button group">
          <Button style={setColor("Major")} onClick={() => addOrRemoveMod("Major")}>Major</Button>
          <Button style={setColor("Minor")} onClick={() => addOrRemoveMod("Minor")}>Minor</Button>
        </ButtonGroup>


     </div>
    )
  }

  export default ChangeModDisplay;