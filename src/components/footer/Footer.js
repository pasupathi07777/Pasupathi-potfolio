import React, { useContext } from 'react'
import database from '../../alldata/data'
const Footer = () => {
    let {footer}=useContext(database)
    return (
        <footer className='flex flex-col md:flex-row gap-2  justify-between p-4  text-white bg-[#212529] font-medium '>
            <p>Copyright © {footer.date} <span className='text-[#F97316] '>Pasupathi</span>. All Rights Reserved.</p>
            <div className="flex gap-3">

                <p className='text-[#F97316] ' >Terms & Policy</p>
                <p>Disclimer</p>
            </div>
        </footer>
    )
}

export default Footer