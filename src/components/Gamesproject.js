// import React, { useContext, useEffect } from 'react';
// import database from '../alldata/data';

// const Gamesproject = () => {
//   let { gamesproject } = useContext(database);

//   useEffect(() => {
//     // Scroll to the top when the component mounts
//     window.scrollTo(0, 0);
//   }, []); // Empty dependency array ensures this effect runs only once after mounting

//   return (
//     <main className="w-full h-full flex flex-wrap bg-[#111418] justify-center sm:justify-start px-2 py-2 m-0 overflow-y-auto bg-color cursor-pointer min-h-screen">
//       {gamesproject.details.map((a, i) =>
//         <div key={i} className="project bg-transparent rounded overflow-hidden w-full max-w-[350px] sm:w-1/2 md:w-1/4 p-2 h-[200px] relative">
//           <img className="h-full w-full rounded" src={a.img} alt="" />
//           <div className='absolute top-[8px] left-[8px] right-[8px] bottom-[8px] bg-color-2 rounded opacity-0 duration-500 hover:opacity-100 flex justify-center flex-col items-center'>
//             <p className='font-bold text-white mb-3 text-2xl'>{a.name}</p>
//             <a className='hover:border-2 bg-color px-2 pb-1 text-white rounded border-white font-semibold' href={a.link}>view project</a>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }

// export default Gamesproject;
// import React, { useContext, useEffect } from 'react';
// import database from '../alldata/data';

// const Gamesproject = () => {
//   let { gamesproject } = useContext(database);

//   useEffect(() => {
//     // Scroll to the top when the component mounts
//     window.scrollTo(0, 0);
//   }, []); // Empty dependency array ensures this effect runs only once after mounting

//   return (
//     <main className="w-full flex flex-wrap justify-center sm:justify-start px-2 py-2 m-0 bg-[#111418] cursor-pointer min-h-screen">
//       {gamesproject.details.map((a, i) => (
//         <div
//           key={i}
//           className="bg-transparent rounded-lg overflow-hidden w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 h-auto relative group shadow-lg transition-transform transform hover:scale-90"
//         >
//           <img
//             className="h-[180px] sm:h-[200px] w-full rounded-lg object-cover transform transition-transform duration-300 group-hover:scale-110"
//             src={a.img}
//             alt={a.name}
//           />
//           <div className="absolute top-[0px] left-[0px] right-[0px] bottom-[0px] bg-black bg-opacity-70 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center flex-col items-center">
//             <p className="font-bold text-white mb-3 text-lg sm:text-xl lg:text-2xl text-center transition-transform duration-500 group-hover:translate-y-0 translate-y-5">
//               {a.name}
//             </p>
//             <a
//               className="px-3 py-1.5 bg-[#F97316] text-white rounded-md border-2 border-transparent font-semibold transition-colors duration-300 hover:bg-transparent hover:text-[#F97316] hover:border-[#F97316]"
//               href={a.link}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               View Project
//             </a>
//           </div>
//         </div>
//       ))}
//     </main>
//   );
// };

// export default Gamesproject;
import React, { useContext, useEffect } from 'react';
import database from '../alldata/data';

const Gamesproject = () => {
  let { gamesproject } = useContext(database);

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this effect runs only once after mounting

  return (
    <main className="w-full flex flex-wrap justify-center sm:justify-start px-2 py-2 m-0 bg-[#111418] cursor-pointer min-h-screen">
      {gamesproject.details.map((a, i) => (
        <div
          key={i}
          className="bg-transparent rounded-lg overflow-hidden w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 h-[220px] relative group shadow-lg transition-transform transform hover:scale-90"
        >
          <img
            className="h-full w-full rounded-lg object-cover transform transition-transform duration-300 group-hover:scale-105"
            src={a.img}
            alt={a.name}
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center flex-col items-center">
            <p className="font-bold text-white mb-3 text-lg sm:text-xl lg:text-2xl text-center transition-transform duration-500 group-hover:translate-y-0 translate-y-5">
              {a.name}
            </p>
            <a
              className="px-3 py-1.5 bg-[#F97316] text-white rounded-md border-2 border-transparent font-semibold transition-colors duration-300 hover:bg-transparent hover:text-[#F97316] hover:border-[#F97316]"
              href={a.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Gamesproject;
