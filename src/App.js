import './App.css';
import Login from './components/Login'
import Profile from './components/Userprofile';
import { useState } from 'react';
import { BrowserRouter  as Router, Route ,Routes, Navigate} from 'react-router-dom';
import Home from './components/pages/Home';
import ProfileSetup from './components/Userprofile/ProfileSetup';
import ProfileUpdate from './components/Userprofile/ProfileUpdate';
import Webcam from './components/Userprofile/Webcam';

function App() {
  const user= false;
  return (
    <div className="App">
 
      <Router>
         <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/login' element={<Login />}/>
          <Route exact path='/register' element={<Home/>}/>
          <Route exact path='/profile/:username' element={<ProfileSetup/>}/>
          <Route exact path='/profile/update' element={<ProfileUpdate/>}/>
          <Route exact path='/profile/update/webcam' element={<Webcam/>}/>
        </Routes>
      </Router>
      {/* <ProfileUpdate /> */}
    </div>

      
  
  
  );
}

export default App;
