import React, { useContext } from 'react'
import {Link} from 'react-router-dom'


import database from '../alldata/data'
import fff from '../img/Resume.pdf';


const Resume = () => {
  let { resume } = useContext(database)
  return (
  <section id='Resume' className='flex  flex-col sm:flex-row bg-color py-10 px-5 gap-5 sm:gap-10'>
    <div className=' sm:w-1/2 flex justify-center sm:justify-end'>
      <div className=' flex justify-center '>
        <img className='rounded w-[300px]' src={resume.img} alt="" />
     
      </div>
    </div>
    <div className='sm:w-1/2 flex justify-center sm:justify-start'>
      <div className='flex flex-col justify-center text-white text-center'>
        {/* <h1 className='w-[150px] text-4xl text-white border-b-4 mx-auto  border-bg-color-2  font-bold   mb-4'>{resume.title}</h1> */}
        <p className='flex  sm:flex-col gap-5'>
        
          <Link className='btn hover:border-2 bg-color-2 rounded border-white min-w-[120px] text-center font-semibold'   to={'/resume'}> {resume.View_btn}</Link> 
       
          <a  className='btn hover:border-2 bg-color-2 rounded border-white min-w-[120px] text-center font-semibold' href={fff} download={fff}> {resume.Downlode_btn}</a>
          
          
          

        </p>
        
      </div>
    </div>
  </section>
)}


export default Resume