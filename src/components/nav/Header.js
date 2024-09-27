import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';

const Header = () => {
  let [togglemenu, settogglemenu] = useState(false);

  return (
    <header className=" relative">



      <div className="flex justify-between px-5 py-10 w-full bg-[#111418] h-[60px] items-center z-50 absolute ">

        <p className="font-medium text-[20px] text-white hover:text-white">Pasupathi.S</p>


        <nav className="hidden sm:block z-50">
          <ul className="flex text-white">
            <li className="hover:bg-[#2b2d77] h-full rounded"><a href="#home">Home</a></li>
            <li className="hover:bg-[#2b2d77] h-full rounded"><a href="#about">About</a></li>
            <li className="hover:bg-[#2b2d77] h-full rounded"><a href="#project">Project</a></li>
            <li className="hover:bg-[#2b2d77] h-full rounded"><a href="#resume">Resume</a></li>
            <li className="hover:bg-[#2b2d77] h-full rounded"><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <button onClick={() => settogglemenu(!togglemenu)} className="block sm:hidden z-50">
          <Bars3Icon className="text-white h-6" />
        </button>
      </div>

      <nav className={`block sm:hidden z-0   w-full  transition-all bg-[#030303] duration-700  absolute left-0 right-0 ${togglemenu ? "top-[80px]" : "-top-[400px] "}`}>
        <ul className="flex flex-col mobile-view-nav text-white px-2 ">
          <li className="text-center p-0 border-b-[1px] border-gray-800 py-2 hover:text-[#F97316] "><a className="w-full" onClick={() => settogglemenu(false)} href="#home">Home</a></li>
          <li className="text-center p-0 border-b-[1px] border-gray-800 py-2 hover:text-[#F97316] "><a className="w-full" onClick={() => settogglemenu(false)} href="#about">About</a></li>
          <li className="text-center p-0 border-b-[1px] border-gray-800 py-2 hover:text-[#F97316] "><a className="w-full" onClick={() => settogglemenu(false)} href="#project">Project</a></li>
          <li className="text-center p-0 border-b-[1px] border-gray-800 py-2 hover:text-[#F97316] "><a className="w-full" onClick={() => settogglemenu(false)} href="#resume">Resume</a></li>
          <li className="text-center p-0 border-b-[1px] border-gray-800 py-2 hover:text-[#F97316] border-gray-10000 "><a className="w-full" onClick={() => settogglemenu(false)} href="#contact">Contact</a></li>
        </ul>
      </nav>


    </header>
  );
};

export default Header;
