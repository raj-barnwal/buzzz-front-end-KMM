import React ,{useState ,useEffect, useRef}from 'react'
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
import { async } from '@firebase/util'

const ProfileUpdate = () => {
  const [userProfile, setUserProfile]=useState({})
  const [name, setName] =useState('');
  const [password, setPassword] =useState('');
  const [newpassword, setNewPassword] =useState('');
  const [city, setCity] =useState('');
  const [town, setTown] =useState('');
  const [description, setDescription] =useState('');
  const desc = useRef();
  // useEffect(()=>{
  //   const fetchUser= async()=>{
  //     const result =await axios.post(`http://localhost:5000/api/users/6251871b34db952c4ebf5928`);
  //     console.log("from user",result);
  //     setUserProfile(result.data);
  //   };
  //   fetchUser();
   // },[userProfile])

    const handleUpdate =async(e) =>{
      e.preventDefault();
        const newUserData={
            userId:"625186e234db952c4ebf5926",
            // description:desc.current.value
            name:name,
            
        };console.log(name)
        try{
          const res =await axios.put("http://localhost:5000/api/users/625186e234db952c4ebf5926",userProfile);

          window.location.reload();

      }catch(err){

      }
      // console.log({name , description , password , newpassword,city,town});
    }
    const handleReset =() =>{
      document.getElementById('update-form').reset();
    }
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }
    const setModalIsOpenToFalse =()=>{
      setModalIsOpen(false)
  }
  // return (
  //   <>
  //   <Header />
  //   <div className='profileUpdationContainer'>
  //    <div className='profileUpdateForm'> 
  //       <div className='profileTop'>
  //        <div className='profileCover'>
  //          <img src={Post_d} className="profileCoverImg" alt=''/>
  //          <img src={Person_a} className='profileUserImg' alt='' />
  //          <span className='webcamIcon'>
  //          <Popup trigger={<AiFillCamera />  } position="right center">
  //         <div className='photoPopup'>Choose your option
  //          <Link to ='/profile/update/webcam' ><button className='captureBtn' onClick={setModalIsOpenToTrue}>Click Photo</button></Link>
  //          <button className='uploadBtn'><input type="file"/>
  //            <button>Upload Photo</button></button></div>
  //          </Popup></span>
  //        </div>
  //       <div className='profileInfo'>
  //       <h4 className='profileInfoName'>{userProfile.name}</h4>
  //     </div>
  //     <div className='updateForm'>
  //       <form className="form-inline" id='update-form'>
  //         <div className='form_group'>
  //         <label for="name"> Name</label>
  //           <input type="text"  placeholder="First Name"  name="First Name" defaultValue={userProfile.name}  />

  //         <label for="desc">Description</label>
  //           <input type="text"  placeholder="Description"  defaultValue={userProfile.desc}  />
  //         </div>

  //         {/* <div className='form_group'>
  //         <label for="designation">Designation</label>
  //           <select id="designation" name="country">
  //             <option value="Front-end Developer">Front-end Developer</option>
  //             <option value="Back-end Developer">Back-end Developer</option>
  //             <option value="Java Developer">Java Developer</option>
  //             <option value="Software Developer">Software Developer</option>
  //             <option value="Automation Tester">Automation Tester</option>
  //            </select>

  //         <label for="web">My Website</label>
  //            <input type="text" id="website" placeholder="My Website" name="website" />
  //         </div> */}

  //         <div className='form_group'>
  //         {/* <label for="gender">Gender</label>
  //             <span class ="radio-btn">
  //           <label class="sqre-radio">
  //             <input type="radio"  name="radio" defaultValue={userProfile.gender}/>
  //             <span>Male</span>
  //             <span class="checkmark"></span>
  //           </label>
  //           <label class="sqre-radio">
  //            <input type="radio" checked="checked" name="radio" />
  //            <span>Female</span>
  //            <span class="checkmark"></span>
  //           </label>
  //           </span> */}

  //             <label for="password">Password</label>
  //            <input type="password"  className='password' placeholder="Password" name="passwd"  />

  //             <label for="password">Password</label>
  //            <input type="password"  className='password' placeholder="Confirm Password" name="passwd"   />
  //            </div>

  //           <div className='form_group'>
  //           <label for="city">City</label>
  //           <input type="text"  placeholder="City" name="city"  />

  //           <label for="town">HomeTown</label>
  //           <input type="text"  placeholder="HomeTown" name="town"  />

  //         {/* <div className='form_group-2'>
  //         <label for="state">State</label>
  //           <input type="text" id="state" className='state_id' placeholder="State" name="state" />

  //         <label for="zip">ZIP</label>
  //           <input type="number" id="zip" className='zip_id' placeholder="ZIP" name="zip" />
  //         </div> */}
  //         </div>
  //       </form>
  //     </div>
  //       <div className='profilebutton'>
  //       <button className='savebutton' onClick={handleUpdate}>Save</button>
  //       <button className='resetbutton' onClick={handleReset}>Reset All</button>
  //       </div>
  //     </div>
  //   </div> 
  //   <div className='profileRight'>
  //     <RightsideBar />
  //    </div>
  //   </div>  
  //  </>
  // )
  return(
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
        <form className="form-inline" id='update-form'>
          <div className='form_group'>
          <label for="name"> Name</label>
            <input type="text"  placeholder="First Name"  name="First Name" defaultValue={userProfile.name} onChange={(e) => setName(e.target.value)}  />

          <label for="desc">Description</label>
            <input type="text"  placeholder="Description"  defaultValue={userProfile.desc}  onChange={(e) => setDescription(e.target.value)}/>
          </div>

          <div className='form_group'>
             <label for="password">Password</label>
             <input type="password"  className='password' placeholder="Password" name="passwd"  onChange={(e) => setPassword(e.target.value)}/>

              <label for="password">Password</label>
             <input type="password"  className='password' placeholder="Confirm Password" name="passwd"  onChange={(e) => setNewPassword(e.target.value)} />
             </div>

            <div className='form_group'>
            <label for="city">City</label>
            <input type="text"  placeholder="City" name="city" onChange={(e) => setCity(e.target.value)} />

            <label for="town">HomeTown</label>
            <input type="text"  placeholder="HomeTown" name="town" onChange={(e) => setTown(e.target.value)} />

            </div>
        </form>
      </div>
        <div className='profilebutton'>
        <button className='savebutton' onClick={handleUpdate}>Save</button>
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