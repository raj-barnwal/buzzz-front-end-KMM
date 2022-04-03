import React from 'react'
import './login.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';


const Userlogin = () => {
// const {signin , handleSignin, errors} = useForm();
const handleInput =(e) =>{
    console.log(e.target.value);
}
// const [userInfo , setUserInfo] =useState();

  return (
    <div className='container Login-layout'>
        <div className='section-login'>
            <div className='login-container'>
        <form  >
        <h1>Login To Your Account </h1>
            <div className='ui divider'></div>
            <div className='ui form'>
                <div className='field'>
                    <input type="text" name="username" placeholder='TTN Username' onChange={handleInput}/>
                </div>
                <div className='field'>
                    <input type="password" name="password" placeholder='Password' onChange={handleInput} />
                </div>                
                 <div className='checkbox'>
                    <input type='checkbox' name='checkbox' placeholder='Remember Me' />
                    <span className='login-foot-remember'>Remember Me</span>
                    <span className='login-foot'>Forget Password?</span>
                </div>
                <div className='button-foot'>
                <button type='submit' className='button-foot-right'>Sign In</button>
                </div>               
            </div>
        </form>
        </div>
        </div>
    </div>
  )
}

export default Userlogin