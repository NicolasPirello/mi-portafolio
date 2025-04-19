import React, { useEffect } from 'react';
import ProyectCards from "./ProyectCards";
import TextoDinamico from "./TextoDinamico";
import nodejs from "../images/Skills/node-js.webp"
import html from "../images/Skills/html.webp"


const Proyectos = () => {
    const textosProyectos = [
        "Probando, errando y aprendiendo... terminé haciendo esto.",
        "Todo esto lo hice con tiempo, ganas y debug.",
        "No hay soluciones genéricas, solo problemas bien entendidos.",
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

    const proyectos = 
        [
            {
                id: 1,
                titulo: "Tienda de Café | Proyecto Integrador",
                descripcion: "Este es el proyecto integrador de mi grupo en Digital House. Es una tienda que vende productos de café. Tiene distintos perfiles de usuarios que permite realizar compras o administrar la tienda.",
                tecnologias: [nodejs,html],
                repositorio: "https://github.com/NicolasPirello/MecafeG6-DH-Pirello",
                deploy: "https://mecafeg6-dh-pirello-production.up.railway.app/",
                repoName: "Repositorio",
                deployName: "Deploy",
                seccion: "destacados"
            },
            {
                id: 2,
                titulo: "Dashboard Tienda de Café",
                descripcion: "Un dashboard analítico que consume la API del proyecto integrador, donde se muestra información de la cantidad de productos en cada categoría, el último producto creado y el último usuario creado.",
                tecnologias: [nodejs],
                repositorio: "https://github.com/NicolasPirello/MecafeREACT-DH-Pirello",
                deploy: "https://nicolaspirello.github.io/MecafeREACT-DH-Pirello/",
                repoName: "Repositorio",
                deployName: "Deploy",
                seccion: "destacados"
            },
            {
                id: 3,
                titulo: "Tarjetas Responsive",
                descripcion: "Es un proyecto chico de REACT donde se listan 3 tarjetas con diferente contenido utilizando un único componente, fue una de mis primeras prácticas con esta tecnología.",
                tecnologias: [nodejs],
                repositorio: "https://github.com/NicolasPirello/react-cards-responsive",
                deploy: "https://nicolaspirello.github.io/react-cards-responsive/",
                repoName: "Repositorio",
                deployName: "Deploy",
                seccion: "sitiosWeb"
            },
            {
                id: 4,
                titulo: "Personajes de Rick and Morty",
                descripcion: "Una Web desarrollada con REACT y el concepto de SPA donde consumo una API Publica con el fin de listar los personajes de la famosa serie de Rick and Morty. Estilada con CSS puro.",
                tecnologias: [nodejs],
                repositorio: "https://github.com/NicolasPirello/react-rick-and-morty",
                deploy: "https://nicolaspirello.github.io/react-rick-and-morty/",
                repoName: "Repositorio",
                deployName: "Deploy",
                seccion: "sitiosWeb"
            },
            {
                id: 5,
                titulo: "Listador de Tareas",
                descripcion: "Una app para listar tareas que trae listadas algunas por defecto y a medida que se actualizan, se va modificando el Archivo JSON, pero no se guarda en ningún lado, realizado para entender el CRUD en REACT.",
                tecnologias: [nodejs],
                repositorio: "https://github.com/NicolasPirello/app-task-react",
                deploy: "https://nicolaspirello.github.io/app-task-react/",
                repoName: "Repositorio",
                deployName: "Deploy",
                seccion: "aplicacionesWeb"
            },
            {
                id: 6,
                titulo: "Listador de Peliculas",
                descripcion: "Una app para listar películas, donde el CRUD se hace y guarda en el Local Storage. Cuenta con un buscador que va actualizando las películas a medida que el usuario realiza una búsqueda.",
                tecnologias: [nodejs],
                repositorio: "https://github.com/NicolasPirello/app-movies-list-react",
                deploy: "https://nicolaspirello.github.io/app-movies-list-react/",
                repoName: "Repositorio",
                deployName: "Deploy",
                seccion: "aplicacionesWeb"
            },
            {
                id: 7,
                titulo: "Portafolio Personal",
                descripcion: "Este es mi portafolio, en el que estás actualmente navegando, pero también forma parte de mis proyectos, ya que lo realice con REACT y estoy mejorándolo constantemente.",
                tecnologias: [nodejs],
                repositorio: "https://nicolaspirello.com/#/proyectos",
                deploy: "https://portafolio.nicolaspirello.com/",
                repoName: "Privado",
                deployName: "Ir a la Web",
                seccion: "destacados"
            },
            {
                id: 8,
                titulo: "ExpertoTarot (Wordpress) | Trabajo",
                descripcion: "Hecha con base en un Keyword Research para posicionar en Google. Enfocada a Mobile. Con palabras claves posicionadas en las primeras posiciones de Google. Monitoreada con Search Console y Google Analytics.",
                tecnologias: [nodejs],
                repositorio: "https://nicolaspirello.com/#/proyectos",
                deploy: "https://expertotarot.com/",
                repoName: "S/Repositorio",
                deployName: "Ir a la Web",
                seccion: "destacados"
            },
            {
                id: 9,
                titulo: "Landing Page | React y Tailwind CSS",
                descripcion: "Primera web estilizada con el Framwork de Tailwind CSS. Desarrollada con REACT (Create react app) y con su deploy en GitHub con gh-pages.",
                tecnologias: [nodejs],
                repositorio: "https://github.com/NicolasPirello/landing-page-react-tailwind-css",
                deploy: "https://nicolaspirello.github.io/landing-page-react-tailwind-css/",
                repoName: "Repositorio",
                deployName: "Deploy",
                seccion: "sitiosWeb"
            }
            ,
            {
                id: 10,
                titulo: "Firefox Page | Tailwind CSS",
                descripcion: "Landing Page de Firefox con Tailwind CSS. 100% Responsive, con opción de pasar de modo Claro a Oscuro y queda guardado en la Session.",
                tecnologias: [nodejs],
                repositorio: "https://github.com/NicolasPirello/firefox-tailwind",
                deploy: "https://nicolaspirello.github.io/firefox-tailwind/",
                repoName: "Repositorio",
                deployName: "Deploy",
                seccion: "sitiosWeb"
            },
            {
                id: 11,
                titulo: "VegeBox | Practica Laboral",
                descripcion: "Pagina Responsive realizada con HTML, CSS y JS. Formulario de contacto con email de confirmacion a quien lo envia. Card de compartir personalizada. Imagenes WebP",
                tecnologias: [nodejs],
                repositorio: "https://github.com/NicolasPirello/VegeBox-Entrevista-Tecnica",
                deploy: "https://pruebatecnica.online/",
                repoName: "Repositorio",
                deployName: "Ir a la Web",
                seccion: "sitiosWeb"
            }
        ]

    // Categorizar proyectos
    const proyectosCategorizados = {
        destacados: proyectos.filter(p => p.seccion === "destacados"),
        aplicacionesWeb: proyectos.filter(p => p.seccion === "aplicacionesWeb"),
        sitiosWeb: proyectos.filter(p => p.seccion === "sitiosWeb")
    };

    return (
        <div className="homeGeneral">
            <div className="projects-container">
                <div className="projects-header">
                    <h1 className="projects-title">Portafolio de Proyectos</h1>
                        <TextoDinamico textos={textosProyectos} />
                </div>

                <div className="project-section">
                    <p className="projects-description">
                        Desde mi formación en Digital House y mi experiencia laboral, 
                        he desarrollado diversos proyectos que demuestran mi evolución como desarrollador Full Stack. 
                        Mi trabajo abarca desde aplicaciones web completas hasta soluciones específicas, 
                        siempre enfocado en crear productos de alta calidad y excelente experiencia de usuario.
                    </p>
                </div>

                <div className="projects-content">
                    <section className="project-section">
                        <h2 className="category-title">Proyectos Destacados</h2>
                        <div className="projects-grid">
                            {proyectosCategorizados.destacados.map(proyecto => (
                                <ProyectCards key={proyecto.id} proyecto={proyecto} />
                            ))}
                        </div>
                    </section>

                    <section className="project-section">
                        <h2 className="category-title">Aplicaciones Web</h2>
                        <div className="projects-grid">
                            {proyectosCategorizados.aplicacionesWeb.map(proyecto => (
                                <ProyectCards key={proyecto.id} proyecto={proyecto} />
                            ))}
                        </div>
                    </section>

                    <section className="project-section">
                        <h2 className="category-title">Sitios Web y Landing Pages</h2>
                        <div className="projects-grid">
                            {proyectosCategorizados.sitiosWeb.map(proyecto => (
                                <ProyectCards key={proyecto.id} proyecto={proyecto} />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Proyectos;