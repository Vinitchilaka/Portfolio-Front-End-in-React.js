import "./WorkcardStyles.css"
import React from 'react'


const Workcard = (props) => {
  return (
    <div className="project-card">
        <img src={props.imgsrc} alt="image" />
        <h2 className="project-title">{props.title}</h2>
        <div className="pro-details">
            <p>{props.text}</p>
        </div>
    </div>
  )
}

export default Workcard;