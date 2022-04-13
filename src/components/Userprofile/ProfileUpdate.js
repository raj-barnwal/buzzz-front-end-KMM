import React ,{useState ,useEffect}from 'react'
import { BrowserRouter,Link } from 'react-router-dom'
import './profile.css'
import RightsideBar from '../rightsidebar/RightsideBar'
import Header from '../Header/Header'
import Post_d from '../../assets/images/post4.jpg'
import {AiFillCamera} from 'react-icons/ai'
import Person_a from '../../assets/images/person2.png'
import Webcam from './Webcam'
import axios from 'axios'
import Popup from 'reactjs-popup'
import { Modal } from 'react-bootstrap'

const ProfileUpdate = () => {
  const [userProfile, setUserProfile]=useState({})
  useEffect(()=>{
    const fetchUser= async()=>{
      const result =await axios.post(`http://localhost:5000/api/users/6251871b34db952c4ebf5928`);
      console.log("from user",result);
      setUserProfile(result.data);
    };
    fetchUser();
  },[userProfile])
  
    const handleReset =() =>{
      document.getElementsByClassName('form').reset();
    }
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }
    const setModalIsOpenToFalse =()=>{
      setModalIsOpen(false)
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
           <span className='webcamIcon'>
           <Popup trigger={<AiFillCamera />  } position="right center">
          <div className='photoPopup'>Choose your option
           <Link to ='/profile/update/webcam' ><button className='captureBtn' onClick={setModalIsOpenToTrue}>Click Photo</button></Link>
           <button className='uploadBtn'><input type="file"/>
             <button>Upload Photo</button></button></div>
           </Popup></span>
         </div>
        <div className='profileInfo'>
        <h4 className='profileInfoName'>{userProfile.name}</h4>
      </div>
      <div className='updateForm'>
        <form class="form-inline" >
          <div className='form_group'>
          <label for="name">First Name</label>
            <input type="text" id="fname" placeholder="First Name"  name="First Name" defaultValue={userProfile.name}/>

          <label for="name">Last Name</label>
            <input type="text" id="lname" placeholder="Last Name" name="Last Name" defaultValue={userProfile.name}/>
          </div>

          <div className='form_group'>
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
          </div>

          <div className='form_group'>
          <label for="gender">Gender</label>
              <span class ="radio-btn">
            <label class="sqre-radio">
              <input type="radio"  name="radio" defaultValue={userProfile.gender}/>
              <span>Male</span>
              <span class="checkmark"></span>
            </label>
            <label class="sqre-radio">
             <input type="radio" checked="checked" name="radio" />
             <span>Female</span>
             <span class="checkmark"></span>
            </label>
            </span>

              <label for="birthday">Birthday</label>
             <input type="date" id="birthday" className='birthday' placeholder="MM/DD/YY" name="birthday" />
             </div>

            <div className='form_group'>
            <label for="city">City</label>
            <input type="text" id="city" placeholder="City" name="city" />

          <div className='form_group-2'>
          <label for="state">State</label>
            <input type="text" id="state" className='state_id' placeholder="State" name="state" />

          <label for="zip">ZIP</label>
            <input type="number" id="zip" className='zip_id' placeholder="ZIP" name="zip" />
          </div>
          </div>
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