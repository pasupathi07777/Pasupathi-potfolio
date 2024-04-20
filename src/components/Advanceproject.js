// import React from 'react'
// import nostra from '../img/nostra.png'
// import restarent from '../img/restarent.png'
// import svmedia from '../img/svmedia.png'


// const Advanceproject = () => {
//     return (
//         <main className=' w-100  row row-cols-2 row-cols-sm-4   px-2 m-0   ' >
//             <div className="project bg-transparent rounded overflow-hidden col p-2 min-h-[200px] max-h-[250px]  "><a href="https://food-in-res.netlify.app/"><img className='h-full w-full rounded' src={restarent} alt="" srcset="" /></a></div>
//             <div className="project  bg-transparent rounded  overflow-hidden col p-2 min-h-[200px] max-h-[250px] "><a href="https://pasupathi-socialmedia.netlify.app/"><img className='h-full w-full  rounded' src={svmedia} alt="" srcset="" /></a></div>

//             <div className="project  -bg-transparent rounded  overflow-hidden col p-2 min-h-[200px] max-h-[250px]"><a href="https://nostra-ecomer.netlify.app/"><img className='h-full w-full rounded' src={nostra} alt="" srcset="" /></a></div>
//             <div className="project  bg-transparent rounded  overflow-hidden col p-2 min-h-[200px] max-h-[250px]"><a href="https://nostra-ecomer.netlify.app/"><img className='h-full w-full rounded' src={nostra} alt="" srcset="" /></a></div>
//             <div className="project bg-transparent rounded overflow-hidden col p-2 min-h-[200px] max-h-[250px]  "><a href="https://food-in-res.netlify.app/"><img className='h-full w-full rounded' src={restarent} alt="" srcset="" /></a></div>
//             <div className="project  bg-transparent rounded  overflow-hidden col p-2 min-h-[200px] max-h-[250px] "><a href="https://pasupathi-socialmedia.netlify.app/"><img className='h-full w-full rounded' src={svmedia} alt="" srcset="" /></a></div>

//             <div className="project  -bg-transparent rounded  overflow-hidden col p-2 min-h-[200px] max-h-[250px]"><a href="https://nostra-ecomer.netlify.app/"><img className='h-full w-full rounded' src={nostra} alt="" srcset="" /></a></div>
//             <div className="project  bg-transparent rounded  overflow-hidden col p-2 min-h-[200px] max-h-[250px] "><a href="https://nostra-ecomer.netlify.app/"><img className='h-full w-full rounded' src={nostra} alt="" srcset="" /></a></div>



//         </main>
//     )
// }

// export default Advanceproject


import React, { useContext } from 'react';
import database from '../alldata/data';


const Advanceproject = () => {
    let { advancrproject } = useContext(database)
    return (
        <main className="w-full flex flex-wrap justify-center sm:justify-start px-2 py-2 m-0">
            {advancrproject.details.map((a,i) =>
                <div key={i} className="project bg-transparent rounded overflow-hidden w-full  max-w-[350px] sm:w-1/2 md:w-1/4 p-2 h-[200px] ">
                    <a href={a.link}>
                        <img className="h-full w-full rounded" src={a.img} alt="" />
                    </a>
                </div>
            )}


            
        </main>
    );
}

export default Advanceproject;




