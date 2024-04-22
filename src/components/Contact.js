

import React, { useContext } from 'react';
import database from '../alldata/data';

const Contact = () => {
  let { contact,details } = useContext(database);
  
  return (
    <section id='Contact' className='flex flex-col sm:flex-row py-10  bg-color-2 px-5 justify-center text-white'>
      <div className='flex flex-col items-center text-center sm:text-left gap-4'>
        <h1 className='text-4xl font-bold text-white border-b-4 border-bg-color-1 '>{contact.title}</h1>
        {/* <p className='mb-4'>{contact.description}</p> */}
        <div className='flex flex-col items-center sm:items-start'>
          <a href={details.gamil_link} className='mb-2 font-semibold'><span className='font-bold text-yellow-500'>Email:</span > {contact.gamil}</a>
          <p className='font-semibold'> <span className='font-bold text-yellow-500'>Phone:</span> {contact.mob_number}</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;












