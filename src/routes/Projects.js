import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Mainpro from '../components/Mainpro';
import Work from '../components/Work';

const Projects = () => {
  return (
    <div>
      <Navbar/>
      <Mainpro heading = "PROJECTS." text = "Some of my most recent works."/>
      <Work/>
      <Footer/>
      
    </div>
  )
}

export default Projects