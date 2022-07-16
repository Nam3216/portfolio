import React from "react"
import "./styleHomeHeader.css"

const HomeHeader=()=>{
/*<div className="home-header-container">
            <img src="titlemanzanos.png" alt="cargando" id="title-home" />
 </div>*/
    return(
        <div className="home-header-container">
            <img src="titlemanzanos.png" alt="cargando" id="title-home" />
       
        <div className="home-header">
            <div className="header-text">
                <h3>Hola!, mi nombre es Norberto Manzanos y soy desarrollador React Front-End. En esta página podrás encontrar mis proyectos realizados con HTML, CSS, JAVASCRIPT, TYPESCRIPT y REACT. También conocerás el detalle de las tecnologías que he aprendido, como así también mi curriculum vitae.</h3>
                <div className="info">
                    <h4 id="email">Email: norbertomanzanos@gmail.com</h4>
                    <h4>Celular: 15-33232167</h4>
                </div>
            </div>
            <div id="img-header"> </div>
            
        </div>
           
        </div>
    )
}

export default HomeHeader

// <img src="programmer.jpg" alt="cargando"/>

//<div id="img-header"> </div>