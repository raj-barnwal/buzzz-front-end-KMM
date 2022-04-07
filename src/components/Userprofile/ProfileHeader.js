import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Ttnlogo from '../../assets/images/Ttn_logo(1).png'
import {BsMessenger} from 'react-icons/bs'
import {HiUserAdd} from 'react-icons/hi'
import { faComment, faContactCard } from '@fortawesome/free-solid-svg-icons'

const ProfileHeader = () => {
  return (
    <div className='navigation-bar'>
        <div className='logo'>
            <img className='header_logo' src={Ttnlogo} alt='logo'/>
        </div>
        <div className='user-details'>
            <div className='profile-pic'>
                 <img src={localStorage.getItem('profilePic')}/>
           
            {localStorage.getItem('name')}
            </div>
            <div className='nav-icon'>
                  <BsMessenger />
                  </div>
                  <div className='nav-icon'>
                  <HiUserAdd/>
            </div>
        </div>
     
    </div>
  )
}

export default ProfileHeader
