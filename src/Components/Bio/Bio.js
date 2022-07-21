import React,{useEffect,useState} from "react";
//import { Link } from "react-router-dom";
import pdf from "./curriculum_Norberto_Manzanos.pdf"
import certJs from "./certificado_javascript.pdf"
import certReact from "./certificado_react.pdf"
import "./styleBio.css"

const Bio=()=>{
    const[check,setCheck]=useState(true)

    
    const changeId=()=>{
        if(window.scrollY>500){
            setCheck(false)
        }
        if(window.scrollY<60){
           // setCheck(false)
        }

    }
    
    
    useEffect(()=>{
        window.addEventListener("scroll",changeId)
        return()=>{
            window.removeEventListener("scroll",changeId)
        }
    },[])

    return (
        <div className="bio-container-container" id="curriculum" >
            <img src="portfolio/titlecurriculum.png" alt="cargando"  id={check ? "title-curriculum" : "title-curriculum-new"} />

            <div className="bio-container">
                <div className="bio-text">
                    
                    <p>Este último año me dediqué a aprender diversas tecnologías para poder iniciar un camino como desarrollador de software. Las tecnologías principales que estudie son: Html, Css, Python(sintaxis), Javascript, Typescript, React JS/TS. 
                        También tuve la oportunidad de utilizar en mis proyectos servicios como GitHub, Firebase, Vercel y distintas librerias (React Bootstrap, MUI, JQuery. entre otras). En la actualidad estoy participando de un curso de Node JS en la UTN, para poder afianzar mi conocimiento del backend y de esta manera ser capaz de aplicarlo a mis proyectos/trabajos. Por otra parte, cabe mencionar que cuento con varios años de experiencia laboral en diversas áreas de distintas empresas. Todo esto lo podrán ver con detalle en mi Curriculum Vitae.</p>
                </div>
                <div className="links">
                    
                    <a className="links-a" href={certJs} target="_blank"> Certificado de curso Javascript en CoderHouse</a>
                    <a className="links-a" href={certReact} target="_blank"> Certificado de curso React JS en CoderHouse</a>
                    <a className="links-a" href={pdf} target="_blank">  Curriculum Vitae</a>
                   
                    
                </div>
            </div>

        </div>
    )
}

export default Bio

/*link  a la pag de coderhouse
<p onClick={()=>window.open("https://www.coderhouse.com/certificados/628514a9f9712200202b4009")} target="_blank" >  Certificado curso Javascript en CoderHouse</p>
                    <p onClick={()=>window.open("https://www.coderhouse.com/certificados/628514a9f9712200202b4009")} target="_blank">   Certificado curso React en CoderHouse</p>*/