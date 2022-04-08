import React from 'react'
import RightsideBar from '../rightsidebar/RightsideBar'
import Sidebar from '../sidebar/Sidebar'
import Post from '../posts/Post'
import Header from '../Header/Header'
import './Home.css'


const Home = () => {
  return (
    <>
    <Header />
    <div className='homeContainer'>
    <Sidebar />    
    <Post/>
    <RightsideBar />
    </div>
    </>
  )
}

export default Home