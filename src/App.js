
import './App.css';
import Home from './Components/Pages/Home';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
//import Images from './Components/Bio/Images';
import Footer from './Components/Footer/Footer';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { useEffect } from 'react';


function App() {

  useEffect(()=>{
    document.title="Norberto Manzanos"
  },[])
  return (
    <div className="App">
      <div className='content'>
      <BrowserRouter>
      
        <header>
          <Navbar/>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/portfolio" element={<Home/>}/>
           
           

          </Routes>
      </main>
    
    <footer>
      <Footer/>
    </footer>
  
    </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
/* <Route path="/proyectos" element={<Projects/>}/>
            <Route path="/bio" element={<div>bio</div>}/>
            <Route path="/contacto" element={<div>contacto</div>}/>*/