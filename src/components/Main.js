import "./MainStyles.css";

import React from 'react'
import IntroImg from "../assets/p6.jpg"
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="Main">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg"></img>
        </div>
        <div className="content">
            <p>HI, This is a VINIT CHILAKA</p>
            <h1>PYHTON WEB DEVELOPER.</h1>
            <div>
                <Link to="/Projects" className="btn">Projects</Link>
                <Link to="/Contact" className="btn btn-light">Contact</Link>
            </div>

        </div>
    </div>
  )
}

export default Main