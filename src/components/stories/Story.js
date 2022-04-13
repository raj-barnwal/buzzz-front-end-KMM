import React, { useEffect } from 'react'
import './Story.css'
import { useState } from 'react'
import { Users,Posts } from '../../dummydata'
import Profilepic1 from '../../assets/images/person.png';
import {FiMoreHorizontal} from 'react-icons/fi'
import {BiHeartCircle} from 'react-icons/bi'
import {GoComment } from 'react-icons/go'
import {GrLike }from 'react-icons/gr'
import {BsCheck2Circle , BsFlagFill} from 'react-icons/bs'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Story = (props) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser]= useState({});
    const [likeFeed ,setLikeFeed] =useState(null);
    const [isLiked ,setIsLiked] = useState(false);

    useEffect(()=>{

      fetchUser();
    },[])

    const fetchUser= ()=>{
        props.post.map(async(item)=>{
            const result =await axios.get(`http://localhost:5000/api/users/${item.userId}`);
            setUser(result.data);
        })        
    };

    const getLikeFeedInfo=()=>{
        console.log("likeFEED INFO")

        props.post.map((item)=>{
            setLikeFeed(isLiked ? item.like - 1: item.like + 1);
            setIsLiked(!isLiked)
        })
    }
    
    useEffect(()=>{
        getLikeFeedInfo()
    },[likeFeed])
  return (
      <>
               {
            props.post.map((item)=>(
                <div key={item.id}>
                    <div className='storyContainer'>
                        <div className='storyWrapper'>
                            <div className='top-story'>
                                <div className='left-story'>
                                    <Link to={`/profile/${user.name}`}>
                                    <img src={ Profilepic1} className='storyImg' alt='pic'/>
                                    </Link>
                                   
                                   <span className='storyUser'>{user.name}</span>
                                   <span className="storyDate">{item?.date}</span>
                                </div>
                                <div className='right-story'>
                                    <span className='story-icon-check'><BsCheck2Circle /></span>
                                    <span className='story-icon-flag'><BsFlagFill /></span>
                                    <span className='story-icon'><FiMoreHorizontal /></span>
                                 </div>
                            </div>
                            <div className='centerstory'>
                                <span className='storyText'>{item?.description}</span>
                                {<img className='storypost' src={PF + item?.image} />}
                            </div>
                            <div className='bottomstory'>
                                <GrLike className='likeicon'onClick={getLikeFeedInfo} /><span>{likeFeed} liked it</span>
                                <BiHeartCircle className='hearticon'/>
                                <span className='comicon'>{item.comment} comment</span>
                             </div> 
                            
                            <div className='icons'>
                                    <span className='bottom_icon'><GrLike className='icon1' onClick={getLikeFeedInfo}/> Like</span>
                                    <span className='bottom_icon'><GoComment className='icon3'  /> Comment</span>
                            </div>
                            <div className='commentsection'>
                                <img className='profileimg' src={Profilepic1} alt='profile '/>
                                <input className='input' placeholder="Write a Comment.." />
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }

 
      
    
      </>
    
  )
}

export default Story