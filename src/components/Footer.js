import React from 'react'

const styles = {
    footerStyle: {
      background: "#3E92CC",
      height: '100px',
      paddingTop: '50px',
      paddingLeft: '600px',
      fontFamily: 'Kanit',
      fontSize:'19px',
    },
  };
  
  function Footer() {
    return (
      <footer style={styles.footerStyle} className="header">
        <p>Created by Nick Mason</p> 
      </footer>
    );
  }

  export default Footer