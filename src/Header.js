import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { Fa500Px } from 'react-icons/fa'


const Header = () => {

    let [togglemenu, settogglemenu] = useState(false)
    return (
        <header className='flex justify-between px-5 py-1 bg-color-2 fixed top-0 left-0 z-10 w-full'>
            <a className='font-bold text-black' href="#">Pasupathi.S</a>
            <nav className='hidden sm:block'>
                <ul className=' flex text-white '>
                    <li><a href="#hero">Home</a></li>
                    <li><a href="/#About">About</a></li>
                    <li><a href="/#Project">Project</a></li>
                    <li><a href="/#Resume">Resume</a></li>
                    <li><a href="/#Contact">Contact</a></li>

                </ul>
            </nav>
            {togglemenu && <nav className='block sm:hidden '  >
                <ul className='flex flex-col mobile-view-nav    text-white  '>
                    <li className='text-center p-0'><a onClick={()=>settogglemenu(false)} href="#hero">Home</a></li>
                    <li className='text-center p-0'><a onClick={()=>settogglemenu(false)} href="#About">About</a></li>
                    <li className='text-center p-0'><a onClick={()=>settogglemenu(false)} href="#Project">Project</a></li>
                    <li className='text-center p-0'><a onClick={()=>settogglemenu(false)} href="#Resume">Project</a></li>
                    <li className='text-center p-0'><a onClick={()=>settogglemenu(false)} href="#Contact">Contact</a></li>

                </ul>
            </nav>}
            <button onClick={() => settogglemenu(!togglemenu)} className='block sm:hidden'><Bars3Icon className='text-white h-6 ' />



            </button>

        </header>
    )
}

export default Header