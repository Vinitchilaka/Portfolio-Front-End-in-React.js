import { Link } from "react-router-dom"
import "./AboutcontentStyles.css"
import p2 from "../assets/p2.jpg"
import p4 from "../assets/p4.jpg"

import React from 'react'

const Aboutcontent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1> Who Am I ?</h1>
            <p> I am a Python Web Developer. I completed my graduation in the year 2019 in the field of Civil Engineering.
            I have a Very good knowledge in Python, Django, MySql, GIT, GitHub, HTML, React, CSS and also Basic Knowledge of AWS-S3, Lambda.
            </p>
        <Link to="/Contact">
            <button className="btn">Contact</button>
        </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={p4} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={p2} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutcontent