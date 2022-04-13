import React ,{useState, useEffect, useContext}from 'react';
import './Sidebar.css';
import {HiHashtag} from 'react-icons/hi'
import {BsCalendarDateFill} from 'react-icons/bs'
import {FaUserFriends} from 'react-icons/fa';
import {IoIosArrowDown} from 'react-icons/io'
import {RiMiniProgramLine} from 'react-icons/ri'
import {SiFuturelearn} from 'react-icons/si'
import {GiSharpShuriken} from 'react-icons/gi'
 import Person_a from '../../assets/images/person2.png'
 import Post_d from '../../assets/images/post4.jpg'
 import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

 
const Sidebar = () => {
  const{user}=useContext(AuthContext)
  console.log(user)
  const PF= process.env.REACT_APP_PUBLIC_FOLDER;
  // const [userProfile, setUserProfile]=useState({})
  // useEffect(()=>{
  //   const fetchUser= async()=>{
  //     const result =await axios.get(`http://localhost:5000/api/users/6251871b34db952c4ebf5928`);
  //     console.log("from user",result);
  //     setUserProfile(result.data);
  //   };
  //   fetchUser();
  // },[])
  
  return (
    <div className='sidebarContainer'>
      <div className='sidebarWrapper'>
        <div className='sideprofile'>
      <div className="profileCard">
      <div className='profileCardCover'>
      <img src={PF+user.profilePicture} className="profileCardCoverImg" alt=''/>
      <img src={PF+user.profilePicture} className='profileCardUserImg' alt='' />
      </div>
      <div className='profileCardInfo'>
        <h4 className='profileCardInfoName'>{user.name} </h4>
        <span className='profileCardInfoDesc'>{user.description? user.description : `Hey from ${user.name}`} </span>
      </div>
         </div>
      </div>
    <div className='sidebarbottomList'>
     Recents
      <ul className='sideList'>
        <li className='sideListItem'>
          <HiHashtag  className='sideIcon'/>
          <span className='sideListItemText' >javascript</span>
        </li>
         <li className='sideListItem'>
          <BsCalendarDateFill className='sideIcon'/>
          <span className='sideListItemText' >Mobile trends conference 2022</span>
        </li>
        <li className='sideListItem'>
          <FaUserFriends className='sideIcon'/>
          <span className='sideListItemText' >Freelance Developers</span>
        </li> 
        <li className='sideListItem'>
          <IoIosArrowDown className='sideIcon'/>
          <a href='/' className='sideListItemText' >Show more</a>
        </li> 
        </ul>
    </div>
    <div className='sidebarbottomList'>
      Groups
      <ul className='sideList'>
        <li className='sideListItem'>
          <HiHashtag  className='sideIcon'/>
          <span className='sideListItemText' >javascript</span>
        </li>
         <li className='sideListItem'>
          <BsCalendarDateFill className='sideIcon'/>
          <span className='sideListItemText' >Mobile trends conference 2022</span>
        </li>
        <li className='sideListItem'>
          <FaUserFriends className='sideIcon'/>
          <span className='sideListItemText' >Freelance Developers</span>
        </li> 
        <li className='sideListItem'>
          <IoIosArrowDown className='sideIcon'/>
          <a href='/' className='sideListItemText' >Show more</a>
        </li> 
        </ul>
    </div>
    <div className='sidebarbottomList'>
      Subscription
      <ul className='sideList'>
         <li className='sideListItem'>
          <RiMiniProgramLine  className='sideIcon'/>
          <span className='sideListItemText' >Programming with Mosh</span>
        </li>
         <li className='sideListItem'>
          <SiFuturelearn className='sideIcon'/>
          <span className='sideListItemText' >E-Learning Bridge</span>
        </li>
        <li className='sideListItem'>
          <GiSharpShuriken className='sideIcon'/>
          <span className='sideListItemText' >Clever Progammer</span>
        </li> 
        <li className='sideListItem'>
          <IoIosArrowDown className='sideIcon'/>
          <a href='/' className='sideListItemText' >Show more</a>
        </li> 
        </ul>
    </div>
    </div>
    </div>
  )
}

export default Sidebar