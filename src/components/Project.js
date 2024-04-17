import React from 'react'
import img1 from '../img/download1.jpg'
import img2 from '../img/download2.jpg'
import img3 from '../img/download3.jpg'

const Project = () => {
    return (
        <section id='Project' className='flex flex-col py-10 px-5 justify-center bg-color-2 text-white'>
            <div className='w-full'>
                <div className='flex  flex-col w-full mb-2'>
                    <h1 className='w-[150px] text-4xl text-white border-b-4  border-bg-color-1  font-bold   mb-4'> Project</h1>
                    <p>These are some of my best projects i have built these with react </p>
                </div>

            </div>
            <div className='w-full flex justify-center '>
                {/* <h1 className='w-[150px] text-4xl text-white border-b-4  border-bg-color-1  font-bold   mb-4'> Project</h1> */}

                <div className='flex gap-2 flex-col sm:flex-row justify-center '>
                    <div className='relative flex overflow-hidden rounded  '>
                        <img  className=' flex-grow   ' src={img1} alt="" />
                        <div className='absolute top-0 left-0 right-0 bottom-0 bg-color opacity-0 duration-500  hover:opacity-100 flex justify-center flex-col items-center'>
                            <p className='text-center mb-3'>E-comer website</p>
                            <a className='btn hover:border-2 bg-color-2 rounded border-white' href='#'>View projects</a>
                        </div>
                    </div>
                    <div className='relative flex  overflow-hidden rounded   '>
                        <img  className='flex-grow   ' src={img2} alt="" />
                        <div  className='absolute top-0 left-0 right-0 bottom-0 bg-color opacity-0 duration-500  hover:opacity-100 flex justify-center flex-col items-center'>
                            <p  className='text-center mb-3'>E-comer website</p>
                            <a className='btn hover:border-2 bg-color-2 rounded border-white' href='#'>View projects</a>
                        </div>
                    </div>
                    <div className='relative flex  overflow-hidden rounded'>
                        <img className=' flex-grow   ' src={img3} alt="" />
                        <div  className='absolute top-0 left-0 right-0 bottom-0 bg-color opacity-0 duration-500  hover:opacity-100 flex justify-center flex-col items-center'>
                            <p  className='mb-3'>E-comer website</p>
                            <a className='btn hover:border-2 bg-color-2 rounded border-white' href='#'>View projects</a>
                        </div>
                    </div>





                </div>

            </div>
        </section>
    )
}

export default Project