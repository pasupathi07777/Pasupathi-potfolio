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


// games project
// // img / project-3


import gamesproject1 from '../img/project-3/tictactoe.png'











// All data

let database = createContext({})
export let Dataprovider = ({ children }) => {

    // hero 

    let details = {
        linkin_link: 'http://linkedin.com/in/pasupathi07777',
        gamil_link:"mailto:pasupathi07777@gamil.com",
        git_link:"https://github.com/pasupathi07777?tab=repositories",
        name: "Pasupathi",
        my_domine: "Im a Frontend Developer",
        linkdin_logo: <FaLinkedin size={40} />,
        gamil_logo: <SiGmail size={40} />,
        git_logo:<FaGithub size={40} />,
        image: Heroimg

    }


    // about


    let about = {
        image: Aboutimg,
        title: "About me",
        para_1: "Hi  ,My name is Pasupathi . I am a Web Developer . I build butiful website using react ",
        para_2: "My proficient in Frontend skills like  ",
        skils:"Html Css Javascript Bootstrap Tailwindcss React python",
        title_2:"Education",
        college_1:"NMS kamaraj College of Education",
        college_1_year:"2017-2020",
        college_1_degre:"DME",
        college_2:"Satyam College Of Engineering and Technology",
        college_2_year:"2023-2025",
        college_2_degre:"BE",
        

    }


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
        View_btn: "Views CV",
        Downlode_btn: "Downlode CV",
        pdf: Pasupathi_Resume
    }

    // contact


    let contact = {
        title: "Contact",
        para_1: "If you want to discuss more about details,please contact me",
        gamil: 'pasupathi07777@gamil.com',
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

        { name:"Restarent website", img: projectimg1, link: "https://food-in-res.netlify.app/" },
        { name:"SV-Media application ", img: projectimg2, link: "https://pasupathi-socialmedia.netlify.app/" },
        { name:"Shoping Website", img: projectimg3, link: "https://nostra-ecomer.netlify.app/" },


        ]
    }


    // mini project
    let miniproject = {
        details: [
        { name:"Star Rating", img: miniproject1, link: "https://javascript-starrating.netlify.app/" },
        { name:"Product Slider", img: miniproject2, link: "https://product-slider-javascript.netlify.app/" },
        { name:"Pop-Pup-image-galary", img: miniproject3, link: "https://pop-pup-image-galary.netlify.app/" },
        { name:"Testimonial Slider", img: miniproject4, link: "https://testimonial-slider-javascript.netlify.app/"},
        { name:"Product Filter", img: miniproject5, link: "https://product-filter-javascript.netlify.app/"},
        { name:"Menu-Cart", img: miniproject6, link: "https://javascript-product-menu.netlify.app/"},
        { name:"Todolist", img: miniproject7, link: "https://todolist-pasupathi.netlify.app/"},


        ]
    }

    //    games project
    let gamesproject = {
        details: [
        { name:"Tic-Tak-Toe", img: gamesproject1, link: "https://tictact-game.netlify.app/" },
      


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