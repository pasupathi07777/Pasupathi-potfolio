import React from 'react'
import { useContext } from 'react';
import database from '../alldata/data';

const Hero = () => {
    let { details } = useContext(database)


    return (
        <section className='flex  flex-col sm:flex-row px-5 py-10 bg-color-2 justify-center  align-middle gap-3 sm:gap-0 mt-[32px] '>

            <div id='hero' className='sm:w-1/2 flex flex-col   justify-center align-middle'>
                <div className='flex flex-col justify-center'>
                    <h1 className=' text-white text-6xl font-hero-font  '>Hi, <br /> Im <span className='text-black'>{details.name} </span><p className='text-2xl'>{details.my_domine}</p></h1>

                  


                    <div className='flex gap-4 py-3  '>
                        <a target='_blank' href={details.linkin_link} rel="noreferrer" className='hover:text-white'>{details.linkdin_logo}</a>
                       
                        <a target='_blank' href={details.gamil_link} rel="noreferrer" className='hover:text-white'>{details.gamil_logo}</a>

                    </div>
                </div>


            </div>


            <img className=' w-[300px] sm:w-auto rounded max-w-[400px] min-w-[150px] sm:min-w-[300px] max-h-[300px] mx-auto sm:mx-0' src={details.image} alt="" sizes="" srcset="" />
        </section>
    )
}

export default Hero



