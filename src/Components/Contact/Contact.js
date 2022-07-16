import React,{useState,useRef,useEffect} from "react";
import emailjs from '@emailjs/browser';
import "./styleContact.css"

const Contact=()=>{
   // const[infoMail,setInfoMail]=useState({name:"",email:"",text:""})
    const[checkMail,setCheckMail]=useState(false)
    const form = useRef()
    const[check,setCheck]=useState(true)

    
    const changeId=()=>{
        if(window.scrollY>560){
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

    //handlercontact no lo uso
   /* const handlerContact=(e)=>{
        e.preventDefault()
      
        setInfoMail({...infoMail,[e.target.name]:e.target.value})
    }
    console.log(infoMail, "informail")*/


//solo uso sendCheck y sendEmail
    const sendCheck=()=>{
        setCheckMail(true)
    }

    const sendEmail=(e)=>{
        e.preventDefault()
        emailjs.sendForm('service_kothuvl', 'template_b1s9ayj', form.current, 'Ab-jG_IYyCla718rH')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className="contact-container" id="contacto">

            <img src="titlecontacto.png" alt="cargando"  id={check ? "title-contact" : "title-contact-new"}  />
            <div className="contact-info">
                <p>Enviame un mail a norbertomanzanos@gmail.com. Llamame o enviame Whatsapp a 54 9 1133232167.O en su defecto utiliza el formulario de abajo:</p>
                
            </div>
            <div className="contact-container-container">
                <form ref={form} onSubmit={sendEmail}>
                    <label for="name"><p className="title-input">Escribe tu nombre</p></label>
                    <input type="text" name="name" />
                    <label for="email"><p className="title-input">Escribe tu direccion de mail</p></label>
                    <input type="text" name="email" />
                    <label for="message"><p className="title-input">Escribe tu  mensaje</p></label>
                    <textarea name="message" />
                    <button type="submit" value="Send" id="send-button" onClick={sendCheck}>Enviar</button>

                </form>
            </div>
            {checkMail && <h4 id="success-h4">Su mensaje se ha enviado con exito</h4>}
        </div>
    )
 

}

export default Contact