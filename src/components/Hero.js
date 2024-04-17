import React from 'react'
import Heroimg from '../img/header.webp'
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Hero = () => {
    return (
        <section className='flex  flex-col sm:flex-row px-5 py-10 bg-color-2 justify-center align-middle'>

            <div id='hero' className='sm:w-1/2 flex flex-col   justify-center align-middle'>
                <div className='flex flex-col justify-center'>
                    <h1 className=' text-white text-6xl font-hero-font  '>Hi, <br /> Im <span className='text-black'>Pasupathi </span><p className='text-2xl'>Im a Frontend Developer</p></h1>

                    <div className='flex gap-4 py-3  '>
                        <a href="#" className='hover:text-white'><FaLinkedin size={40} /></a>
                        <a href="#" className='hover:text-white'><FaTwitter size={40} /></a>
                        <a href="#" className='hover:text-white'> <FaFacebookSquare size={40} /></a>
                    </div>
                </div>


            </div>

            <img className='sm:w-1/3' src={Heroimg} alt="" sizes="" srcset="" />
        </section>
    )
}

export default Hero