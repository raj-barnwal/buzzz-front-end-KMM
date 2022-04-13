import React, { useContext, useRef, useState } from 'react'
import './Share.css'
import {IoMdPhotos} from 'react-icons/io'
import Person from '../../assets/images/person.png'
import { async } from '@firebase/util'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'

const Share = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER; 
    const {user}=useContext(AuthContext);
    const desc = useRef();
    const [file, setFile] = useState(null);
    const clickhandler=async(e)=>{
        e.preventDefault();
        const newPost={
            userId:"6251871b34db952c4ebf5928",
            description:desc.current.value
        };
        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName);
            data.append("file", file);
            newPost.image = fileName;
            console.log(newPost);
            try {
              await axios.post("http://localhost:5000/api/upload", data);
            } catch (err) {}
          }
        try{
            await axios.post("http://localhost:5000/api/posts", {...newPost});
            window.location.reload();

        }catch(err){

        }

}
    
  return (
    <div className='share'>
        <div className='shareWrapper'>
            <div className='Top-share'>
                <img className='ShareImg' src={PF+user.profilePicture} alt='profile '/>
                <input className='input' placeholder="Start your post..."  ref={desc}/>
                 <div className='sharebtn'>
                    <div className='Optionshare'>
                        <label className='ShareOption'>
                            <IoMdPhotos  className='shareIcon'/>
                            <span className='shareOptionText'>Photo / Video</span>
                            <input
                                className='input-share'
                                
                                type="file"
                                id="file"
                                accept=".png,.jpeg,.jpg"
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                        </label>
                        <div className='ShareOption2'>
                        <button onClick={clickhandler}> Share</button>
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