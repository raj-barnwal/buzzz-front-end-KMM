import React from 'react'
import { useState } from 'react';
import Webcam from 'react-webcam';
import {AiFillCamera } from 'react-icons/ai'

const WebcamComponent =() => <Webcam />;
const VideoConstraints ={
    width: 250,
    height: 230,
    facingMode :'user'
};
const WebcamCapture = () => {
    const webcamRef = React.useRef(null);

    const capture = React.useCallback(
      () => {
        const imageSrc = webcamRef.current.getScreenshot();
      },
  
      [webcamRef]
    );
  
    return (
      <div className="webcam-container">
        <Webcam
          audio={false}
          height={200}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={220}
          VideoConstraints={VideoConstraints}
        />
        <button onClick={(e)=>{
            e.preventDefault();
            capture();}} > Capture</button>
      </div>
    );
}

export default WebcamCapture