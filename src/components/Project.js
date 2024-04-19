import React, { useContext } from 'react'

import { Link } from 'react-router-dom'
import database from '../alldata/data'

const Project = () => {

    let {project}=useContext(database)
    return (
        <section id='Project' className='flex flex-col py-10 px-5 justify-center bg-color-2 text-white'>
            <div className='w-full'>
                <div className='flex  flex-col w-full mb-2'>
                    <h1 className='w-[150px] text-4xl text-white border-b-4  border-bg-color-1  font-bold   mb-4'> {project.title}</h1>
                    <p>{project.para_1} </p>
                </div>

            </div>
            <div className='w-full flex justify-center '>
               

                <div className='flex gap-2 flex-col sm:flex-row justify-center '>
                    <div className='relative flex overflow-hidden rounded  '>
                        <img  className=' flex-grow   ' src={project.project_img[0]} alt="" />
                        <div className='absolute top-0 left-0 right-0 bottom-0 bg-color opacity-0 duration-500  hover:opacity-100 flex justify-center flex-col items-center'>
                            <p className='text-center mb-3'>{project.projects_1}</p>
                            <Link  className='btn hover:border-2 bg-color-2 rounded border-white'  to={'/Advanceproject'}>{project.btn}</Link>
                        </div>
                    </div>
                    <div className='relative flex  overflow-hidden rounded   '>
                        <img  className='flex-grow   ' src={project.project_img[1]} alt="" />
                        <div  className='absolute top-0 left-0 right-0 bottom-0 bg-color opacity-0 duration-500  hover:opacity-100 flex justify-center flex-col items-center'>
                            <p  className='text-center mb-3'>{project.projects_2}</p>
                            <Link  className='btn hover:border-2 bg-color-2 rounded border-white'  to={'/Miniproject'}> {project.btn}</Link>
                        </div>
                    </div>
                    <div className='relative flex  overflow-hidden rounded'>
                        <img className=' flex-grow   ' src={project.project_img[2]} alt="" />
                        <div  className='absolute top-0 left-0 right-0 bottom-0 bg-color opacity-0 duration-500  hover:opacity-100 flex justify-center flex-col items-center'>
                            <p  className='mb-3'>{project.projects_3}</p>
                            {/* <a className='btn hover:border-2 bg-color-2 rounded border-white' href='#'>View projects</a> */}
                            <Link  className='btn hover:border-2 bg-color-2 rounded border-white'  to={'/Gamesproject'}> {project.btn}</Link>
                        </div>
                    </div>





                </div>

            </div>
        </section>
    )
}

export default Project