import React from 'react'
import resume from '../img/resume.png'
import Pasupathi_Resume from '../img/Resume.pdf'

const Resume = () => {
  return (
    <section id='Resume' className='flex  flex-col sm:flex-row bg-color py-10 px-5 gap-8'>
      <div className=' sm:w-1/2 flex justify-center sm:justify-end'>
        <div className=' flex justify-center '>
          <img className='rounded' src={resume} alt="" />
        </div>
      </div>
      <div className='sm:w-1/2 flex justify-center sm:justify-start'>
        <div className='flex flex-col justify-center text-white'>
          <h1 className='w-[150px] text-4xl text-white border-b-4  border-bg-color-2  font-bold   mb-4'>Resume</h1>
          <p className=''>You can view my resume <a  className='btn hover:border-2 bg-color-2 rounded border-white' download='Pasupathi_Resume' href={Pasupathi_Resume}>Downlode</a></p>
        </div>
      </div>
    </section>
  )
}

export default Resume