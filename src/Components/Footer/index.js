const Footer = () => {
    const styles = {
        footer: {
          border: '2px solid',
          textAlign: 'center',
        },
        link: {
            padding: '2px'
        }
      }
    return(
        <div style={styles.footer}>
            <h5>Created by Luke D Turner</h5>
            <h5>
                <a style={styles.link} target="_blank" href="http://lukedturner.com">My website</a>
                <a style={styles.link} href="mailto:luke@lukedturner.com">Email me</a>
            </h5>
        </div>
    )
}

export default Footer;