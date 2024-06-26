import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'



const Header = () => {

    let [togglemenu, settogglemenu] = useState(false)
    return (
        <header className='flex justify-between px-5 py-1 bg-color-2 fixed top-0 left-0 z-10 w-full'>
            <p className='font-bold text-black hover:text-white' >Pasupathi.S</p>
            <nav className='hidden sm:block'>
                <ul className=' flex text-white '>
                    <li className=' hover:bg-[#2b2d77] h-full rounded'><a href="#hero">Home</a></li>
                    <li className=' hover:bg-[#2b2d77] h-full rounded'><a href="/#About">About</a></li>
                    <li className=' hover:bg-[#2b2d77] h-full rounded'><a href="/#Project">Project</a></li>
                    <li className=' hover:bg-[#2b2d77] h-full rounded'><a href="/#Resume">Resume</a></li>
                    <li className=' hover:bg-[#2b2d77] h-full rounded' ><a  href="/#Contact">Contact</a></li>

                </ul>
            </nav>
            {togglemenu && <nav className='block sm:hidden '  >
                <ul className='flex flex-col mobile-view-nav    text-white  '>
                    <li className='text-center p-0'><a className='w-full' onClick={()=>settogglemenu(false)} href="#hero">Home</a></li>
                    <li className='text-center p-0'><a className='w-full' onClick={()=>settogglemenu(false)} href="#About">About</a></li>
                    <li className='text-center p-0'><a className='w-full' onClick={()=>settogglemenu(false)} href="#Project">Project</a></li>
                    <li className='text-center p-0'><a className='w-full' onClick={()=>settogglemenu(false)} href="#Resume">Resume</a></li>
                    <li className='text-center p-0'><a className='w-full' onClick={()=>settogglemenu(false)} href="#Contact">Contact</a></li>

                </ul>
            </nav>}
            <button onClick={() => settogglemenu(!togglemenu)} className='block sm:hidden'><Bars3Icon className='text-white h-6 ' />



            </button>

        </header>
    )
}

export default Header