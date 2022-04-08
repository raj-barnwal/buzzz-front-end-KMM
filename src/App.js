import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import Profile from './components/Userprofile';
import { useState } from 'react';
import { BrowserRouter  as Route, Routes, Link } from 'react-router-dom';
import Home from './components/pages/Home';

function App() {
  
  return (
    <div className="App">
      <Route >
      {/* <Login /> */}
     {/* <Profile/> */}
     <Home />
     
     </Route>
    </div>
  );
}

export default App;
