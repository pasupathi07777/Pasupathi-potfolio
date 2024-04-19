import React, { useContext } from 'react'
import database from '../alldata/data'


const About = () => {
  let {about}=useContext(database)
  return (
    <section id='About' className='about flex flex-col sm:flex-row bg-color px-5 py-10 justify-center' >

      <div className='w-full flex justify-center'>
      <img className='' src={about.image} alt="f" />
      </div>
      <div className=' w-full  flex justify-center '>
        <div className='flex flex-col justify-center text-white'>
          <div className='flex flex-col justify-center'>
            <h1 className='text-4xl text-white border-b-4 w-[170px] border-bg-color-2  font-bold   mb-4' >{about.title}</h1>
            <p className='pb-3'>{about.para_1} </p>
            <p className='pb-3'>{about.para_2}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About