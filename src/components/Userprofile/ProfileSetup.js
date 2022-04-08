import React from 'react'
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


const ProfileSetup = () => {
  return (
    <>
    <Header />
    <div className='profileContainer'>
      {/* <Sidebar /> */}
    <div className='profileCenter'> 
    <div className='profileTop'>
      <div className='profileCover'>
      <img src={Post_d} className="profileCoverImg" alt=''/>
      <img src={Person_a} className='profileUserImg' alt='' />
      </div>
      <div className='profileInfo'>
        <h4 className='profileInfoName'>Sarah Wood </h4>
        <span className='profileInfoDesc'>Sarah Wood is Co-founder of Video and tech company </span>
        <span className='profileInfoDesc2'> London<BsDot /> England <BsDot /> United Kingdom <BsDot />234 friends </span>
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