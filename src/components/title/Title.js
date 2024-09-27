import React from 'react'

const Title = ({ titleOne, titleTwo,bg }) => {
    return (

        <section className={`relative flex items-center justify-center  text-white bg-[${bg}] w-full p-8 md:p-0 md:h-48  `}>

            <h1 className="absolute text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white opacity-10 select-none capitalize ">
                {titleOne}
            </h1>


            <div className="relative text-center flex flex-col items-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold capitalize ">
                    {titleTwo}
                </h2>

                <div className="w-12 h-1 bg-orange-500 mt-2"></div>
            </div>
        </section>

    )
}

export default Title