import React from 'react'
import './Story.css'
import Person from '../../assets/images/person.png'
import {FiMoreHorizontal} from 'react-icons/fi'
import {BiHeartCircle} from 'react-icons/bi'
import {GoComment } from 'react-icons/go'
import { AiOutlineDislike} from 'react-icons/ai'
import {GrLike }from 'react-icons/gr'

const Story = (post) => {
    console.log(post);
  return (
    <div className='story'>
        <div className='storyWrapper'>
            <div className='top-story'>
            <div className='left-story'>
                <img src={Person} className='storyImg' alt='pic'/>
                <span className='storyUser'>Sudesh </span>
                <span className='storyDate'>{post.date}</span>
            </div>
            <div className='right-story'>
                <FiMoreHorizontal  className='story-icon'/>
            </div>
            </div>
            <div className='centerstory'>
                <span className='storyText'>New post</span>
                <img className='storypost' src='https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80' alt='First post'/>
            </div>
            <div className='bottomstory'>
                <GrLike className='likeicon' />
                <BiHeartCircle className='hearticon'/>
                <span className='comicon'>1 comment</span>
               </div> 
               <div className='icons'>
                <span><GrLike className='icon1'/> Like</span>
                <span><AiOutlineDislike className='icon2'/> Dislike</span>
                <span><GoComment className='icon3' /> Comment</span>
                </div>
            <div className='commentsection'>
            <img className='profile' src={Person} alt='profile '/>
                <input className='input' placeholder="Write a Comment.." />
            </div>
        </div>
    </div>
  )
}

export default Story