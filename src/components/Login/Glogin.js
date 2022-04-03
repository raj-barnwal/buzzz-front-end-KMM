import React, { useState } from 'react'
import { signInWithGoogle } from '../../authentication-methods/auth-service'
import { Link } from 'react-router-dom'

const Glogin = () => {

  return (
   


    <div>
      <button onClick={signInWithGoogle} >Sign in with  google</button>
      {/* <Link to='/user'>Sign in with Google</Link> */}
      {localStorage.getItem('name')}
      {localStorage.getItem('email')}
      <img src={localStorage.getItem('profilePic')}/>
    </div>
  )
}

export default Glogin
