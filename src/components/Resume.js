import React, { useContext } from 'react'

import { Link } from 'react-router-dom'
import database from '../alldata/data'
import fff from '../img/Resume.pdf';


const Resume = () => {
   let { resume } = useContext(database)
   const openPdfInNewTab = () => {
    window.open(fff, '_blank')
  }

    const downloadPdf = () => {
      const link = document.createElement('a');
      link.href = fff;
      link.download = 'Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }


 
    return (
      <section id='Resume' className='flex  flex-col sm:flex-row bg-color py-10 px-5 gap-8'>
        <div className=' sm:w-1/2 flex justify-center sm:justify-end'>
          <div className=' flex justify-center '>
            <img className='rounded w-[300px]' src={resume.img} alt="" />
          </div>
        </div>
        <div className='sm:w-1/2 flex justify-center sm:justify-start'>
          <div className='flex flex-col justify-center text-white text-center'>
            <h1 className='w-[150px] text-4xl text-white border-b-4 mx-auto  border-bg-color-2  font-bold   mb-4'>{resume.title}</h1>
            <p className='flex -flex-col sm:flex-row gap-5'>
              <Link onClick={openPdfInNewTab} to={'/resume'} > <p className='btn hover:border-2 bg-color-2 rounded border-white min-w-[120px] text-center' >{resume.View_btn}</p></Link>
              <a onClick={downloadPdf} className='btn hover:border-2 bg-color-2 rounded border-white min-w-[120px] text-center' download='Pasupathi_Resume' href={resume.pdf}>{resume.Downlode_btn}</a>

            </p>
          </div>
        </div>
      </section>
    )}


export default Resume