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
        <form  >
            
            <h1>Login To Your Account </h1>
            <div className='ui divider'></div>
            <div className='ui form'>
                <div className='field'>
                    <input type="text" name="username" placeholder='TTN Username' onChange={handleInput}/>
                </div>
                <div className='field'>
                    <input type="password" name="password" placeholder='Password' />
                </div>
                 <div className='checkbox'>
                    <input type='checkbox' name='checkbox' placeholder='Remember Me' />
                    <label>Remember Me</label>
                </div>
                <div>
                <button className='fluid ui button purple'>Sign In</button>
                </div>
               
            </div>
        </form>
        </div>
    </div>
  )
}

export default Userlogin