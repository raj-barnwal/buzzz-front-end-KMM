import './App.css';
import Login from './components/Login'
import Profile from './components/Userprofile';
import {useEffect, useState} from 'react';
import { BrowserRouter  as Router, Route ,Routes, NavLink} from 'react-router-dom';
import Home from './components/pages/Home';
import ProfileSetup from './components/Userprofile/ProfileSetup';
import ProfileUpdate from './components/Userprofile/ProfileUpdate';
import Webcam from './components/Userprofile/Webcam';

function App() {
    // const[userProfile, setUserProfile]= useState({})

     
   
    //     useEffect(()=>{
    //       console.log("user Profile",userProfile)
    //     })
    const [isUser, setIsUser]= useState(true);
  //   const[userProfile, setUserProfile]= useState({});
  
  //   setUserProfile({
  //     name: localStorage.getItem('name'),
  //     profilePic: localStorage.getItem('profilePic')
      
  // })


  return (
    <div className="App">
 
      <Router>
        {isUser? 
        (<>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          
          </Routes>
          </>):
           (<>
            <Routes>
              <Route exact path='/' element={<Login/>}/>
             
              </Routes>
              </>)
      }
        {/* //  <Routes>
        //   <Route exact path='/' element={<Home/>}/>
        
        //   <Route exact path='/login' element={ <Login/>}/>
        //   <Route exact path='/register' element={<Home/>}/>
        //   <Route exact path='/profile/:username' element={<ProfileSetup/>}/>
        // </Routes> */}
      </Router>
      {/* <ProfileUpdate /> */}
    </div>

      
  
  
  );
}

export default App;
