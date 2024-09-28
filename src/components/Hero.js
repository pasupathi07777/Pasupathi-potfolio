// import React from 'react';
// import { useContext } from 'react';
// import database from '../alldata/data';
// // import code from '../img/code.webp';
// import code from '../img/code.jpg';
// import icons from '../data/allIicons';

// const Hero = () => {
//     let { details } = useContext(database);



//     return (
//         <div id="home"
//             className="relative w-full h-screen bg-cover bg-center"
//             style={{
//                 backgroundImage: `url(${code})`,
//             }}
//         >
//             {/* Black overlay */}
//             <div className="absolute inset-0 z-20  bg-black bg-opacity-50"></div>

//             {/* Main content */}
//             <div className="relative z-40 flex flex-col items-center justify-center h-full text-white">
//                 <h1 className="text-4xl md:text-3xlxl font-bold">Welcome</h1>

//                 <div className="overflow-hidden w-fit flex items-center font-semibold text-white text-2xl">
//                     <p className="slider pe-2 font-semibold text-white text-2xl md:text-6xl mt-4 animate-slide">
//                         {details.my_domine}
//                     </p>
//                 </div>
//                 <p className="text-lg md:text-2xl mt-4">Based in Nagercoil, Tamil Nadu, India.</p>


//                 <button className="mt-6 px-8 py-3 text-lg md:text-xl border-2 border-orange-400 text-orange-400 rounded-full hover:bg-orange-400 hover:text-black transition duration-300">
//                     <a href="#contact"> Hire Me</a>
//                 </button>
//             </div>


//             <p className="  absolute bottom-16 z-40   w-full flex justify-center h-[100px] cursor-pointer" >
//                 <a href='#about' className="text-white text-3xl down-arrow  text-[330px] cursor-pointer ">
//                     {icons.down}


//                 </a>
//             </p>




//         </div>
//     );
// };

// export default Hero;


import React, { useContext } from 'react';
import database from '../alldata/data';
import code from '../img/code.jpg';
import icons from '../data/allIicons';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const Hero = () => {
    const { details } = useContext(database);

    // Typewriter Effect
    const [text] = useTypewriter({
        words: [details.my_domine, 'MERN Stack Developer', 'Full Stack Developer',],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 50,
    });

    return (
        <div
            id="home"
            className="relative w-full h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${code})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
        >
            {/* Black Overlay */}
            <div className="absolute inset-0 z-20 bg-black bg-opacity-50"></div>

            {/* Main Content */}
            <div className="relative z-40 flex flex-col items-center justify-center h-full text-white">
                <motion.h1
                    className="text-4xl md:text-6xl font-bold"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    Welcome
                </motion.h1>

                {/* Typewriter Effect */}
                <motion.p
                    className="font-semibold text-2xl md:text-4xl mt-4 flex items-center"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    {text}
                    <Cursor cursorColor="#F97316" />
                </motion.p>

                <p className="text-lg md:text-2xl mt-4">
                    Based in Nagercoil, Tamil Nadu, India.
                </p>

                <button className="mt-6 px-8 py-3 text-lg md:text-xl border-2 border-orange-400 text-orange-400 rounded-full hover:bg-orange-400 hover:text-black transition duration-300">
                    <a href="#contact">Hire Me</a>
                </button>
            </div>

            {/* Down Arrow */}
             <p className="  absolute bottom-12 z-40   w-full flex justify-center h-[100px] cursor-pointer" >
                <a href='#about' className="text-white text-3xl down-arrow  text-[330px] cursor-pointer ">
                   {icons.down}
               </a>
           </p>
        </div>
    );
};

export default Hero;
