import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import Profile from './components/Userprofile';
import {useEffect, useState} from 'react';
import { BrowserRouter  as Router, Route ,Routes, NavLink} from 'react-router-dom';
import Home from './components/pages/Home';
import ProfileSetup from './components/Userprofile/ProfileSetup';
import ProfileUpdate from './components/Userprofile/ProfileUpdate';
import axios from 'axios';

function App() {
    const[userProfile, setUserProfile]= useState(false)

     
   
        useEffect(()=>{

          fetchUser();
          console.log(userProfile);
        })
    // const [isUser, setIsUser]= useState(true);
  //   const[userProfile, setUserProfile]= useState({});
  
  //   setUserProfile({
  //     name: localStorage.getItem('name'),
  //     profilePic: localStorage.getItem('profilePic')
      
  // })
  const fetchUser=()=>{
    axios.get("http://localhost:5000/auth/login/success",{
      withCredentials:true
    }).then((res)=>
      res.data
    ).then(({user, success})=>{
      success && setUserProfile(user)
    })
  }



  return (
    <div className="App">
 
      <Router>
        {/* {userProfile?
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
      } */}
          <Routes>
           <Route exact path='/' element={<Home/>}/>
        
           <Route path='/login' element={ <Login/>}/>
           <Route  path='/register' element={<Home/>}/>
           <Route  path='/profile/:username' element={<ProfileSetup/>}/>
         </Routes>
      </Router>
    </div>

      
  
  
  );
}

export default App;
