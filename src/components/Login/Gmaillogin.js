import React from 'react'
import './login.css';
import Ttn_logo from '../../assets/images/Ttn_logo.png';
import { GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {auth} from '../../firebase.config'

const Gmaillogin = () => {
  const gmailLogin=async(e)=>{
    e.preventDefault();
    window.open("http://localhost:5000/auth/google","_self")
  }
    return (
        <div className='container Login-layout'>
            <div className='section-login'>
                <div className='left-login-head'>
                    <div className='logo' >
                        <img  src={Ttn_logo} alt='logo'/>
                    </div>
                    <h1 className='login-head'>Enter you details and Start your journey with us</h1>
                    <p className='login-down'>Don't stop until you're proud </p>
                    <div >
                        <button className='button' onClick={gmailLogin}>
                            
                            Sign in with Google</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gmaillogin