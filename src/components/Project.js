import React, { useContext } from 'react'

import { Link } from 'react-router-dom'
import database from '../alldata/data'

const Project = () => {

    let {project}=useContext(database)
    return (
        <section id='Project' className='flex flex-col py-10 px-5 justify-center bg-color-2 text-white'>
            <div className='w-full'>
                <div className='flex  flex-col w-full '>
                    <h1 className='w-[150px] text-4xl text-white border-b-4  border-bg-color-1  font-bold   mb-4'> {project.title}</h1>
                    {/* <p>{project.para_1} </p> */}
                </div>

            </div>
            <div className='w-full flex justify-center cursor-pointer '>
               

                <div className='flex gap-5 flex-col sm:flex-row justify-center w-full   '>
                    <div className='relative flex overflow-hidden rounded object-cover w-full  '>
                        <img  className='  w-full h-[200px]  ' src={project.project_img[0]} alt="" />
                        <div className='absolute top-0 left-0 right-0 bottom-0 bg-color opacity-0 duration-500  hover:opacity-100 flex justify-center flex-col items-center'>
                            <p className='text-center font-bold text-white mb-3 text-2xl'>{project.projects_1}</p>
                            <Link  className='btn hover:border-2 bg-color-2 rounded border-white font-semibold'  to={'/Advanceproject'}>{project.btn}</Link>
                        </div>
                    </div>
                    <div className='relative flex  overflow-hidden rounded object-cover w-full   '>
                        <img  className='  w-full h-[200px]  ' src={project.project_img[1]} alt="" />
                        <div  className='absolute top-0 left-0 right-0 bottom-0 bg-color opacity-0 duration-500  hover:opacity-100 flex justify-center flex-col items-center'>
                            <p  className='text-center font-bold text-white mb-3 text-2xl'>{project.projects_2}</p>
                            <Link  className='btn hover:border-2 bg-color-2 rounded border-white font-semibold'  to={'/Miniproject'}> {project.btn}</Link>
                        </div>
                    </div>
                    <div className='relative flex  overflow-hidden rounded w-full'>
                        <img className='w-full h-[200px] ' src={project.project_img[2]} alt="" />
                        <div  className='absolute top-0 left-0 right-0 bottom-0 bg-color opacity-0 duration-500  hover:opacity-100 flex justify-center flex-col items-center'>
                            <p  className='font-bold text-white mb-3 text-2xl'>{project.projects_3}</p>
                            {/* <a className='btn hover:border-2 bg-color-2 rounded border-white' href='#'>View projects</a> */}
                            <Link  className='btn hover:border-2 bg-color-2 rounded border-white font-semibold'  to={'/Gamesproject'}> {project.btn}</Link>
                        </div>
                    </div>





                </div>

            </div>
        </section>
    )
}

export default Project