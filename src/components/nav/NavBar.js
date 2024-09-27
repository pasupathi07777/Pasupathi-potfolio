import React from 'react';
import profile from '../../img/header.jpg'
// import database from '../../alldata/data';
const NavBar = () => {
  // let { details } = useContext(database);
  return (
    <div className="flex flex-col items-center h-screen text-white py-8  ">
      {/* Profile Image */}
      <div className="rounded-full  overflow-hidden w-40  ]  border-[#343A40] ">
        <img
          src={profile} // replace with actual image URL
          alt="profile"
          className=" w-full h-full"
        />
      </div>

      {/* Name */}
      <h1 className="text-2xl font-bold mt-4">Pasupathi</h1>

      {/* Navigation Links */}
      <nav className="mt-8">
        <ul className="space-y-4 text-center">
          <li>
            <a href="#home" className="text-orange-500 font-semibold">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-orange-500">About Me</a>
          </li>
          <li>
            <a href="#project" className="hover:text-orange-500">My Work</a>
          </li>
          <li>
            <a href="#resume" className="hover:text-orange-500">Resume</a>
          </li>


          <li>
            <a href="#contact" className="hover:text-orange-500">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Social Links */}
      {/* <div className="flex space-x-4 mt-8 w-full gap-2 ">
        <a href={details.linkin_link} className="text-gray-400 hover:text-white w-[20px] ">
          {details.linkdin_logo}
        </a>
        <a href={details.gamil_link} className="text-gray-400 hover:text-white w-[20px] ">
          {details.gamil_logo}
        </a>
        <a href={details.git_link} className="text-gray-400 hover:text-white w-[20px] ">
          {details.git_logo}
        </a>

      </div> */}
    </div>
  );
};

export default NavBar;
