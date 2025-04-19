import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import RedesSociales from "./RedesSociales";
import TextoDinamico from "./TextoDinamico";
import { FaCode, FaLaptopCode, FaFileAlt, FaEnvelope } from 'react-icons/fa';

const Home = () => {
    const textos = [
        "Frontend elegante, Backend eficiente",
        "Construyo Soluciones",
        "Escucho antes de programar"
    ];

    const [isVisible, setIsVisible] = useState({
        hero: false,
        info: false,
        sections: new Array(4).fill(false)
    });

    const heroRef = useRef(null);
    const infoRef = useRef(null);
    const sectionsRef = useRef([]);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const handleIntersect = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target === heroRef.current) {
                        setIsVisible(prev => ({ ...prev, hero: true }));
                    } else if (entry.target === infoRef.current) {
                        setIsVisible(prev => ({ ...prev, info: true }));
                    } else {
                        const index = sectionsRef.current.findIndex(ref => ref === entry.target);
                        if (index !== -1) {
                            setIsVisible(prev => ({
                                ...prev,
                                sections: prev.sections.map((item, i) => i === index ? true : item)
                            }));
                        }
                    }
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, observerOptions);

        if (heroRef.current) observer.observe(heroRef.current);
        if (infoRef.current) observer.observe(infoRef.current);
        sectionsRef.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="homeGeneral">
            {/* Fondo SVG Animado */}
            <div className="svg-background">
                <div className="particles"></div>
            </div>

            {/* Hero Section */}
            <div ref={heroRef} className={`homeHero ${isVisible.hero ? 'visible' : ''}`}>
                <div className="homeContainer">
                    <span className="homeTitle">Bienvenidos a mi Portafolio</span>
                    <h1 className="textoWeb">¡Hola! Soy Nicolás Pirello</h1>
                    <TextoDinamico textos={textos} />
                    <RedesSociales />
                </div>
            </div>

            {/* Info Section */}
            <div ref={infoRef} className={`homeInfo ${isVisible.info ? 'visible' : ''}`}>
                <div className="homeContainer">
                    <div className="home-text-info">
                        <p className="home-description">
                            Desarrollador Full Stack en la Subsecretaría de Tecnología e Informática del Ministerio de Justicia 
                            de la Ciudad Autónoma de Buenos Aires. Me dedico al desarrollo de aplicaciones web, 
                            combinando tecnologías front-end y back-end. Mi trabajo se centra en crear soluciones 
                            que contribuyan a mejorar los procesos y servicios del sector público.
                        </p>
                    </div>
                </div>
            </div>

            {/* Sections Container */}
            <div className="home-sections-container">
                <div className="homeContainer">
                    <h2 className={`sections-title ${isVisible.sections[0] ? 'visible' : ''}`}>
                        Conoce mi trabajo y experiencia
                    </h2>

                    {/* Sección Proyectos */}
                    <div 
                        ref={el => sectionsRef.current[0] = el}
                        className={`home-section-item ${isVisible.sections[0] ? 'visible' : ''}`}
                    >
                        <div className="section-content">
                            <div className="section-icon">
                                <FaLaptopCode className="icon" />
                                <div className="icon-bg"></div>
                            </div>
                            <div className="section-text">
                                <h3>Proyectos</h3>
                                <p>En esta sección encontrarás una selección de proyectos personales 
                                que he desarrollado, donde aplico diferentes tecnologías y herramientas 
                                para crear soluciones web.</p>
                                <Link to="/proyectos" className="section-link">
                                    Ver proyectos
                                    <svg className="arrow-icon" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="section-decoration">
                            <svg viewBox="0 0 200 200" className="blob-shape">
                                <path fill="var(--color-primario)" d="M47.7,-67.1C58.9,-55.3,63.2,-37.1,64.5,-20.1C65.8,-3.2,64.2,12.5,57.9,25.8C51.6,39.1,40.7,50,27.4,56.3C14.1,62.6,-1.6,64.3,-18.4,61.7C-35.2,59.2,-53.1,52.4,-65.4,38.8C-77.7,25.2,-84.4,4.8,-80.2,-12.8C-76,-30.4,-60.9,-45.2,-45,-56.1C-29.1,-67,-14.6,-74,2.4,-77.2C19.3,-80.4,36.6,-79.8,47.7,-67.1Z" />
                            </svg>
                        </div>
                    </div>

                    {/* Sección Habilidades */}
                    <div 
                        ref={el => sectionsRef.current[1] = el}
                        className={`home-section-item reverse ${isVisible.sections[1] ? 'visible' : ''}`}
                    >
                        <div className="section-content">
                            <div className="section-icon">
                                <FaCode className="icon" />
                                <div className="icon-bg"></div>
                            </div>
                            <div className="section-text">
                                <h3>Habilidades Técnicas</h3>
                                <p>Aquí podrás encontrar las diferentes tecnologías y herramientas 
                                que manejo en el desarrollo web, tanto en front-end como en back-end.</p>
                                <Link to="/skills" className="section-link">
                                    Ver habilidades
                                    <svg className="arrow-icon" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="section-decoration">
                            <svg viewBox="0 0 200 200" className="blob-shape">
                                <path fill="var(--color-primario)" d="M38.5,-57.1C46.9,-46.3,48.9,-31.1,51.1,-16.9C53.4,-2.7,55.9,10.5,52.6,22.5C49.3,34.5,40.2,45.3,28.5,51.5C16.8,57.7,2.6,59.3,-12.4,57.1C-27.4,54.9,-43.3,48.9,-54.8,37.4C-66.3,25.9,-73.5,8.9,-70.8,-6.2C-68.1,-21.3,-55.5,-34.5,-42.1,-45.4C-28.7,-56.3,-14.3,-64.9,1,-66.2C16.4,-67.5,32.8,-65.5,38.5,-57.1Z" />
                            </svg>
                        </div>
                    </div>

                    {/* Sección Curriculum */}
                    <div 
                        ref={el => sectionsRef.current[2] = el}
                        className={`home-section-item ${isVisible.sections[2] ? 'visible' : ''}`}
                    >
                        <div className="section-content">
                            <div className="section-icon">
                                <FaFileAlt className="icon" />
                                <div className="icon-bg"></div>
                            </div>
                            <div className="section-text">
                                <h3>Trayectoria Profesional</h3>
                                <p>Conoce mi experiencia en el desarrollo web y mi trayectoria 
                                profesional en el sector tecnológico.</p>
                                <Link to="https://drive.google.com/file/d/18b2L_2isa60mToZrHfixFg6V1HtoGwfG/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="section-link">
                                    Ver CV
                                    <svg className="arrow-icon" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="section-decoration">
                            <svg viewBox="0 0 200 200" className="blob-shape">
                                <path fill="var(--color-primario)" d="M38.5,-57.1C46.9,-46.3,48.9,-31.1,51.1,-16.9C53.4,-2.7,55.9,10.5,52.6,22.5C49.3,34.5,40.2,45.3,28.5,51.5C16.8,57.7,2.6,59.3,-12.4,57.1C-27.4,54.9,-43.3,48.9,-54.8,37.4C-66.3,25.9,-73.5,8.9,-70.8,-6.2C-68.1,-21.3,-55.5,-34.5,-42.1,-45.4C-28.7,-56.3,-14.3,-64.9,1,-66.2C16.4,-67.5,32.8,-65.5,38.5,-57.1Z" />
                            </svg>
                        </div>
                    </div>

                    {/* Sección Contacto */}
                    <div 
                        ref={el => sectionsRef.current[3] = el}
                        className={`home-section-item reverse ${isVisible.sections[3] ? 'visible' : ''}`}
                    >
                        <div className="section-content">
                            <div className="section-icon">
                                <FaEnvelope className="icon" />
                                <div className="icon-bg"></div>
                            </div>
                            <div className="section-text">
                                <h3>Contacto</h3>
                                <p>Si deseas ponerte en contacto conmigo o conocer más sobre mi experiencia, no dudes en escribirme.</p>
                                <Link to="/contacto" className="section-link">
                                    Contactar
                                    <svg className="arrow-icon" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="section-decoration">
                            <svg viewBox="0 0 200 200" className="blob-shape">
                                <path fill="var(--color-primario)" d="M44.1,-64.5C58.3,-56.3,71.6,-44.5,77.7,-29.5C83.8,-14.5,82.6,3.7,76.9,19.9C71.1,36,60.8,50.1,47.2,58.9C33.6,67.7,16.8,71.2,0.6,70.3C-15.6,69.4,-31.2,64.1,-45.1,55.3C-59,46.5,-71.2,34.2,-76.3,19.2C-81.4,4.2,-79.4,-13.5,-71.7,-27.7C-64,-41.9,-50.6,-52.6,-36.9,-60.8C-23.1,-69,-11.6,-74.7,2.4,-78.1C16.3,-81.5,32.7,-82.6,44.1,-64.5Z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;