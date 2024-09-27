import React from 'react';
import profile from '../../img/header.jpg'

const NavBar = () => {
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
            <a href="#resume" className="hover:text-orange-500">What I Do</a>
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
      <div className="flex space-x-4 mt-8">
        <a href="#" className="hover:text-orange-500">
          <i className="fab fa-facebook-f"></i> {/* Font Awesome icon */}
        </a>
        <a href="#" className="hover:text-orange-500">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="hover:text-orange-500">
          <i className="fab fa-dribbble"></i>
        </a>
        <a href="#" className="hover:text-orange-500">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
