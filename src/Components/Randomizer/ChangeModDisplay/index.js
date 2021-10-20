const ChangeModDisplay = props => {
    const {modifiers, setModifiers} = props;
    const addOrRemoveMod = modString => {
      let prev = modifiers;
      prev.includes(modString) ? setModifiers(prev.filter((e) => {return e != modString})) : setModifiers([...prev, modString])
    }


    return (
      <div>
       <h1>Modifiers: {modifiers}</h1>

      <button onClick={() => addOrRemoveMod("Major")}>
       Major
     </button>

    <button onClick={() => addOrRemoveMod("Minor")}>
       Minor
    </button>


     </div>
    )
  }

  export default ChangeModDisplay;