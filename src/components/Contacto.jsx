import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import TextoDinamico from './TextoDinamico';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../Styles/main.css';

const Contacto = () => {
    const [mensajeExito, setMensajeExito] = useState(false);
    const [error, setError] = useState(false);
    const form = useRef();

    const textosContacto = [
        "¿Querés contactarme?",
        "Completá el formulario",
        "¡Te responderé pronto! 📧"
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const sections = document.querySelectorAll('.project-section');
        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        setError(false);
        setMensajeExito(false);

        emailjs.sendForm(
            'service_e1vki48',
            'portafolio_template',
            form.current,
            'dTcQqt0_DtamLAqt4'
        )
        .then((result) => {
            console.log(result.text);
            setMensajeExito(true);
            form.current.reset();
        })
        .catch((error) => {
            console.log(error.text);
            setError(true);
        });
    };

    return (
        <div className="homeGeneral">
            <div className="contact-container">
                <div className="contact-header">
                    <h1 className="contact-title">Contacto</h1>
                    <TextoDinamico textos={textosContacto} />
                </div>

                <div className="project-section">
                    <p className="projects-description">
                        Como desarrollador Full Stack en el sector público, estoy siempre interesado en nuevos desafíos 
                        y oportunidades de colaboración. Si tienes un proyecto en mente o quieres discutir posibles 
                        colaboraciones, no dudes en contactarme.
                    </p>
                </div>

                <div className="contact-content">
                    {/* Formulario de contacto */}
                    <section className="contact-form-section">
                        <h3>Envíame un mensaje</h3>
                        <form className="contact-form" ref={form} onSubmit={sendEmail}>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre</label>
                                <input 
                                    type="text" 
                                    id="nombre"
                                    name="user_name" 
                                    autoComplete="off" 
                                    placeholder="Escribe tu nombre" 
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input 
                                    type="email" 
                                    id="email"
                                    name="user_email" 
                                    placeholder="Escribe tu correo electrónico"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="mensaje">Mensaje</label>
                                <textarea 
                                    id="mensaje"
                                    name="message" 
                                    placeholder="Escribe tu mensaje"
                                    required
                                />
                            </div>

                            <button type="submit" className="submit-btn">
                                Enviar Mensaje
                            </button>
                            
                            {mensajeExito && (
                                <div className="mensaje-exito">
                                    ¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.
                                </div>
                            )}
                            {error && (
                                <div className="mensaje-error">
                                    Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
                                </div>
                            )}
                        </form>
                    </section>

                    {/* Mini footer con redes sociales */}
                    <section className="contact-info-section">
                        <h3>Conectemos</h3>
                        <div className="social-links">
                            <a 
                                href="https://github.com/NicolasPirello" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                <FaGithub /> GitHub
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/nicolas-pirello/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                <FaLinkedin /> LinkedIn
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Contacto;