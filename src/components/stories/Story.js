import React from 'react'
import './Story.css'
import { useState } from 'react'
import { Users } from '../../dummydata'
import Person from '../../assets/images/person.png'
import {FiMoreHorizontal} from 'react-icons/fi'
import {BiHeartCircle} from 'react-icons/bi'
import {GoComment } from 'react-icons/go'
import { AiOutlineDislike} from 'react-icons/ai'
import {GrLike }from 'react-icons/gr'
import {BsCheck2Circle , BsFlagFill} from 'react-icons/bs'


const Story = (props) => {
    console.log("Post data:",props.Post);
    const user= Users.filter((u) => u.id===1);
    console.log(user[0].username);
    const [like ,setLike] =useState(2);
    const [isLiked ,setIsLiked] = useState(false);
    const likeHandler =() =>{
        setLike(isLiked ? like - 1: like + 1);
        setIsLiked(!isLiked)
    }
  return (
    <div className='story'>
        <div className='storyWrapper'>
            <div className='top-story'>
            <div className='left-story'>
                <img src={Person} className='storyImg' alt='pic'/>
                <span className='storyUser'>Sudesh </span>
                <span className='storyDate'>{props.Post.date}</span>
            </div>
            <div className='right-story'>
                <span className='story-icon-check'><BsCheck2Circle /></span>
                <span className='story-icon-flag'><BsFlagFill /></span>
                <span className='story-icon'><FiMoreHorizontal /></span>
            </div>
            </div>
            <div className='centerstory'>
                <span className='storyText'>New post</span>
                <img className='storypost' src='https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80' alt='First post'/>
            </div>
            <div className='bottomstory'>
                <GrLike className='likeicon'onClick={likeHandler} /><span>{like} liked it</span>
                <BiHeartCircle className='hearticon'/>
                <span className='comicon'>1 comment</span>
               </div> 
               <div className='icons'>
                <span className='bottom_icon'><GrLike className='icon1' onClick={likeHandler}/> Like</span>
                <span className='bottom_icon'><AiOutlineDislike className='icon2'  onClick={likeHandler}/> Dislike</span>
                <span className='bottom_icon'><GoComment className='icon3'  onClick={likeHandler}/> Comment</span>
                </div>
            <div className='commentsection'>
            <img className='profileimg' src={Person} alt='profile '/>
                <input className='input' placeholder="Write a Comment.." />
            </div>
        </div>
    </div>
  )
}

export default Story