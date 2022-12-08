import React from 'react'

const styles = {
    headerStyle: {
        background: "#3E92CC",
        height: '1000px',
        fontColor: ''
    },
    h1Styles : {
        background: "#3E92CC",
        fontSize: '40px',
        fontFamily: 'Kanit',
        paddingTop: '25px',
        paddingLeft: '200px',
    },
    h2Styles : {
        fontSize:'100px',
        fontFamily: 'Kanit',
        alignItems: 'center',
        background: "#3E92CC",
        paddingLeft: '250px',
    
    },
    h3Styles : {
        background: "#3E92CC",
        fontSize: '50px',
        fontFamily: 'Kanit',
        paddingLeft: '350px',
    },
    introStyles : {
        paddingTop: '100px',
        paddingLeft: '300px',
        fontSize: '20px',
        fontFamily: 'Kanit',

    }
}
function Header() {
    return (
      <header style={styles.headerStyle} className="header">
        <h1 style={styles.h1Styles}>Hello my name is ....</h1>
        <h2 style={styles.h2Styles}>Nick Mason</h2>
        <h3 style={styles.h3Styles}>Full-Stack Developer</h3>
        <div style={styles.introStyles}>
            <p>I am a full-stack developer looking to break into the Industry. </p>
            <p>Love to design and tinker to get things to work just right! </p>
                <p>Currently focused on finding a company where I can let my talents show.</p>
            <p>Lets get to Work!</p>
       </div> 
      </header>
    );
  }
  
  export default Header;