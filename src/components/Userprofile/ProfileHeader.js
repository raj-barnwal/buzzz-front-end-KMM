import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faContactCard } from '@fortawesome/free-solid-svg-icons'

const ProfileHeader = () => {
  return (
    <div className='navigation-bar'>
        <div className='logo'>
            logo
        </div>
        <div className='user-details'>
            <div className='profile-pic'>
                 <img src={localStorage.getItem('profilePic')}/>
            </div>
            <div className='user-name'>
            {localStorage.getItem('name')}
            </div>
            <div className='message-icon'>
                  <FontAwesomeIcon icon={faComment}/>
            </div>
            <div className='conatct-icon'>
            <FontAwesomeIcon icon={faContactCard}/>
            </div>
        </div>
     
    </div>
  )
}

export default ProfileHeader
