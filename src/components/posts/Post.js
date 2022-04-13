import React, { useContext } from 'react'
import './Post.css'
import Share from '../share/Share'
import Story from '../stories/Story'
import { useState, useEffect } from 'react'
import { async } from '@firebase/util'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'


const Post = () => {
  const {user}=useContext(AuthContext)
  //console.log(user._id)
  const [post, setPost]= useState([]);
  useEffect(()=>{
    const fetchPosts= async()=>{
      const result =await axios.get(`http://localhost:5000/api/posts/feed/${user._id}`);
      console.log("posts",result);
      setPost(result.data.sort((p1,p2)=>{
        return new Date(p2.createdAt)- new Date(p1.createdAt);
      }));
    };
    fetchPosts();
  },[user._id])
  
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