import React from 'react'
import './Rightsidebar.css'
import { Users } from '../../dummydata'
import {BiSearch} from 'react-icons/bi'
import Person from '../../assets/images/person.png'
import Person_a from '../../assets/images/person2.png'
import Person_b from '../../assets/images/person3.jpg'

const RightsideBar = ({profile}) => {
  return (
    <div className='right-side-info'>
      <div className='rightbarConatiner'>
      <div className='rightWrapper'>
        <div className='rightContact'>
          <h4 className='contacthead'>Contact
          <BiSearch className='searchicon'/></h4>
          <ul className='rightContactList'>
            {Users.map((item)=>(
               <li key={item.id} className='rightContactListItems'>
               <div className='rightProfileContainer'>
                 <img src={item.profilePicture} className='rightProfileimg' alt=''/>
                 <span className='rightOnline'></span>
               </div>
               <span className='rightUsername'>{item.username}</span>
             </li>
            ))}
           
          </ul>
       
        </div>
        <div className='suggestionContainer'>
          <h4 className='rightContact'>Suggestions</h4>
          <ul className='rightContactList'>
            {Users.map((item)=>(
               <li className='rightContactListItems'>
               <div className='rightProfileContainer'>
                 <img src={item.profilePicture} className='rightProfileimg' alt=''/>
                 <span className='rightOnline'></span>
               </div>
               <span className='rightUsername'>{item.username} </span><span className='addfriend' > + Follow </span>
             </li>  
            ))}
           
          </ul>
         
        </div>
        
      </div>
    </div>
    </div>
    
  )
}

export default RightsideBar