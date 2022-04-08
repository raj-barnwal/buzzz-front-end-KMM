import React from 'react'
import Ttnlogo from '../../assets/images/Ttn_logo(1).png'
import {BsMessenger ,BsThreeDotsVertical} from 'react-icons/bs'
import {HiUserAdd} from 'react-icons/hi'
import './Header.css'

const Header = () => {
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
                  <span className='nav-iconbadge'> 2</span>
            </div>
            <div className='nav-icon'>
              <BsThreeDotsVertical />
            </div>
        </div>
     
    </div>
  )
}

export default Header
