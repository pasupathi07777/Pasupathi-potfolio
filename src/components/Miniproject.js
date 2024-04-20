import React, { useContext } from 'react'
import database from '../alldata/data'

const Miniproject = () => {
  let { miniproject } = useContext(database)
  return (
    <main className="w-full flex flex-wrap justify-center sm:justify-start px-2 py-2 m-0">
      {miniproject.details.map((a, i) =>
        <div key={i} className="project bg-transparent rounded overflow-hidden w-full  max-w-[350px] sm:w-1/2 md:w-1/4 p-2 h-[200px] ">
          <a href={a.link}>
            <img className="h-full w-full rounded" src={a.img} alt="" />
          </a>
        </div>
      )}



    </main>
  )
}

export default Miniproject