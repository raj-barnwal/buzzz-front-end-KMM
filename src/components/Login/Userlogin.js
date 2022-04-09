import React from 'react'
import './login.css';

const Userlogin = () => {
const handleInput =(e) =>{
    console.log(e.target.value);
}
const handleLogin =() => {
    
}
  return (
    <div className='container Login-layout'>
        <div className='section-login'>
            <div className='right-login'>
        <form  >            
            <h1>Login To Your Account </h1>
            <div className='ui divider'></div>
            <div className='ui form'>
                <div className='field'>
                    <input type="email" name="email" placeholder='TTN Username' onChange={handleInput}/>
                </div>
                <div className='field'>
                    <input type="password" name="password" placeholder='Password' />
                </div>
                 <div className='checkbox'>
                    <input type='checkbox' name='checkbox' placeholder='Remember Me' />
                    <span className='login-foot-rm'>Remember Me</span>
                    <span className='login-foot-fp'>Forget Password ? </span>
                </div>
                <div className='signin-btn'>
                <button type='submit' className=' btn' onClick={handleLogin}>Sign In</button>
                </div>
               
            </div>
        </form>
        </div>
    </div>
    </div>
  )
}

export default Userlogin