import React from 'react'
import RightsideBar from '../rightsidebar/RightsideBar'
import Sidebar from '../sidebar/Sidebar'
import Post from '../posts/Post'
import ProfileHeader from '../Userprofile/ProfileHeader'
import './Home.css'


const Home = () => {
  return (
    <>
    <ProfileHeader />
    <div className='homeContainer'>
    <Sidebar />    
    <Post/>
    <RightsideBar />
    </div>
    </>
  )
}

export default Home