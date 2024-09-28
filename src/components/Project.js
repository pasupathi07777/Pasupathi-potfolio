// // import React, { useContext } from 'react';
// // import { Link } from 'react-router-dom';
// // import database from '../alldata/data';
// // import Title from './title/Title';

// // const Project = () => {
// //   let { project } = useContext(database);

// //   return (
// //     <section id="project" className="flex flex-col px-5 bg-[#343A40] pb-10">
// //       <Title titleOne={project.title} titleTwo={"My Work"} bg={""} />
    

// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {project.projects.map((proj, index) => (
// //           <div
// //             key={index}
// //             className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
// //           >
// //             <img
// //               className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-105"
// //               src={proj.img}
// //               alt={proj.title}
// //             />
// //             <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-center items-center text-center p-4">
// //               <h3 className="text-white font-bold text-xl">{proj.title}</h3>
// //               <p className="text-white mt-2 mb-4 line-clamp-2">{proj.description}</p>
// //               {proj.site ? (
// //                 <a
// //                   className="btn bg-[#F97316] rounded-md font-semibold text-white px-4 py-2 hover:bg-[#e67e22] transition-colors duration-300"
// //                   href={proj.site}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                 >
// //                   Visit Site
// //                 </a>
// //               ) : (
// //                 <Link
// //                   className="btn bg-[#F97316] rounded-md font-semibold text-white px-4 py-2 hover:bg-[#e67e22] transition-colors duration-300"
// //                   to={proj.link}
// //                 >
// //                   Explore
// //                 </Link>
// //               )}
// //             </div>
// //           </div>
// //         ))}
// //       </div>

     
// //     </section>
// //   );
// // };

// // export default Project;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import database from '../alldata/data';
import Title from './title/Title';

const Project = () => {
  let { project } = useContext(database);

  return (
    <section id="project" className="flex flex-col px-5 bg-[#343A40] pb-10">
      <Title titleOne={project.title} titleTwo={"My Work"} bg={""} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {project.projects.map((proj, index) => {
          if (index === 2) {
            // This is the "Visit My All Projects" box without an image
            return (
              <div key={index} className="flex flex-col justify-center items-center h-[200px] bg-gray-800 text-white rounded-lg shadow-lg p-6">
                <h2 className="font-bold text-2xl mb-2">Visit My All Projects</h2>
                <p className="text-center mb-4">
                  Click the button below to explore more projects and see my full range of work!
                </p>
                <Link
                  className="bg-[#F97316] rounded-md font-semibold text-white px-4 py-1 hover:bg-[#e67e22] transition-colors duration-300"
                  to="/myproject"
                >
                  View All Projects
                </Link>
              </div>
            );
          }

          // Return the regular project boxes for other indices
          return (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                className="w-full h-[200px]  transition-transform duration-500 group-hover:scale-105"
                src={proj.img}
                alt={proj.title}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-center items-center text-center p-4">
                <h3 className="text-white font-bold text-xl">{proj.title}</h3>
                <p className="text-white mt-2 mb-4 line-clamp-2">{proj.description}</p>
                {proj.site ? (
                  <a
                    className="btn bg-[#F97316] rounded-md font-semibold text-white px-4 py-2 hover:bg-[#e67e22] transition-colors duration-300"
                    href={proj.site}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Site
                  </a>
                ) : (
                  <Link
                    className="btn bg-[#F97316] rounded-md font-semibold text-white px-4 py-2 hover:bg-[#e67e22] transition-colors duration-300"
                    to={proj.link}
                  >
                    Explore
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;







