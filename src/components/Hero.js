import React from 'react'
import Heroimg from '../img/header.webp'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Hero = () => {

    let details = {
        linkin_link: 'http://linkedin.com/in/pasupathi07777',
        instagram_link: 'https://www.instagram.com/pasupathi7777/?next=%2F',
        fb_link: 'https://www.facebook.com/pasupathy.pasupathy.9659',
    }
    return (
        <section className='flex  flex-col sm:flex-row px-5 py-10 bg-color-2 justify-center align-middle'>

            <div id='hero' className='sm:w-1/2 flex flex-col   justify-center align-middle'>
                <div className='flex flex-col justify-center'>
                    <h1 className=' text-white text-6xl font-hero-font  '>Hi, <br /> Im <span className='text-black'>Pasupathi </span><p className='text-2xl'>Im a Frontend Developer</p></h1>

                    <div className='flex gap-4 py-3  '>
                        <a  target='_blank' href={details.linkin_link}  rel="noreferrer" className='hover:text-white'><FaLinkedin size={40} /></a>
                        <a  target='_blank' href={details.instagram_link}  rel="noreferrer" className='hover:text-white'><FaInstagram size={40} /></a>
                        <a  target='_blank' href={details.fb_link}  rel="noreferrer" className='hover:text-white'> <FaFacebookSquare size={40} /></a>
                    </div>
                </div>


            </div>

            <img className='sm:w-1/3' src={Heroimg} alt="" sizes="" srcset="" />
        </section>
    )
}

export default Hero