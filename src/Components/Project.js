import React from 'react';

function Project(props){
  return (
    <div className={props.background}>
        <img/>
        <h3>{props.name}</h3>
    </div>
  )
}

export default Project;