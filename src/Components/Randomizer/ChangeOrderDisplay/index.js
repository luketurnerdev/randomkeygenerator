const ChangeOrderDisplay = props => {
    const {keyOrder, setKeyOrder} = props;
    return (
      <div>
      <h1>Key order: {keyOrder}</h1>
      <button 
        onClick={() => setKeyOrder("randomKey")}
      >
        {keyOrder === "randomKey" ? "RANDOM" : "Random"}
      </button>
      <button onClick={() => setKeyOrder("sequential")}
      >
        {keyOrder === "sequential" ? "SEQUENTIAL" : "sequential"}

      </button>
      <button onClick={() => setKeyOrder("fifths")}
      >
        {keyOrder === "fifths" ? "FIFTHS" : "fifths"}
      </button>
      </div>
    )
  }

export default ChangeOrderDisplay;