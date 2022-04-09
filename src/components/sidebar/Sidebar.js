import React from 'react';
// import { BrowserRouter as Link } from 'react-router-dom';
import './Sidebar.css';
import {HiHashtag} from 'react-icons/hi'
import {BsCalendarDateFill} from 'react-icons/bs'
import {FaUserFriends} from 'react-icons/fa';
import {IoIosArrowDown} from 'react-icons/io'
import {RiMiniProgramLine} from 'react-icons/ri'
import {SiFuturelearn} from 'react-icons/si'
import {GiSharpShuriken} from 'react-icons/gi'
 import Person_a from '../../assets/images/person2.png'
 
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sideWrapper'>
        <div className='sideprofile'>
      {/* <div class="card">
           <img src={Person_a} class="cardimg" alt="..." />
           <div class="card-body">
             <h5 class="card-title ">Emma </h5>
             <p>Software Developer at TTn</p>
             <div class="card-text">
               <span className='profile_bottom'>236 Portal Visitor</span> 
               <span className='profile_bottom'>10 Post</span></div>
             </div>
         </div> */}
      </div>
    
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
    <div className='sideWrapper'>
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
    <div className='sideWrapper'>
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
  )
}

export default Sidebar