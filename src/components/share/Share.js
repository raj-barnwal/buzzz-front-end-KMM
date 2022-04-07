import React from 'react'
import './Share.css'
import {IoMdPhotos} from 'react-icons/io'
import Person from '../../assets/images/person.png'
const Share = () => {
  return (
    <div className='share'>
        <div className='shareWrapper'>
            <div className='Top-share'>
                <img className='ShareImg' src={Person} alt='profile '/>
                <input className='input' placeholder="Start your post..." />
                 <div className='sharebtn'>
                    <div className='Optionshare'>
                        <div className='ShareOption'>
                            <IoMdPhotos  className='shareIcon'/>
                            <span className='shareOptionText'>Photo / Video</span>
                        </div>
                    </div>
                </div> 
                </div>
               
            {/* <div className='Bottom-share'>
                
            </div> */}
        </div>
    </div>
  )
}

export default Share