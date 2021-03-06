const styles = {
  mainContainer: {
    // border: '1px solid black',
      display: 'flex',
      margin: 0,
      padding: 0,
      flexDirection: 'column',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      justifyContent: 'center',
    },
    infoBox: {
      display: 'flex'
    },

    component: {
      // margin: '2px 5%',
    },
    currentKey: {
      // border: '2px solid black',
      backgroundColor: '#0A8BA1',
    },
    gridItemText: {
      color: 'white',
      fontSize: '14px',
      margin: '2.5px',
    },

    keyContainer: {
      border: '1px solid black',
      height: '50vh',
      margin: '0 5px'
    },
    key: {
      color: 'white',
      fontSize: '30px',
    },
    nextKey: {
      backgroundColor: '#80DF81',
      width: '100%',
      display: 'flex',
      maxHeight: '80px',
      alignItems: 'center',
      justifyContent: 'space-evenly'
    },
    clockSection: {
      // height: '10vh',
      display: 'flex',
      justifyContent: 'center',
      // flexDirection: 'column',
      alignItems: 'center'
    },
    timerBox: {
      border: '2px solid black',
      alignItems: 'center',
    },

  }

  export default styles;