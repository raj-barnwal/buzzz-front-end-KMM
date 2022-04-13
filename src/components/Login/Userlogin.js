import React,{useRef, useContext} from 'react'
import './login.css';
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';

const Userlogin = () => {

    const email =useRef();
    const password =useRef();
    const {user, isFetching, error, dispatch} = useContext(AuthContext);
    const handleSignin = (e) => {
        e.preventDefault();
        console.log(email.current.value)
        loginCall(
          { email: email.current.value, password: password.current.value },
          dispatch
        );
      };


  return (
    <div className='container Login-layout'>
        <div className='section-login'>
            <div className='right-login'>
            <form  onSubmit={handleSignin}>            
            <h1>Login To Your Account </h1>
            <div className='ui divider'></div>
            <div className='ui form'>
                <div className='field'>
                    <input type="email" name="email" placeholder='TTN Username' required ref={email}/>
                </div>
                {/* <p className='loginErrors'>{formErrors.email}</p> */}
                <div className='field'>
                    <input type="password" name="password" 
                    placeholder='Password'  minLength="8"
                    required ref={password}/>
                </div>
                {/* <p className='loginErrors'>{formErrors.password}</p> */}
                 <div className='checkbox'>
                    <input type='checkbox' name='checkbox'  />
                    <span className='login-foot-rm'>Remember Me</span>
                    <span className='login-foot-fp'>Forget Password ? </span>
                 </div>
                <div className='signin-btn'>
                <button type='submit' className=' btn'  onClick={handleSignin}>{isFetching ? "Loading" : "Sign In"}</button>
                </div>
                <div className='signin-btn'>
                <button type='submit' className=' btn'  onClick={handleSignin}>Create Account</button>
                </div>
               
            </div>
        </form>
        </div>
    </div>
    </div>
  )
}

export default Userlogin