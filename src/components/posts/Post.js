import React from 'react'
import './Post.css'
import Share from '../share/Share'
import Story from '../stories/Story'
import { useState, useEffect } from 'react'
import { async } from '@firebase/util'
import axios from 'axios'


const Post = () => {
  const [post, setPost]= useState([]);
  useEffect(()=>{
    const fetchPosts= async()=>{
      const result =await axios.get("http://localhost:5000/api/posts/feed/625186e234db952c4ebf5926");
      console.log("posts",result);
      setPost(result.data);
    };
    fetchPosts();
  },[])
  
  return (
    <div className='post'>
      <div className='postWraper'>
      <Share />
      {/* {
        post.map((item)=>(
          <Story key={item.id} post={item.like}/>
        ))
      } */}
      <Story post={post}/>
      </div>
    </div>
  )
}

export default Post