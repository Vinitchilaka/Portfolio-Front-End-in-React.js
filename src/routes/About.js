import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Mainpro from '../components/Mainpro';
import Aboutcontent from '../components/Aboutcontent';

const About = () => {
  return (
    <div>
      <Navbar/>
      <Mainpro heading="About" text="I am a Friendly Software Developer"/>
      <Aboutcontent />
      <Footer/>
    </div>
  )
}

export default About