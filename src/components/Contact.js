import React, { useContext } from 'react';
import Title from './title/Title';
import database from '../alldata/data';

const Contact = () => {
  let { details } = useContext(database);

  return (
    <section
      id="contact"
      className="bg-[#343A40] text-gray-400 px-4 sm:px-8 lg:px-16 min-h-screen"
    >
      {/* Title */}
      <div className="relative w-full bg-transparent">
        <Title titleOne={"CONTACT"} titleTwo={"Get in Touch"} bg={"#343A40"} />
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 pb-8 lg:pb-0">
        {/* Address Section */}
        <div>
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white">ADDRESS</h3>
            <p>Balaji illam, Near Pechiamman Kovil, Vayal Thiru, Vadalavilai, Kotter, Nagercoil-2, 629002</p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-white">CONTACT</h3>
            <p className="flex items-center">
              <span role="img" aria-label="phone" className="text-orange-500 mr-2">
                📞
              </span>
              (+91) 6374425185
            </p>

            <p className="flex items-center">
              <span role="img" aria-label="email" className="text-orange-500 mr-2">
                📧
              </span>
              pasupathi0757@gmail.com
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">FOLLOW ME</h3>
            <div className="flex space-x-4">
              <a href={details.linkin_link} className="text-gray-400 hover:text-white">
                <p>{details.linkdin_logo}</p>
              </a>
              <a href={details.gamil_link} className="text-gray-400 hover:text-white">
                {details.gamil_logo}
              </a>
              <a href={details.git_link} className="text-gray-400 hover:text-white">
                {details.git_logo}
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">SEND US A NOTE</h3>
          <form action="#" className="space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Name"
                className="w-1/2 p-3 bg-gray-800 rounded text-gray-400 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-1/2 p-3 bg-gray-800 rounded text-gray-400 focus:outline-none"
              />
            </div>
            <textarea
              rows="5"
              placeholder="Tell us more about your needs........"
              className="w-full p-3 bg-gray-800 rounded text-gray-400 focus:outline-none"
            ></textarea>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-full transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
