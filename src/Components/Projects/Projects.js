import React from "react"
import {Link} from "react-router-dom"
import "./styleProjects.css"


const Projects=()=>{

    return(
        <div className="projects-container" id="proyectos">
            <img src="titleproyectos.png" alt="cargando" style={{height:70}} id="title-projects"/>
            <div className="project-item">
                <div className="text-project-container">
                    <h4>Nombre: E-commerce de Ropa</h4>
                    <p>Descripción: Sitio E-commerce para venta de indumentaria. La base de datos conteniendo la información de los productos se encuentra alojada en Firebase-Firestore. El usuario navega por el sitio, elige un producto, una cantidad, lo agrega al carrito de compras y por último finaliza la transacción enviándo su información también a Firestore, para ser almacenada y de esta manera simular la conexión de una transacción real.</p>
                    <div onClick={()=>window.open("https://github.com/Nam3216/CursoReact/tree/master")} className="link-git"><p>Ver el codigo en GitHub : https://github.com/Nam3216/CursoReact.git</p> </div>
                    <div onClick={()=>window.open("https://nam3216.github.io/CursoReact/")} className="link-git"><p>Ver el sitio en funcionamiento : https://nam3216.github.io/CursoReact/</p> </div>
                </div>
                <div className="img-project-container">
                    <h4>Tecnologías aplicadas</h4>
                    <img src="html3.png" alt="cargando" className="img-project" />
                
                    <img src="react.jpg" alt="cargando" className="img-project" id="img-react"  />
                </div>
                
            </div>

            <div className="project-item">
                <div className="text-project-container">
                    <h4>Nombre: E-commerce de Serigrafia</h4>
                    <p>Descripción: Sitio E-commerce para venta de insumos de serigrafía. La base de datos conteniendo la información de los productos se encuentra alojada en Firebase-Firestore. El usuario navega por el sitio, elige un producto, una cantidad, un color de tinta, lo agrega al carrito de compras y por último finaliza la transacción enviando su información otra vez a Firestore, para ser almacenada y de esta manera simular la conexión de una transacción real.</p>
                    <div onClick={()=>window.open("https://github.com/Nam3216/serigrafia.git")} className="link-git"><p>Ver el codigo en GitHub : https://github.com/Nam3216/serigrafia.git </p></div>
                    <div onClick={()=>window.open("https://nam3216.github.io/serigrafia/")} className="link-git"><p>Ver el sitio en funcionamiento : https://nam3216.github.io/serigrafia/ </p></div>
                </div>
                <div className="img-project-container">
                    <h4>Tecnologías aplicadas</h4>
                    <img src="html3.png" alt="cargando" className="img-project" />
                
                    <img src="react.jpg" alt="cargando" className="img-project" id="img-react"  />
                </div>
            </div>

            <div className="project-item">
                <div className="text-project-container">
                    <h4>Nombre: Movie Finder</h4>
                    <p>Descripción: Sitio estilo IMDB con información sobre películas. El usuario puede navegar entre películas según su categoría o realizar una búsqueda desde la sección Búsqueda. Se puede obtener variada información sobre cada película, incluyendo imágenes, descripciones, reviews, puntajes y también tráilers. Se consume la API de https://www.themoviedb.org/.</p>
                    <div onClick={()=>window.open("https://github.com/Nam3216/MoviPediaTs.git")} className="link-git"><p>Ver el codigo en GitHub :https://github.com/Nam3216/MoviPediaTs.git</p> </div>
                    <div onClick={()=>window.open("https://nam3216.github.io/MoviPediaTs/")} className="link-git"><p>Ver el sitio en funcionamiento :https://nam3216.github.io/MoviPediaTs/</p> </div>
                </div>
                <div className="img-project-container">
                    <h4>Tecnologías aplicadas</h4>
                    <img src="html3.png" alt="cargando" className="img-project" />
                    <img src="ts.png" alt="cargando" className="img-project" id="img-ts"  />
                    <img src="react.jpg" alt="cargando" className="img-project" id="img-react"  />
                    
                </div>
            </div>
        </div>
    )


}


export default Projects