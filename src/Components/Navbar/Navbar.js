import React from "react"

import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import CodeIcon from '@mui/icons-material/Code';

import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import "./styleNavbar.css"


const Navbar=()=>{


    return(
       
        <div className="navbar">
            
            <ul><div className="titleimg"><img src="portfolio/titlemanzanosnavbar.png" alt="cargando" id="navimg"/></div>
                <div className="icon"><CottageOutlinedIcon /></div>
                <li><a href={"#home"}>Inicio</a> </li>
                <div className="icon"><CodeIcon /></div>
                <li><a href={"#projects"}>Proyectos</a> </li>
                <div className="icon"><WorkOutlineIcon /></div>
                <li><a href={"#biog"}>Curriculum</a> </li>
                <div className="icon"><AlternateEmailIcon /></div>
                <li><a href={"#contact"}>Contacto</a> </li>
           
            </ul>
           
        </div>
    )
}


export default Navbar