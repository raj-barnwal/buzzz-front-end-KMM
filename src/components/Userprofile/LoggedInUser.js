import React, { useContext, useEffect, useReducer, useState } from 'react'
import './profile.css'
import RightsideBar from '../rightsidebar/RightsideBar'
import Story from '../stories/Story'
import Sidebar from '../sidebar/Sidebar'
import Header from '../Header/Header'
import Post_d from '../../assets/images/post4.jpg'
import Person_a from '../../assets/images/person2.png'
import {MdPersonAddAlt1} from 'react-icons/md'
import {FiExternalLink} from 'react-icons/fi'
import {BsDot} from 'react-icons/bs'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'
import { Link } from 'react-router-dom'


const LoggedInUser = () => {
    
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;   
 const {user}=useContext(AuthContext)
  return (
    <>
    <Header />
    <div className='profileContainer'>
    <div className='profileCenter'> 
    <div className='profileTop'>
      <div className='profileCover'>
      <img src={PF+user.profilePicture} className="profileCoverImg" alt=''/>
      <img src={PF+user.profilePicture} className='profileUserImg' alt='' />
      </div>
      <div className='profileInfo'>
        <h4 className='profileInfoName'>{user.name} </h4>
        <span className='profileInfoDesc'>{user.description} </span>
        <span className='profileInfoDesc2'>  {user.city} <BsDot /> {user.hometown} <BsDot />{user?.followers?.length} followers </span>
      </div>
      <div className='profilebutton'>
        <button className='addbutton'><Link to={"/profile/update"}>Update Your Profile</Link></button>
        
      </div>
    </div>
    </div> 
    <div className='profileRight'>
      <RightsideBar />
    </div>
    
    </div>  
    </>
  )
}

export default LoggedInUser