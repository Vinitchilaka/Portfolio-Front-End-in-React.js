import { FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"
import "./FooterStyles.css"
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            
            <div className="left">
                <div className="location">
                    <FaHome size={20} style = {{color:"#fff",marginRight:"2rem"}} />
                    <div>
                        <p> H.No. 790, Shastri Nagar, Solapur,</p>
                        <p> Maharashtra.</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style = {{color:"#fff",marginRight:"2rem"}} />91-7620202213</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style = {{color:"#fff",marginRight:"2rem"}} />vinitchilaka3@gmail.com</h4>
                </div>
            </div>
            
            <div className="right">
                <h4> About Me</h4>
                <p> This is a Vinit Chilaka. I am a Software Engineer. 
                    I completed my graduation in the year 2019 in the field of Civil Engineering. 
                    I have 1+ year Experience in the Python Web Developement field.  I have a Very good knowledge
                    in Python, Django, MySql, GIT, GitHub, HTML, React, CSS and also Basic Knowledge of AWS-S3, Lambda. </p>
                
                <div className="social">
                <FaLinkedin size={30} style = {{color:"#fff",marginRight:"2rem"}} />

                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Footer