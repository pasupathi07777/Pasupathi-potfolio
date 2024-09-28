import React from 'react'
import Header from './nav/Header';
import About from './About';
import Contact from './Contact';
import Footer from './footer/Footer';
import Hero from './Hero';
import Project from './Project';
import Resume from './Resume';
import NavBar from './nav/NavBar';


const Allpage = () => {
  return (

    <div className="w-[100vw] h-[100vh] flex flex-col lg:flex-row  ">

      <div className="bg-[#111418]  w-[250px] sticky top-0 left-0 bottom-0 right-0 h-screen hidden lg:block ">
        <NavBar />
      </div>
      <div className="w-full h-screen overflow-y-scroll scroll-smooth relative home scrollable-home   ">

        <div className="lg:hidden sticky top-0 left-0 right-0 z-50 ">
          <Header />
        </div>
        <Hero />
        <About />
        <Project />
        <Resume />
        <Contact />
        <Footer />



      </div>
    </div>
  )
}

export default Allpage







