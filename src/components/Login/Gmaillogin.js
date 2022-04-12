import React from 'react'
import './login.css';
import Ttn_logo from '../../assets/images/Ttn_logo.png';
import { signInWithGoogle } from '../../authentication-methods/auth-service'

const Gmaillogin = () => {
    
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
                        <button className='button' onClick={signInWithGoogle}>Sign in with Google</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gmaillogin