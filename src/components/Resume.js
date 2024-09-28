import React, { useContext } from 'react';
import database from '../alldata/data';
import fff from '../img/Resume.pdf';
import Title from './title/Title';
import { FaDownload } from 'react-icons/fa';

const Resume = () => {
  let { about } = useContext(database);

  return (
    <section id='resume' className='scrollable-home flex flex-col min-h-screen bg-[rgb(33,37,41)] w-full'>
      <div className="w-full">
        {/* Title Section */}
        <div className="relative w-full">
          <Title titleOne={"SUMMARY"} titleTwo={"Resume"} bg={"#212529"} />
        </div>

        {/* Content Section */}
        <div className="text-white p-8 pt-0 rounded-lg w-full">
          {/* Education Section */}
          <h2 className="text-3xl font-bold mb-6">{about.title_2}</h2>
          <div className="mb-6 bg-gray-800 p-4 rounded-lg">
            <span className="bg-orange-500 text-white text-sm px-2 py-1 rounded-lg">{about.college_1_year}</span>
            <h3 className="text-xl font-bold mt-2">{about.college_1_degree}</h3>
            <p className="text-orange-400">{about.college_1}</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <span className="bg-orange-500 text-white text-sm px-2 py-1 rounded-lg">{about.college_2_year}</span>
            <h3 className="text-xl font-bold mt-2">{about.college_2_degree}</h3>
            <p className="text-orange-400">{about.college_2}</p>
          </div>

          {/* Experience Section */}
          <div className="mt-10">
            <h2 className="text-3xl font-bold mb-6">Experience</h2>
            {about.experience.map((exp, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg mb-4">
                <h3 className="text-xl font-bold">{exp.jobType}</h3>
                <p className="text-orange-400">{exp.company}</p>
                <p className="text-gray-400">{exp.duration}</p>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>

          {/* Certification Section */}
          <div className="mt-10">
            <h2 className="text-3xl font-bold mb-6">Certifications</h2>
            {about.certifications.map((cert, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg mb-4">
                <h3 className="text-xl font-bold">{cert.course}</h3>
                <p className="text-orange-400">{cert.provider}</p>
                <p className="text-gray-400">{cert.duration}</p>
                <p>{cert.description}</p>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="mt-10 ">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Skills</h2>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md flex items-center flex-wrap">
              {about.skills.split(',').map((skill, index) => (
                <span
                  key={index}
                  className=" bg-orange-500 inline-block  text-white text-base lg:text-lg xl:text-xl font-semibold px-4 py-2 rounded-full mr-3 mb-3 transform hover:scale-105 transition-transform duration-200"
                >
                  {skill.trim()}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <a
              href={fff}
              download
              className="flex items-center gap-2 px-6 py-3 border border-gray-400 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition duration-300 ease-in-out"
            >
              Download CV <FaDownload className="text-gray-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

