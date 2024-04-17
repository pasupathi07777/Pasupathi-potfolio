import React from 'react'
import Aboutimg from '../img/about2.png'

const About = () => {
  return (
    <section id='About' className='about flex flex-col sm:flex-row bg-color px-5 py-10 justify-center' >

      <div className='w-full flex justify-center'>
      <img className='' src={Aboutimg} alt="" />
      </div>
      <div className=' w-full  flex justify-center '>
        <div className='flex flex-col justify-center text-white'>
          <div className='flex flex-col justify-center'>
            <h1 className='text-4xl text-white border-b-4 w-[170px] border-bg-color-2  font-bold   mb-4' >About me</h1>
            <p className='pb-3'>Hi  ,My name is Pasupathi . I am a Frontend Developer . I build butiful website using react </p>
            <p className='pb-3'>Iam a proficient in Frontend skills like Html,Css,Javascript,Bootstrap,Tailwindcss,React and mamy more...</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About