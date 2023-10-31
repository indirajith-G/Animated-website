import React from 'react';
import "./backgroundvideo.css"
const BackgroundVideo = () => {
  return (
    <div className="background-video">
      <video id="videobackground" autoPlay muted loop>
        <source src="../Videos/bg.mp4" type="video/mp4" />
      </video>
      <div className="text-overlay">
      <img src="logo.png" alt="Logo" class="logo"/>
        <h1 class="animated-text"><span >Coming Soon...</span></h1>
        <p>This is an example of a responsive video background with a more complicated text animation.</p>
      </div>

    </div>
  );
};

export default BackgroundVideo;
