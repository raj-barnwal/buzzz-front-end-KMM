import React from 'react'
import Ttnlogo from '../../assets/images/Ttn_logo(1).png'
import {BsMessenger ,BsThreeDotsVertical} from 'react-icons/bs'
import {HiUserAdd} from 'react-icons/hi'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='navigation-bar'>
        <div className='logo'>
          <Link to='/'>
            
             <img className='header_logo' src={Ttnlogo} alt='logo'/>
          </Link>
        </div>
        <div className='user-details'>
            <div className='profile-pic'>
                 <img className='profile-picImg' src={localStorage.getItem('profilePic')}/>
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
              <div class="dropdown">
  <button><BsThreeDotsVertical /></button>
  <div class="dropdown-content">
  <a href="/Userprofile/ProfileUpdate.js">Edit Profile</a>
  <a href="/">Settings </a>
  <a href="/Login/Userlogin.js">LogOut</a>
  </div>
</div>
            </div>
        </div>
     
    </div>
  )
}

export default Header
