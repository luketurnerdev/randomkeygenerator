import logo from "../../img/logo.png"


const HarmoniseLogo = () => {

    const styles = {
        box: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '100px'
        },
        logo: {
            maxWidth: '95px',
            maxHeight: '95px',
            margin: 0,
        },
        text: {
            color: '#5641E6',
            textAlign: 'center',
            margin: '0',
            position: 'relative',
            bottom: '15px'
        }
    }
     return (
        <div style={styles.box}>
             <img style={styles.logo} src={logo} alt="harmonise.me logo" />
             <h5 style={styles.text}>harmonise.me</h5>
        </div>
     )
}

export default HarmoniseLogo;

