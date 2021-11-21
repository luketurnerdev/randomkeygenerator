const styles = {
    settingsBar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        maxWidth: '90vw',
        marginTop: '20px',
    },
    chipSelected: {
        backgroundColor: '#5641E6',
        color: '#F0EEFF',
        fontSize: '14px',
        margin: '0 7.5px'
    },  
    chipDeselected: {
        backgroundColor: '#F0EEFF',
        color: '#5641E6',
        fontSize: '14px',
        margin: '0 7.5px'
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

export default styles;