import React,{useRef} from 'react';
import './login.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Register = () => {

    const username =useRef();
    const email =useRef();
    const password =useRef();
    const rePassword= useRef();
   
  
    const handleSignin = async (e) => {
        e.preventDefault();
        if (rePassword.current.value !== password.current.value) {
            rePassword.current.setCustomValidity("Passwords don't match!");
          } else {
            const user = {
              username: username.current.value,
              email: email.current.value,
              password: password.current.value,
            };
            try {
              const res = await axios.post("http://localhost:5000/auth/register", {...user});
              console.log(res.data)
              window.location.pathname("/login")
            } catch (err) {
              console.log(err);
            }
          }
      };

  return (
    <div className='container Login-layout'>
        <div className='section-login'>
            <div className='right-login'>
            <form  onSubmit={handleSignin}>            
            <h1>Register for BUZZZ </h1>
            <div className='ui divider'></div>
            <div className='ui form'>
          
                
                <div className='field'>
                    <input type="text" name="name" placeholder='TTN username' required ref={username}/>
                </div>
                <div className='field'>
                    <input type="email" name="email" placeholder='TTN ID' required ref={email}/>
                </div>
                    
               
                <div className='field'>
                    <input type="password" name="password" 
                    placeholder='Password'  minLength="8"
                    required ref={password}/>
                </div>
                <div className='field'>
                    <input type="password" name="password" 
                    placeholder='Password'  minLength="8"
                    required ref={password}/>
                </div>
               
               
                 
                <div className='signin-btn'>
                
                 <button className="btn" type="submit" onClick={handleSignin}>
                    Sign Up
                 </button>
               
                </div>
                <div className='signin-btn'>
                <button className="btn"><Link to="/login"></Link>Log into Account</button>
               
                </div>
               
            </div>
        </form>
        </div>
    </div>
    </div>
  )
}

export default Register