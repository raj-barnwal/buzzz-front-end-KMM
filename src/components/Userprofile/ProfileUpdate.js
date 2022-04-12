import React from 'react'
import { BrowserRouter,Link } from 'react-router-dom'
import './profile.css'
import RightsideBar from '../rightsidebar/RightsideBar'
import Header from '../Header/Header'
import Post_d from '../../assets/images/post4.jpg'
import {AiFillCamera} from 'react-icons/ai'
import Person_a from '../../assets/images/person2.png'
import Webcam from './Webcam'


const ProfileUpdate = () => {
    const handleReset =() =>{
      document.getElementsByClassName('form').reset();
    }
  return (
    <>
    <Header />
    <div className='profileUpdationContainer'>
     <div className='profileUpdateForm'> 
        <div className='profileTop'>
         <div className='profileCover'>
           <img src={Post_d} className="profileCoverImg" alt=''/>
           <img src={Person_a} className='profileUserImg' alt='' />
           <span className='webcamIcon'><Link to ='/profile/update/webcam' ><AiFillCamera /></Link></span>
         </div>
        <div className='profileInfo'>
        <h4 className='profileInfoName'>Sarah Wood </h4>
      </div>
      <div className='updateForm'>
        <form class="form-inline" >
          <label for="name">First Name</label>
            <input type="text" id="fname" placeholder="First Name"  name="First Name"/>

          <label for="name">Last Name</label>
            <input type="text" id="lname" placeholder="Last Name" name="Last Name"/>

          <label for="designation">Designation</label>
            <select id="designation" name="country">
              <option value="Front-end Developer">Front-end Developer</option>
              <option value="Back-end Developer">Back-end Developer</option>
              <option value="Java Developer">Java Developer</option>
              <option value="Software Developer">Software Developer</option>
              <option value="Automation Tester">Automation Tester</option>
             </select>

          <label for="web">My Website</label>
             <input type="text" id="website" placeholder="My Website" name="website" />

          <label for="gender">Gender</label>
              <span class ="radio-btn">
            <label class="sqre-radio">
              <input type="radio" checked="checked" name="radio" />
              <span>Female</span>
              <span class="checkmark"></span>
            </label>
            <label class="sqre-radio">
             <input type="radio" name="radio" />
             <span>Male</span>
             <span class="checkmark"></span>
            </label>
            </span>

          <label for="city">City</label>
            <input type="text" id="city" placeholder="City" name="city" />

          <label for="state">State</label>
            <input type="text" id="state" placeholder="State" name="state" />

          <label for="zip">ZIP</label>
            <input type="number" id="zip" placeholder="ZIP" name="zip" />
  
        </form>
      </div>
        <div className='profilebutton'>
        <button className='savebutton'>Save</button>
        <button className='resetbutton' onClick={handleReset}>Reset All</button>
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

export default ProfileUpdate