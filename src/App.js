import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import Profile from './components/Userprofile';
import { useState } from 'react';
import { BrowserRouter  as Router, Route ,Routes} from 'react-router-dom';
import Home from './components/pages/Home';
import ProfileSetup from './components/Userprofile/ProfileSetup';

function App() {
  return (
    <div>
       <Router>
         <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<Home/>}/>
        <Route exact path='/profile/:username' element={<ProfileSetup/>}/>
        </Routes>
      </Router>
    </div>

      
  
  
  );
}

export default App;
