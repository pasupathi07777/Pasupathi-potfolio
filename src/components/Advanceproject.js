import React from 'react'
import nostra from '../img/nostra.png'
import restarent from '../img/restarent.png'
import svmedia from '../img/svmedia.png'


const Advanceproject = () => {//f
    return (
        <main className='  w-full bg-color flex justify-center flex-wrap gap-5 bg-color  ' >
            <div className="div  flex justify-center flex-wrap gap-5  w-full ">
                <div className="project  bg-black rounded overflow-hidden w-[300px]   h-[200px]"><a href="https://food-in-res.netlify.app/"><img className='h-full' src={restarent} alt="" srcset="" /></a></div>
                <div className="project  bg-black rounded  overflow-hidden w-[300px]   h-[200px]"><a href="https://pasupathi-socialmedia.netlify.app/"><img src={svmedia} alt="" srcset="" /></a></div>

                <div className="project  bg-black rounded  overflow-hidden w-[300px]   h-[200px]"><a href="https://nostra-ecomer.netlify.app/"><img className='h-full' src={nostra} alt="" srcset="" /></a></div>
            </div>



        </main>
    )
}

export default Advanceproject