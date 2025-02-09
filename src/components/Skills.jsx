import SkillCardNew from "./SkillCardNew";
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



function Dashboard() {

    let skills = [
        {
            id: 1,
            titulo: "HTML",
            descripcion: "Etiquetas | Composicion estructura SEO",
            image: html
        },
        {
            id: 2,
            titulo: "CSS",
            descripcion: "FlexBox | Grid Layaout | Selectores | Efectos | Animaciones basicas | Querys | Variables",
            image: css
        },
        {
            id: 22,
            titulo: "Tailwind CSS",
            descripcion: "FlexBox | Grid Layaout | Selectores | Efectos | Animaciones basicas | Querys | Variables",
            image: tailwindcss
        },
        {
            id: 3,
            titulo: "JavaScript",
            descripcion: "Variables | Arrays | Funciones y Funciones Flechas | Objetos | Peticiones AJAX | OPP",
            image: js
        },
        {
            id: 18,
            titulo: "REACT",
            descripcion: "",
            image: react
        },
        {
            id: 19,
            titulo: "REACT Hooks",
            descripcion: "",
            image: reactHooks
        },
        {
            id: 20,
            titulo: "REACT Router",
            descripcion: "",
            image: reactRouter
        },
        {
            id: 4,
            titulo: "Express",
            descripcion: "Express Validator | Middlewares | Enrutamiento | Peticiones",
            image: express
        },
        {
            id: 5,
            titulo: "Git",
            descripcion: "Utilizado con GitHub para subir y actualizar repositorios",
            image: git
        },
        {
            id: 6,
            titulo: "MVC",
            descripcion: "Modelo, Vista, Controlador",
            image: mvc
        },
        {
            id: 7,
            titulo: "Sequelize",
            descripcion: "ORM para manipular Bases de Datos",
            image: sequelize
        },
        {
            id: 8,
            titulo: "SQLServer",
            descripcion: "Consultas Basicas e Intermedias",
            image: sqlServer
        },
        {
            id: 17,
            titulo: "MySQL",
            descripcion: "Consultas Basicas e Intermedias",
            image: mysql
        },
        {
            id: 16,
            titulo: "NodeJS",
            descripcion: "Etiquetas | Composicion estructura SEO",
            image: nodejs
        },
        {
            id: 9,
            titulo: "SCRUM",
            descripcion: "Fomentacion de trabajo en equipo",
            image: scrum
        },
        {
            id: 10,
            titulo: "API´s",
            descripcion: "Creacion de endpoints y consumo de Api´s publicas",
            image: api
        },
        {
            id: 11,
            titulo: "Postman",
            descripcion: "Testeo de API´s",
            image: postman
        },
        {
            id: 12,
            titulo: "Excel",
            descripcion: "Funciones avanzadas | Formatos | Macros | Bases de datos | Analitica | Anidacion de funciones",
            image: excel
        },
        {
            id: 13,
            titulo: "Wordpress",
            descripcion: "Edicion de Temas | Paginas | Entradas | Categorias | Etiquetas | Uso de Plugins",
            image: wordpress
        },
        {
            id: 13,
            titulo: "WooCommerce",
            descripcion: "Edicion de Temas | Paginas | Entradas | Categorias | Etiquetas | Uso de Plugins",
            image: woocommerce
        },
        {
            id: 14,
            titulo: "SEO",
            descripcion: "Keyword Research | Arquitectura SEO | SEO OnPage | URL´s | Headings | Contenidos | Metadatos | Imagenes | Enlazado Interno | Sitemaps | Indexacion | Canibalizaciones | Mobile | Tiempos de Carga Web",
            image: seo
        },
        {
            id: 15,
            titulo: "PowerBI",
            descripcion: "Creacion de Dashboard basicos e intermedios",
            image: powerbi
        },
        {
            id: 21,
            titulo: "EmailJS",
            descripcion: "",
            image: emailJS
        }
    ]

    return (

        <div className="homeGeneral">
            
            <div className="homeContainer">

                <span className="homeTitle">¡Bienvenido/a a la sección de Habilidades!</span>
                <h1>Mis Skills</h1>

                <div className="wrapper">
                    <ul className="texto-dinamico">
                        <li><span>Si estás interesado en mí</span></li>
                        <li><span>Y querés conocer mis skills</span></li>
                        <li><span>Este es el lugar correcto 😎</span></li>
                    </ul>
                </div>

                <hr />

                <div className="textInfo">

                    <p className="homeParrafos">¿Querés conocer mis habilidades y las herramientas que manejo hasta hoy? Estás en el lugar indicado. Los desarrolladores no siempre compartimos los mismos conocimientos, por eso considero importante mostrar qué domino actualmente y qué estoy aprendiendo. Soy una persona muy curiosa, así que sigo capacitándome y mantendré esta página lo más actualizada posible.</p>

                </div>

                <h3 className="masInformacionTitle">Vamos a lo importante de esta sección:</h3>

                <div className="skillLayaoutGrid">

                    {
                        skills.map( element => {

                        return ( <SkillCardNew key={element.id} skill={element} /> )

                        })
                    }

                </div>
                

                

            </div>

        </div>

    );
}

export default Dashboard;
