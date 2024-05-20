// hero
import { createContext } from 'react'
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Heroimg from '../img/header.jpg'
import { FaGithub } from "react-icons/fa";

// about
import Aboutimg from '../img/about2.png'


// projext

import img1 from '../img/download1.png'
import img2 from '../img/download2.png'
import img3 from '../img/download3.avif'


// resume

import Resume from '../img/resume.png'

import Pasupathi_Resume from '../img/Resume.pdf'


// advance project
// img / project-1

import projectimg1 from '../img/project-1/restarent.png'
import projectimg2 from '../img/project-1/svmedia.png'
import projectimg3 from '../img/project-1/nostra.png'




// mini project
// // img / project-2

import miniproject1 from '../img/project-2/starrating.png'
import miniproject2 from '../img/project-2/productslider.png'
import miniproject3 from '../img/project-2/popupimage.png'
import miniproject4 from '../img/project-2/testimonialslider.png'
import miniproject5 from '../img/project-2/productfilter.png'
import miniproject6 from '../img/project-2/menucart.png'
import miniproject7 from '../img/project-2/todolist.png'
import miniproject8 from '../img/project-2/lode-products.png'
import miniproject9 from '../img/project-2/qr-code-generator.png'
import miniproject10 from '../img/project-2/random-color-generator.png'
import miniproject11 from '../img/project-2/single-multi-selector.png'



// games project
// // img / project-3


import gamesproject1 from '../img/project-3/tictactoe.png'











// All data

let database = createContext({})
export let Dataprovider = ({ children }) => {

    // hero 

    let details = {
        linkin_link: 'http://linkedin.com/in/pasupathi07777',
        gamil_link:"mailto:pasupathi0757@gamil.com",
        git_link:"https://github.com/pasupathi07777?tab=repositories",
        name: "Pasupathi",
        my_domine: "Im a Frontend Developer",
        linkdin_logo: <FaLinkedin size={40} />,
        gamil_logo: <SiGmail size={40} />,
        git_logo:<FaGithub size={40} />,
        image: Heroimg

    }


  
    let about = {
        image: Aboutimg,
        title: "About Me",
        para_1: "Hi, my name is Pasupathi. I am a Frontend Developer. I build beautiful websites using React.",
        para_2: "I am proficient in frontend skills like:",
        skills: "HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React, Python",
        title_2: "Education",
        college_1: "NMS Kamaraj College of Education",
        college_1_year: "2017-2020",
        college_1_degree: "Diploma in Mechanical Engineering",
        college_2: "Satyam College of Engineering and Technology",
        college_2_year: "2023-2025",
        college_2_degree: "Bachelor of Engineering (BE)"
    };
    


    // project

    let project = {
        title: "Project",
        para_1: "These are some of my best projects i have built these with react",
        projects_1: "Advance Project",
        projects_2: "Mini project",
        projects_3: "Games Project",
        btn: "View projects",
        project_img: [img1, img2, img3]



    }

    // resume

    
    let resume = {
        title: "Resume",
        img: Resume,
        View_btn: "View CV",
        Downlode_btn: "Download CV",
        pdf: Pasupathi_Resume
    };
    

    // contact


    let contact = {
        title: "Contact",
        para_1: "If you want to discuss more about details,please contact me",
        gamil: 'pasupathi0757@gamil.com',
        mob_number: "6374425185"


    }


    // footer
    let year = new Date()
    let footer = {
        date: year.getFullYear()

    }


    // advance project
    let advancrproject = {
        details: 
        [

        { name:"Restarent website", img: projectimg1, link: "https://pasupathi07777-foodin.netlify.app/" },
        { name:"SV-Media application ", img: projectimg2, link: "https://pasupathi07777-svmedia.netlify.app/" },
        { name:"Shoping Website", img: projectimg3, link: "https://pasupathi-nostra.netlify.app/" },


        ]
    }


    // mini project
    let miniproject = {
        details: [
        { name:"Star Rating", img: miniproject1, link: "https://pasupathi-star-rating.netlify.app/" },
        { name:"Product Slider", img: miniproject2, link: "https://pasupathi-product-slider.netlify.app/" },
        { name:"Pop-Pup-image-galary", img: miniproject3, link: "https://pop-pup-image-galary.netlify.app/" },
        { name:"Testimonial Slider", img: miniproject4, link: "https://pasupathi-testimonial-slider.netlify.app/"},
        { name:"Product Filter", img: miniproject5, link: "https://pasupathi-product-filter.netlify.app/"},
        { name:"Menu-Cart", img: miniproject6, link: "https://pasupathi-food-menu.netlify.app/"},
        { name:"Todolist", img: miniproject7, link: "https://pasupathi-to-do-lists.netlify.app/"},
        { name:"lode-more-products", img: miniproject8, link: "https://pasupathi-lode-more-products.netlify.app/"},
        { name:"QR-code-generator", img: miniproject9, link: "https://pasupathi-qr-code-generator.netlify.app/"},
        { name:"random-color-generator", img: miniproject10, link: "https://pasupathi-random-color-generator.netlify.app/"},
        { name:"single-multi-selector", img: miniproject11, link: "https://pasupathi-single-multi-selector.netlify.app/"},




        ]
    }

    //    games project
    let gamesproject = {
        details: [
        { name:"Tic-Tak-Toe", img: gamesproject1, link: "https://pasupathi-tic-tac-toe.netlify.app/" },
      


        ]
    }





    return (
        <database.Provider value={{
            details, about, project, resume, contact, footer, advancrproject, miniproject, gamesproject

        }}>
            {children}
        </database.Provider>
    )

}
export default database