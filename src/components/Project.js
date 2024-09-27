import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import database from '../alldata/data';
import Title from './title/Title';

const Project = () => {
  let { project } = useContext(database);

  return (
    <section
      id="project"
      className="flex flex-col px-5 bg-color-2 min-h-screen w-full bg-[#343A40]"
    >
      <Title titleOne={"PROJECT"} titleTwo={"My Work"} bg={""} />

      <div className="w-full h-full flex justify-center items-center my-auto">
        <div className="flex gap-5 h-full flex-col sm:flex-row justify-center items-center w-full">
          {/* First Project */}
          <div className="relative flex overflow-hidden rounded object-cover w-full group">
            <img
              className="w-full h-[200px] transform transition-transform duration-500 group-hover:scale-110"
              src={project.project_img[0]}
              alt=""
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex justify-center flex-col items-center">
              <p className="text-center font-bold text-white mb-3 text-2xl transform transition-transform duration-500 group-hover:translate-y-0 translate-y-5">
                {project.projects_1}
              </p>
              <Link
                className="btn bg-color-2 rounded border-white font-semibold transform transition-transform duration-500 group-hover:scale-110 text-[#F97316] hover:bg-[#F97316] hover:text-white hover:border-[#F97316] px-4 py-2 border-2 shadow-md hover:shadow-lg"
                to={'/Advanceproject'}
              >
                {project.btn}
              </Link>
            </div>
          </div>

          {/* Second Project */}
          <div className="relative flex overflow-hidden rounded object-cover w-full group">
            <img
              className="w-full h-[200px] transform transition-transform duration-500 group-hover:scale-110"
              src={project.project_img[1]}
              alt=""
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex justify-center flex-col items-center">
              <p className="text-center font-bold text-white mb-3 text-2xl transform transition-transform duration-500 group-hover:translate-y-0 translate-y-5">
                {project.projects_2}
              </p>
              <Link
                className="btn bg-color-2 rounded border-white font-semibold transform transition-transform duration-500 group-hover:scale-110 text-[#F97316] hover:bg-[#F97316] hover:text-white hover:border-[#F97316] px-4 py-2 border-2 shadow-md hover:shadow-lg"
                to={'/Miniproject'}
              >
                {project.btn}
              </Link>
            </div>
          </div>

          {/* Third Project */}
          <div className="relative flex overflow-hidden rounded object-cover w-full group">
            <img
              className="w-full h-[200px] transform transition-transform duration-500 group-hover:scale-110"
              src={project.project_img[2]}
              alt=""
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex justify-center flex-col items-center">
              <p className="font-bold text-white mb-3 text-2xl transform transition-transform duration-500 group-hover:translate-y-0 translate-y-5">
                {project.projects_3}
              </p>
              <Link
                className="btn bg-color-2 rounded border-white font-semibold transform transition-transform duration-500 group-hover:scale-110 text-[#F97316] hover:bg-[#F97316] hover:text-white hover:border-[#F97316] px-4 py-2 border-2 shadow-md hover:shadow-lg"
                to={'/Gamesproject'}
              >
                {project.btn}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;

