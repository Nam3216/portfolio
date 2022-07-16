import React from "react"
import HomeHeader from "../HomeHeader/HomeHeader"
import Projects from "../Projects/Projects"
import Bio from "../Bio/Bio"
import Contact from "../Contact/Contact"

import "./styleHome.css"
//import { Link } from "react-router-dom"

const Home=()=>{


    return(
        <div className="home-container">
            <div id="home">
                <HomeHeader/>
            </div>
           <div id="projects">
                <Projects/>
           </div>
           <div id="biog">
                <Bio/>
           </div>
           <div id="contact">
                <Contact/>
                
            </div>

        </div>
    )
}

export default Home