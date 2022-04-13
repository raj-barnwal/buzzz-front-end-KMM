import React ,{useState ,useEffect, useRef, useContext}from 'react'
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
import { AuthContext } from '../../context/AuthContext'

const ProfileUpdate = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER; 
  const {user}=useContext(AuthContext);
  const name=useRef();
  const password=useRef();
  const city=useRef();
  const hometown=useRef();

  // const [userProfile, setUserProfile]=useState({})
  // const [name, setName] =useState('');
  // const [password, setPassword] =useState('');
  // const [newpassword, setNewPassword] =useState('');
  // const [city, setCity] =useState('');
  // const [town, setTown] =useState('');
  // const [description, setDescription] =useState('');
  const desc = useRef();
  
  console.log(user)
    const handleUpdate =async(e) =>{
      e.preventDefault();
        const newUserData={
            userId:"625186e234db952c4ebf5926",
            desc:desc.current.value,
            name:name.current.value,
            password:password.current.value,
            city:city.current.value,
            hometown:hometown.current.value
            
        };
        try{
          const res =await axios.put(`http://localhost:5000/api/users/${user._id}`,{...newUserData});

          window.location.reload();

      }catch(err){

      }
     
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
  
  return(
    <>
    <Header />
    <div className='profileUpdationContainer'>
     <div className='profileUpdateForm'> 
        <div className='profileTop'>
         <div className='profileCover'>
           <img src={PF+user.profilePicture} className="profileCoverImg" alt=''/>
           <img src={PF+user.profilePicture} className='profileUserImg' alt='' />
           <span className='webcamIcon'>
           <Popup trigger={<AiFillCamera />  } position="right center">
          <div className='photoPopup'>Choose your option
           <Link to ='/profile/update/webcam' ><button className='captureBtn' onClick={setModalIsOpenToTrue}>Click Photo</button></Link>
           <button className='uploadBtn'><input type="file"/>
             <button>Upload Photo</button></button></div>
           </Popup></span>
         </div>
        <div className='profileInfo'>
        <h4 className='profileInfoName'>{user.name}</h4>
      </div>
      <div className='updateForm'>
        <form className="form-inline" id='update-form'>
          <div className='form_group'>
          <label for="name"> Name</label>
            <input type="text"  placeholder="First Name"  name="First Name" ref={name}  />

          <label for="desc">Description</label>
            <input type="text"  placeholder="Description"  defaultValue={user.desc}  ref={desc}/>
          </div>

          <div className='form_group'>
             <label for="password">Password</label>
             <input type="password"  className='password' placeholder="Password" name="passwd" ref={password}/>

              <label for="password">Password</label>
             <input type="password"  className='password' placeholder="Confirm Password" name="passwd"  ref={password} />
             </div>

            <div className='form_group'>
            <label for="city">City</label>
            <input type="text"  placeholder="City" name="city" ref={city} />

            <label for="town">HomeTown</label>
            <input type="text"  placeholder="HomeTown" name="town" ref={hometown} />

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