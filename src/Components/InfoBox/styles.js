import { FormatAlignJustify } from "@mui/icons-material";

const styles = {
    iconBackground: {
        backgroundColor: '#5641E6',
        position: 'absolute',
        top: '-22.5px',
        right: '-22.5px',
        borderRadius: '200px',
        height: '92px',
        width: '92px',
        display: 'flex',
        // justifyContent: 'space-around',
        // alignItems: 'center'
    },
    icon: {
        // color: 'red'
        color: 'white',
        position: 'relative',
        left: '20px',
        top: '45px',
        fontSize: '24px'
        // margin: '10px'
    },
    modal: {
        height: '100vh',
        width: '100vw',
        backgroundColor: '#5641E6'
    },
    button: {
        fontSize: '34px',
        position: 'absolute',
        top: '20px',
        right: '20px',
        color: '#FFFFFF',     
    },
    textBox: {
        // border: '2px solid',
        color: '#FFFFFF',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    mainText: {
        height: '50px'
    },
    subText: {
        height: '50px',
    },  
    link: {
        textDecoration: 'underline',
        color: '#FFFFFF'
    }
}

export default styles;