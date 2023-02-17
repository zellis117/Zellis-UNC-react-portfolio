import React from 'react';

//https://drive.google.com/file/d/1YT_7aYB8bQACAVapNWT7GwsyXChgOa4o/view?usp=sharing

function Resume(){
  return (
    <div>
      <h1>Resume</h1>
      <div className='resume'>
        <button type="button" onClick={(e) => {e.preventDefault(); 
            window.location.href='https://drive.google.com/file/d/1YT_7aYB8bQACAVapNWT7GwsyXChgOa4o/view?usp=sharing';}}>
                 Click here to View / Download Full Resume PDF</button>
        <a href='https://www.linkedin.com/in/zac-ellis-110469235'/>
      </div>
      <p>Full Stack Developer in Durham, NC.</p>
    </div>
  )
}

export default Resume;