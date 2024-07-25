import React from 'react';
import './Footer.css';


function Footer() {
  return (

    <footer className="footer" >
      {/* <div style={styles.footer_in}> */}
      <div className='footer_in'>
        {/* End Of Page */}
      </div>
    </footer>
  );
}

const styles ={
  footer_in : {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}


export default Footer;
