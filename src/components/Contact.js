import React, { useContext } from 'react'
import database from '../alldata/data'

const Contact = () => {
  let { contact } = useContext(database)
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



//

// import React, { useContext } from 'react';
// import database from '../alldata/data';

// const Contact = () => {
//   let { contact } = useContext(database);

//   return (
//     <section className="container  px-4 py-8 bg-color-2">
//       <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
//         {/* Email */}
//         <div className="bg-gray-100 p-3 rounded-lg flex text-center w-fit gap-2">
//           <h3 className="text-lg font-semibold mb-2 w-full ">Email</h3>
//           <a href={`mailto:${contact.gamil}`} className="text-blue-500 hover:underline text-center w-full">{contact.gamil}</a>
//         </div>
//         {/* Phone */}
//         <div className="bg-gray-100 p-3 rounded-lg flex text-center gap-2 w-fit">
//           <h3 className="text-lg font-semibold mb-2 w-full">Phone</h3>
//           <p className="text-gray-700 w-full">{contact.mob_number}</p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;




