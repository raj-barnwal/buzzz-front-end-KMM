import React from 'react'
import './login.css';
import Ttn_logo from '../../assets/images/Ttn_logo.png';
import { GoogleAuthProvider ,signInWithPopup} from 'firebase/auth'
import {auth} from '../../firebase.config'

const Gmaillogin = () => {
    const provider = new GoogleAuthProvider();
    const signInWithGoogle = ()=>{

        signInWithPopup(auth, provider).then((result)=>{
            const name = result.user.displayName;
            const email = result.user.email;
            const profilePic= result.user.photoURL;
            console.log(result.user.providerData);
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            localStorage.setItem('profilePic', profilePic);
        }).catch((err)=>{
            console.log(err)
        })
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
                        <button className='button' onClick={signInWithGoogle}>Sign in with Google</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gmaillogin