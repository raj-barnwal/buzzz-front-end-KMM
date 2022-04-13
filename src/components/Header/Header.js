import React, { useContext } from 'react'
import Ttnlogo from '../../assets/images/Ttn_logo(1).png'
import {BsMessenger ,BsThreeDotsVertical} from 'react-icons/bs'
import {HiUserAdd} from 'react-icons/hi'
import './Header.css'
import { Link,useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const Header = () => {
  const {user}=useContext(AuthContext);
  const PF= process.env.REACT_APP_PUBLIC_FOLDER;
  const navigate =useNavigate();
    const logOut =() =>{
      localStorage.clear();
      navigate.push('/login');
    }
  return (
    <div className='navigation-bar'>
        <div className='logo'>
          <Link to='/'> <img className='header_logo' src={Ttnlogo} alt='logo'/></Link>
        </div>
      <div className='user-details'>
          <div className='profile-pic'>
            <Link to={"/profile/loggedin"}> <img className='profile-picImg' src={PF + user.profilePicture}/></Link>
            
             {user.name}
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
            <span className='nav-icon-dot'><BsThreeDotsVertical /></span>
              <div class="dropdown-content">
                <Link to="/profile/update">Edit Profile</Link>
                <Link to="/">Settings </Link>
                <Link to="/login" onClick={logOut}>LogOut</Link>
              </div>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default Header
