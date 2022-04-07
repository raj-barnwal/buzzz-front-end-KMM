import React from 'react'
import './Post.css'
import Share from '../share/Share'
import Story from '../stories/Story'
import {Posts} from '../../dummydata'

const Post = () => {
  return (
    <div className='post'>
      <div className='postWraper'>
      <Share />
      {Posts.map((p) =>{
        <Story key={p.id} post={p}/>
      })}
      <Story />
      
      

      </div>
    </div>
  )
}

export default Post