import React, { useContext, useEffect, useState } from 'react'
import './Rightsidebar.css'
import { Users } from '../../dummydata'
import {BiSearch} from 'react-icons/bi'
import Person from '../../assets/images/person.png'
import Person_a from '../../assets/images/person2.png'
import Person_b from '../../assets/images/person3.jpg'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'

const RightsideBar = ({profile}) => {
  const [user, setUser]= useState({});
  const { user: currentUser } = useContext(AuthContext);
  useEffect(()=>{
    fetchUser();
  },[])

  const fetchUser= async ()=>{
      
          const result =await axios.get(`http://localhost:5000/api/users/${currentUser._id}`);
          setUser(result.data);
         console.log("this is rifht",result.data)
  };
  return (
    <div className='right-side-info'>
      <div className='rightbarConatiner'>
      <div className='rightWrapper'>
        <div className='rightContact'>
          <h4 className='ContactHead'>Contact
          <BiSearch className='searchicon'/></h4>
          <ul className='rightContactList'>
            {Users.map((item)=>(
               <li key={item.id} className='rightContactListItems'>
               <div className='rightProfileContainer'>
                 <img src={item?.profilePicture} className='rightProfileimg' alt=''/>
                 <span className='rightOnline'></span>
               </div>
               <span className='rightUsername'>{item.username}</span>
             </li>
            ))}
           
          </ul>
       
        </div>
        <div className='suggestionContainer'>
          <div className='rightSuggestion'>
          <h4 className='SuggestionHead'>Suggestions</h4>
          <ul className='rightSuggestionList'>
            {Users.map((item)=>(
               <li className='rightSuggestionListItems'>
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
    </div>
    
  )
}

export default RightsideBar