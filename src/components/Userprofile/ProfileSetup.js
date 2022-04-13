import React, { useEffect, useReducer, useState } from 'react'
import './profile.css'
import RightsideBar from '../rightsidebar/RightsideBar'
import Header from '../Header/Header'
import Post_d from '../../assets/images/post4.jpg'
import Person_a from '../../assets/images/person2.png'
import {MdPersonAddAlt1} from 'react-icons/md'
import {FiExternalLink} from 'react-icons/fi'
import {BsDot} from 'react-icons/bs'
import axios from 'axios'


const ProfileSetup = () => {
  const [userProfile, setUserProfile]=useState({})
  useEffect(()=>{
    const fetchUser= async()=>{
      const result =await axios.get(`http://localhost:5000/api/users/6251871b34db952c4ebf5928`);
      console.log("from user",result);
      setUserProfile(result.data);
    };
    fetchUser();
  },[userProfile])
  return (
    <>
    <Header />
    <div className='profileContainer'>
    <div className='profileCenter'> 
    <div className='profileTop'>
      <div className='profileCover'>
      <img src={Post_d} className="profileCoverImg" alt=''/>
      <img src={Person_a} className='profileUserImg' alt='' />
      </div>
      <div className='profileInfo'>
        <h4 className='profileInfoName'>{userProfile.name} </h4>
        <span className='profileInfoDesc'>{userProfile.description} </span>
        <span className='profileInfoDesc2'> <BsDot /> {userProfile.city} <BsDot /> {userProfile.hometown} <BsDot />{userProfile?.followers?.length} followers </span>
      </div>
      <div className='profilebutton'>
        <button className='addbutton'><MdPersonAddAlt1 className='profileIcon'/>Add Friend</button>
        <button className='visitbutton'><FiExternalLink className='profileVisitIcon'/>Visit Website</button>
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

export default ProfileSetup