import React, { useContext } from 'react'
import database from '../alldata/data'

const Footer = () => {
  let {details,footer}=useContext(database)
  return (
    <div className='py-2 bg-color text-center text-white'>&copy; {details.name} {footer.date} </div>
  )
}

export default Footer