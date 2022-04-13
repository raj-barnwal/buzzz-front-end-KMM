import Login from './components/Login'
import Profile from './components/Userprofile';
import {useContext, useEffect, useState} from 'react';
import { BrowserRouter  as Router, Route ,Routes, Link, Navigate} from 'react-router-dom';
import Home from './components/pages/Home';
import ProfileSetup from './components/Userprofile/ProfileSetup';
import ProfileUpdate from './components/Userprofile/ProfileUpdate';
import axios from 'axios';
import Webcam from './components/Userprofile/Webcam';
import { AuthContext } from './context/AuthContext';
import Register from './components/Login/Register';
import LoggedInUser from './components/Userprofile/LoggedInUser';
import PageNotFound from './components/pages/PageNotFound';

function App() {
  const {user}= useContext(AuthContext);
    // const[userProfile, setUserProfile]= useState(false)

     
   
    //     useEffect(()=>{

    //       fetchUser();
    //       console.log(userProfile);
    //     })
    // const [isUser, setIsUser]= useState(true);
  //   const[userProfile, setUserProfile]= useState({});
  
  //   setUserProfile({
  //     name: localStorage.getItem('name'),
  //     profilePic: localStorage.getItem('profilePic')
      
  // })
  // const fetchUser=()=>{
  //   axios.get("http://localhost:5000/auth/login/success",{
  //     withCredentials:true
  //   }).then((res)=>
  //     res.data
  //   ).then(({user, success})=>{
  //     success && setUserProfile(user)
  //   })
  // }






  return (
    <div className="App">
      <Router>
        {/* {userProfile?
        (<>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
         <Route exact path='/login' element={ <Login/>}/>
         <Route exact path='/register' element={<Home/>}/>
          <Route exact path='/profile/:username' element={<ProfileSetup/>}/>
          <Route exact path='/profile/update' element={<ProfileUpdate/>}/>
          <Route exact path='/profile/update/webcam' element={<Webcam/>}/>
          
          </Routes>
          </>):
           (<>
            <Routes>
              <Route exact path='/' element={<Login/>}/>
             
              </Routes>
              </>)
      } */}
          <Routes>
           <Route exact path='/' element={user ?<Home/> : <Login/>}/>
        
           <Route path='/login' element={ user ? <Navigate to="/"/> : <Login/>}/>
           <Route  path='/register' element={user ? <Navigate to="/"/> : <Register/>}/>
           <Route  path='/profile/:username' element={<ProfileSetup/>}/>
           <Route  path='/profile/update' element={<ProfileUpdate/>}/>
          <Route   path='/profile/update/webcam' element={<Webcam/>}/>
          <Route  path='/profile/loggedin' element={<LoggedInUser/>}/>
          <Route path="/pagenotfound" element={<PageNotFound/>}/>
          <Route path="/*" element={<PageNotFound/>}/>

         </Routes>
         
      </Router>
    </div>

      
  
  
  );
}

export default App;
