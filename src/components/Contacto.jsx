import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contacto = () => {

    const [ mensajeExito, setMensajeExito ] = useState(false)

    const form = useRef();

    const sendEmail = (e) => {

        e.preventDefault();

        emailjs.sendForm('service_e1vki48', 'portafolio_template', form.current, 'dTcQqt0_DtamLAqt4')

        .then((result) => {
            console.log(result.text);
            if (result.text == "OK"){
                setMensajeExito(true)
            } else {
                setMensajeExito(false)
            }
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset()

    };

  return (

    <div className="homeGeneral">

        <div className="homeContainer">

            <span className="homeTitle">Bienvenidos a la sección:</span>
            <h1>Contacto</h1>

            <div className="wrapper">
                <ul className="texto-dinamico">
                    <li><span>Si deseas comunicarte conmigo.</span></li>
                    <li><span>Te dejo este formulario de contacto.</span></li>
                    <li><span>Responderé a la brevedad.</span></li>
                </ul>
            </div>

            <hr />


            <div className="textInfo">
                <p className="contactText">En caso de que quieras comunicarte conmigo te dejo este formulario de contacto. Responderé a la brevedad.</p>
            </div>

        <form className='contactFormContainer' ref={form} onSubmit={sendEmail}>

            <span>Formulario de Contacto</span>

            <div>
                <label>Nombre</label>
                <input type="text" name="from_name" autoComplete="off" placeholder='Escribe tu nombre' autoFocus/>
            </div>

            <div>
                <label>Email</label>
                <input type="email" name="user_email" placeholder='Escribe tu correo electronico'/>
            </div>

            <div>
                <label>Mensaje</label>
                <textarea name="message" placeholder='Escribe tu mensaje' />
            </div>

            <input type="submit" value="Enviar mensaje" />
           
            { mensajeExito ?  (
                
                <p className='enviadoConExito'>¡Mensaje Enviado con Éxito!</p>
            
            ) : ("") }


            </form>

        </div>

    </div>

    

  );
};


export default Contacto