import React from 'react';
import './login.css';
import Gmaillogin from './Gmaillogin';
import Userlogin from './Userlogin';
import Glogin from './Glogin';

const Login = () => {
  return (
    <div className='container Login-layout'>
      <Gmaillogin />
      <Userlogin />
     </div>
  )
}

export default Login