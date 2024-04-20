import React from 'react'
import Header from '../Header';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Hero from './Hero';
import Project from './Project';
import Resume from './Resume';


const Allpage = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Project />
      <Resume />
      <Contact />
      <Footer />

    </>
  )
}

export default Allpage