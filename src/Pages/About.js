import React from 'react';
const profilePhoto = require('../Images/ProfilePhoto.jpg');

function About(){
  return (
    <div className='about'>
      <h1>About</h1>
      <div>
        <img src={profilePhoto}/>
        <h3>Summary</h3>
        <p>Highly motivated full stack developer specializing in frontend frameworks, libraries, and game development engines.
           Seeking a new position to gain more experience and work with new technologies. </p>
        <h3>Key skills</h3>
        <ul>
          <li>Spent 4 years playing professional golf.</li>
          <li>6 years of web development experince.</li>
          <li>10 years of sales experince.</li>
          <li>6 years of management experince.</li>
        </ul>
      </div>
    </div>
  )
}

export default About;