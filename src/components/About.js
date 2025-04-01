import React, { useContext } from 'react';
import database from '../alldata/data';
import Title from './title/Title';
import fff from '../img/Resume.pdf';
import { Link } from 'react-router-dom';

const About = () => {
    let { about } = useContext(database);

    return (
        <section
            id="about" className="flex items-center ustify-center bg-[rgb(33,37,41)] flex-col w-full md:min-h-screen"
        >
            <div className="title w-full ">
                <Title titleOne={" ABOUT ME"} titleTwo={"     Know Me More"} bg={"#212529"} />
            </div>
            <section className="text-white px-8 md:p-16 flex flex-col md:flex-row gap-5 items-start">
                {/* Left Section */}
                <div className="flex-1">
                    <h2 className="text-2xl md:text-4xl font-bold mb-4">
                        I'm <span className="text-orange-500">{about.name}</span>, A MERN Full Stack Developer
                    </h2>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                        {about.para_1}
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        {about.para_2}
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        {about.skills}
                    </p>
                </div>

                {/* Right Section */}
                <div className="p-6 rounded-lg w-full md:w-1/3 text-[16px]">
                    <div className="mb-4 space-y-2 capitalize">
                        <p className=" text-sm font-semibold text-gray-300">
                            Name: <span className="font-normal">{about.name}</span>
                        </p>
                        <p className="text-sm  font-semibold text-gray-300 lowercase">
                            Email: <span className="font-normal text-orange-500">{about.gmail}</span>
                        </p>
                        <p className="text-sm  font-semibold text-gray-300">
                            Age: <span className="font-normal">{about.age}</span>
                        </p>
                        <p className="text-sm  font-semibold text-gray-300">
                            From: <span className="font-normal">{about.from}</span>
                        </p>
                    </div>


                    <div className="btn-group text-sm sm:gap-4 md:gap-0 sm:flex md:flex-col">
                        <button className="mt-4 w-full bg-orange-500 text-white py-1 px-4 rounded-md hover:bg-orange-600 transition duration-300 ease-in-out">
                            <a href={fff} download>
                                Download CV
                            </a>
                        </button>
                        <button className="mt-4 w-full flex  bg-green-500 text-white py-1 px-4 rounded-md hover:bg-green-600 transition duration-300 ease-in-out">
                            <Link className='w-full' to={"resume"}> View CV</Link>
                        </button>
                    </div>

                </div>
            </section>
        </section>
    );
};

export default About;


