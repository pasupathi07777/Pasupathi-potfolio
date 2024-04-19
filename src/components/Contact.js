import React, { useContext } from 'react'
import database from '../alldata/data'

const Contact = () => {
  let {contact}=useContext(database)
  return (
    <section id='Contact' className='flex  flex-col sm:flex-row bg-color-2 py-10 px-5 justify-center  text-white '>

        <div className='flex flex-col items-center '>
        <h1 className='w-[150px] text-4xl border-b-4  border-bg-color-1  font-bold   mb-4 '>{contact.title}</h1>
        
        <p>{database.para_1}</p>
        <p><span className='font-bold'>Email : {contact.gamil}</span></p>
        <p><span className='font-bold'>Phone :{contact.mob_number}</span></p>
        </div>
       
    
    </section>
  )
}

export default Contact 