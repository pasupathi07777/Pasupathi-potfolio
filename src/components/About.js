
  
  
  
  
  
  import React, { useContext } from 'react'
  import database from '../alldata/data'
  
  
  const About = () => {
    let { about } = useContext(database)
    return (
      <section id='About' className='about flex flex-col sm:flex-row bg-color px-5 py-10 justify-center gap-3 sm:gap-0 ' >
  
        <div className='w-full flex justify-center object-cover sm:px-5'>
          <img className='  w-[300px]  rounded sm:max-w-[300px] min-w-[300px] h-[300px] ' src={about.image} alt="f" />
        </div>
        <div className=' w-full  flex justify-center h-full '>
          <div className='flex flex-col justify-center text-white w-full h-full'>
            <div className='flex flex-col justify-center w-full h-full '>
              <h1 className='text-4xl text-white border-b-4 w-[170px] border-bg-color-2  font-bold   mb-4' >{about.title}</h1>
              <p className='pb-3 w-full'>{about.para_1} </p>
              <p className=' w-full ' >{about.para_2} <p className='pb-3 w-full font-bold   '>{`${about.skils} more ...`}</p></p>
              
              
              
             
             
            </div>
            <div className='education w-full h-full flex flex-col gap-2  '>
            <h1 className='font-semibold text-2xl '>{about.title_2}</h1>
                <div className="box-1 w-full">
                  <div className="college_name">
                  {about.college_1}, <span className='degre font-bold'>{about.college_1_degre}</span>
                
  
                  </div>
                  <div className="years font-semibold">
                    {about.college_1_year}
  
                  </div>
                </div>
                <div className="box-2 w-full">
                <div className="college_name">
                  
                  {about.college_2}, <span  className='degre font-bold'>{about.college_2_degre}</span>
  
                  </div>
                  <div className="year font-semibold">
                    {about.college_2_year}
  
                  </div>
  
                </div>
              </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default About 