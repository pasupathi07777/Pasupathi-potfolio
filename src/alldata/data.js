// hero
import { createContext } from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import Heroimg from '../img/header.webp'

// about
import Aboutimg from '../img/about2.png'


// projext

import img1 from '../img/download1.jpg'
import img2 from '../img/download2.jpg'
import img3 from '../img/download3.jpg'


// resume

import Resume from '../img/resume.png'
import Pasupathi_Resume from '../img/Resume.pdf'



let database=createContext({})
export let Dataprovider=({children})=>{

    // hero 

    let details = {
        linkin_link: 'http://linkedin.com/in/pasupathi07777',
        instagram_link: 'https://www.instagram.com/pasupathi7777/?next=%2F',
        fb_link: 'https://www.facebook.com/pasupathy.pasupathy.9659',
        name:"Pasupathi",
        my_domine:"Im a Frontend Developer",
        linkdin_logo:<FaLinkedin size={40}/>,
        fb_logo:<FaFacebookSquare size={40}/>,
        insta_logo:<FaInstagram size={40}/>,
        image:Heroimg

    }


    // about


    let about ={
        image:Aboutimg,
        title:"About me",
        para_1:"Hi  ,My name is Pasupathi . I am a Frontend Developer . I build butiful website using react ",
        para_2:"Iam a proficient in Frontend skills like Html,Css,Javascript,Bootstrap,Tailwindcss,React and many more..."

    }


    // project

    let project={
        title:"Project",
        para_1:"These are some of my best projects i have built these with react",
        projects_1:"Advance Project",
        projects_2:"Mini project",
        projects_3:"Games Project",
        btn:"View projects",
        project_img:[img1,img2,img3]    
       


    }

    // resume

    let resume={
        title:"Resume",
        img:Resume,
        View_btn:"View CV",
        Downlode_btn:"Downlode CV",
        pdf:Pasupathi_Resume
    }

    // contact


    let contact={
        title:"Contact",
        para_1:"If you want to discuss more about details,please contact me",
        gamil:'pasupathi07777@gamil.com',
        mob_number:"6374425185"


    }


    // footer
    let year=new Date()


    let footer={
        date:year.getFullYear()

    }
    return (
        <database.Provider value={{
            details,about,project,resume,contact,footer

        }}>
            {children}
        </database.Provider>
    )

}
export default database