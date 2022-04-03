import React from 'react'
import './login.css';
// const logo =require('./src/assets/images/Ttn_logo.png');

// import logo from '../assets/images/Ttn_logo.png';

const Gmaillogin = () => {
  return (
    <div className='container Login-layout'>
        <div className='section-login'>
            <div className='left-login-head'>
                <div className='logo'>
                <img  src='./assets/images/Ttn_logo.png' alt='logo'/>
            </div>
            <h1 className='login-head'>Enter you details and Start your journey with us</h1>
            <p className='login-down'>Don't stop until you're proud </p>
             <div >
                <button className='button'>Sign in with Google</button>
             </div>
            </div>
        </div>
    </div>
  )
}

export default Gmaillogin