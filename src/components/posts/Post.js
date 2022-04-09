import React from 'react'
import './Post.css'
import Share from '../share/Share'
import Story from '../stories/Story'
import { useState, useEffect } from 'react'
import { async } from '@firebase/util'


const Post = () => {
  const [post, setPost]= useState([]);
  useEffect(()=>{
    const fetchPosts= async()=>{
      const result =await fetch ("posts/feed/625186e234db952c4ebf5926");
      console.log(result)
    };
    fetchPosts();
  },[])
  
  return (
    <div className='post'>
      <div className='postWraper'>
      <Share />
     
      <Story/>
      </div>
    </div>
  )
}

export default Post