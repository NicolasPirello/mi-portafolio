import ProyectCards from "./ProyectCards";


import nodejs from "../images/Skills/node-js.webp"
import html from "../images/Skills/html.webp"
import css from "../images/Skills/css.webp"
import js from "../images/Skills/js.webp"
import express from "../images/Skills/express.webp"
import git from "../images/Skills/git.webp"
import sequelize from "../images/Skills/sequelize.webp"
import sqlServer from "../images/Skills/sql-server.webp"
import mysql from "../images/Skills/mysql.webp"
import scrum from "../images/Skills/scrum.webp"
import api from "../images/Skills/api.webp"
import postman from "../images/Skills/postman.webp"
import excel from "../images/Skills/excel.webp"
import wordpress from "../images/Skills/wordpress.webp"
import seo from "../images/Skills/seo.webp"
import powerbi from "../images/Skills/powerbi.webp"
import mvc from "../images/Skills/mvc.webp"
import reactRouter from "../images/Skills/react router.webp"
import reactHooks from "../images/Skills/reactHooks.webp"
import react from "../images/Skills/react.webp"
import emailJS from "../images/Skills/emailJS.webp"
import woocommerce from "../images/Skills/woocommerce.webp"
import tailwindcss from "../images/Skills/TailwindCSS.webp"

function Proyectos () {

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
                deployName: "Deploy"
            },
            {
                id: 2,
                titulo: "Dashboard Tienda de Café",
                descripcion: "Un dashboard analítico que consume la API del proyecto integrador, donde se muestra información de la cantidad de productos en cada categoría, el último producto creado y el último usuario creado.",
                tecnologias: [nodejs],
                repositorio: "https://github.com/NicolasPirello/MecafeREACT-DH-Pirello",
                deploy: "https://nicolaspirello.github.io/MecafeREACT-DH-Pirello/",
                repoName: "Repositorio",
                deployName: "Deploy"
            },
            {
                id: 3,
                titulo: "Tarjetas Responsive",
                descripcion: "Es un proyecto chico de REACT donde se listan 3 tarjetas con diferente contenido utilizando un único componente, fue una de mis primeras prácticas con esta tecnología.",
                tecnologias: [nodejs],
                repositorio: "https://github.com/NicolasPirello/react-cards-responsive",
                deploy: "https://nicolaspirello.github.io/react-cards-responsive/",
                repoName: "Repositorio",
                deployName: "Deploy"
            },
            {
                id: 4,
                titulo: "Personajes de Rick and Morty",
                descripcion: "Una Web desarrollada con REACT y el concepto de SPA donde consumo una API Publica con el fin de listar los personajes de la famosa serie de Rick and Morty. Estilada con CSS puro.",
                tecnologias: [nodejs],
                repositorio: "https://github.com/NicolasPirello/react-rick-and-morty",
                deploy: "https://nicolaspirello.github.io/react-rick-and-morty/",
                repoName: "Repositorio",
                deployName: "Deploy"
            },
            {
                id: 5,
                titulo: "Listador de Tareas",
                descripcion: "Una app para listar tareas que trae listadas algunas por defecto y a medida que se actualizan, se va modificando el Archivo JSON, pero no se guarda en ningún lado, realizado para entender el CRUD en REACT.",
                tecnologias: [nodejs],
                repositorio: "https://github.com/NicolasPirello/app-task-react",
                deploy: "https://nicolaspirello.github.io/app-task-react/",
                repoName: "Repositorio",
                deployName: "Deploy"
            },
            {
                id: 6,
                titulo: "Listador de Peliculas",
                descripcion: "Una app para listar películas, donde el CRUD se hace y guarda en el Local Storage. Cuenta con un buscador que va actualizando las películas a medida que el usuario realiza una búsqueda.",
                tecnologias: [nodejs],
                repositorio: "https://github.com/NicolasPirello/app-movies-list-react",
                deploy: "https://nicolaspirello.github.io/app-movies-list-react/",
                repoName: "Repositorio",
                deployName: "Deploy"
            },
            {
                id: 7,
                titulo: "Portafolio Personal",
                descripcion: "Este es mi portafolio, en el que estás actualmente navegando, pero también forma parte de mis proyectos, ya que lo realice con REACT y estoy mejorándolo constantemente.",
                tecnologias: [nodejs],
                repositorio: "https://nicolaspirello.com/#/proyectos",
                deploy: "https://nicolaspirello.com/",
                repoName: "Privado",
                deployName: "Ir a la Web"
            },
            {
                id: 7,
                titulo: "Nudo de Brujas (Wordpress) | Trabajo",
                descripcion: "Hecha con base en un Keyword Research para posicionar en Google. Enfocada a Mobile. Con palabras claves posicionadas en las primeras posiciones de Google. Monitoreada con Search Console y Google Analytics.",
                tecnologias: [nodejs],
                repositorio: "https://nicolaspirello.com/#/proyectos",
                deploy: "https://nudodebruja.es/",
                repoName: "S/Repositorio",
                deployName: "Ir a la Web"
            },
            {
                id: 7,
                titulo: "Landing Page | React y Tailwind CSS",
                descripcion: "Primera web estilizada con el Framwork de Tailwind CSS. Desarrollada con REACT (Create react app) y con su deploy en GitHub con gh-pages.",
                tecnologias: [nodejs],
                repositorio: "https://github.com/NicolasPirello/landing-page-react-tailwind-css",
                deploy: "https://nicolaspirello.github.io/landing-page-react-tailwind-css/",
                repoName: "Repositorio",
                deployName: "Deploy"
            }
            ,
            {
                id: 7,
                titulo: "Firefox Page | Tailwind CSS",
                descripcion: "Landing Page de Firefox con Tailwind CSS. 100% Responsive, con opción de pasar de modo Claro a Oscuro y queda guardado en la Session.",
                tecnologias: [nodejs],
                repositorio: "https://github.com/NicolasPirello/firefox-tailwind",
                deploy: "https://nicolaspirello.github.io/firefox-tailwind/",
                repoName: "Repositorio",
                deployName: "Deploy"
            },
            {
                id: 8,
                titulo: "Tienda Kasaka Anime | Trabajo Cliente",
                descripcion: "Realizada con WordPress y WooCommerce con pasarela de pago. SEO Optimizada, con su Blog y Contacto. Imágenes optimizadas WebP. Totalmente Responsiva.",
                tecnologias: [nodejs],
                repositorio: "#/proyectos",
                deploy: "https://kasakanime.com",
                repoName: "S/Repositorio",
                deployName: "Ir a la Web"
            },
            {
                id: 9,
                titulo: "VegeBox | Practica Laboral",
                descripcion: "Pagina Responsive realizada con HTML, CSS y JS. Formulario de contacto con email de confirmacion a quien lo envia. Card de compartir personalizada. Imagenes WebP",
                tecnologias: [nodejs],
                repositorio: "https://github.com/NicolasPirello/VegeBox-Entrevista-Tecnica",
                deploy: "https://pruebatecnica.online/",
                repoName: "Repositorio",
                deployName: "Ir a la Web"
            }
        ]

    return(

        <div className="homeGeneral">
            
            <div className="homeContainer">

                <span className="homeTitle">Bienvenidos a la sección:</span>
                <h1>Mis Proyectos Web</h1>

                <div className="wrapper">
                    <ul className="texto-dinamico">
                        <li><span>Estos son mis Proyectos Web</span></li>
                        <li><span>Espero sean de tu agrado</span></li>
                        <li><span>Y disfrutes tu permanencia aquí 😊</span></li>
                    </ul>
                </div>

                <hr />

                <div className="textInfo">

                    <p className="homeParrafos">Desde que inicié mi formación en Digital House, me enamoré del mundo de la programación. Ya contaba con conocimientos en SEO y trabajaba con WordPress, pero descubrir este amplio abanico de herramientas de Desarrollo Web fue realmente fascinante.
                    A continuación, comparto los proyectos que he desarrollado, desde mi proyecto integrador hasta creaciones personales en las que sigo trabajando.</p>

                </div>


                <h3 className="masInformacionTitle">¿Querés revisar mis proyectos?</h3>


                <div>

                    <section className="proyectSection">

                        { proyectos.map ( elemento => {

                            return (
                                <ProyectCards 
                                    key={elemento.id} 
                                    proyecto={elemento}
                                />
                            )
                        })}

                    </section>

                </div>

            </div>

         </div>

    )

}

export default Proyectos;