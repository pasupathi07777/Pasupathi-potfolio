import React, { useContext } from 'react'
import database from '../alldata/data'


const About = () => {
  let { about } = useContext(database)
  return (
    <section id='About' className='about flex flex-col sm:flex-row bg-color px-5 py-10 justify-center gap-3 sm:gap-0 ' >

      <div className='w-full flex justify-center object-cover sm:px-5'>
        <img className='  w-[300px]  rounded sm:max-w-[300px] min-w-[300px] h-[300px] ' src={about.image} alt="f" />
      </div>
      <div className=' w-full  flex justify-center'>
        <div className='flex flex-col justify-center text-white w-full'>
          <div className='flex flex-col justify-center w-full '>
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