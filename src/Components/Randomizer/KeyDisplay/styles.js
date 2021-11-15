//background: #F0EEFF;

const styles = {
    circleBox: {    
        width: '256px',
        height: '256px',
    },
    progress: {
        width: '100%',
        height: '100%',
        color: '#8D7DFF',
    },
    outerProgress: {
        color: '#F0EEFF',
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: -1
    },
    innerText: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyItems: 'center',
    },
    currentKey: {
        fontSize: '60px',
        margin: '2.5px 0',
        fontWeight: 500,

    },
    currentMod: {
        fontSize: '20px',
        marginTop: '2.5px 0',
        fontWeight: 500,
    },
    upcomingKey: {
        fontSize: '16px',
        color: '#6C57FF',
        marginTop: '15px',
        fontWeight: 400,

    },
    timer: {
        color: '#6C57FF',
        fontSize: '14px',
        margin: '0 2.5px',
        fontWeight: 400,

    },
    timerContainer: {
        maxHeight: '40px',
        color: '#6C57FF',
        display: 'flex',
        alignItems: 'center',
    },
}

export default styles;