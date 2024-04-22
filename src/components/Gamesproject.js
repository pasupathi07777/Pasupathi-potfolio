import React, { useContext, useEffect } from 'react';
import database from '../alldata/data';

const Gamesproject = () => {
  let { gamesproject } = useContext(database);

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this effect runs only once after mounting

  return (
    <main className="w-full h-full flex flex-wrap justify-center sm:justify-start px-2 py-2 m-0 overflow-y-auto bg-color cursor-pointer">
      {gamesproject.details.map((a, i) =>
        <div key={i} className="project bg-transparent rounded overflow-hidden w-full max-w-[350px] sm:w-1/2 md:w-1/4 p-2 h-[200px] relative">
          <img className="h-full w-full rounded" src={a.img} alt="" />
          <div className='absolute top-[8px] left-[8px] right-[8px] bottom-[8px] bg-color-2 rounded opacity-0 duration-500 hover:opacity-100 flex justify-center flex-col items-center'>
            <p className='font-bold text-white mb-3 text-2xl'>{a.name}</p>
            <a className='hover:border-2 bg-color px-2 pb-1 text-white rounded border-white font-semibold' href={a.link}>view project</a>
          </div>
        </div>
      )}
    </main>
  );
}

export default Gamesproject;
