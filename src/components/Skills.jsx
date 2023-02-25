import SkillCardNew from "./SkillCardNew";
import nodejs from "../images/node-js.jpg"
import html from "../images/html.jpg"
import css from "../images/css.jpg"
import js from "../images/js.jpg"
import express from "../images/express.jpg"
import git from "../images/git.jpg"
import sequelize from "../images/sequelize.jpg"
import sqlServer from "../images/sql-server.jpg"
import mysql from "../images/mysql.jpg"
import scrum from "../images/scrum.jpg"
import api from "../images/api.jpg"
import postman from "../images/postman.jpg"
import excel from "../images/excel.jpg"
import wordpress from "../images/wordpress.jpg"
import seo from "../images/seo.jpg"
import powerbi from "../images/powerbi.jpg"
import mvc from "../images/mvc.jpg"
import reactRouter from "../images/react router.jpg"
import reactHooks from "../images/reactHooks.jpg"
import react from "../images/react.jpg"
import emailJS from "../images/emailJS.jpg"



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

                <span className="homeTitle">Bienvenidos a la seccion:</span>
                <h1>Mis Skills</h1>

                <div className="wrapper">
                    <ul className="texto-dinamico">
                        <li><span>Si estas interesado en mi</span></li>
                        <li><span>Y queres conocer mis skills</span></li>
                        <li><span>Este es el lugar correcto 😎</span></li>
                    </ul>
                </div>

                <hr />

                <div className="textInfo">

                    <p className="homeParrafos">No todos los Desarrolladores tenemos los mismos conocimientos, es por eso que creo importante que conocozcas que habilidades tengo y que herramientas conozco al dia de hoy. Aunque al ser una persona muy curiosa siempre estoy aprendiendo nuevas habilidades de desarrollo, asi que mantendre esta pagina lo mas actualizada posible.</p>

                </div>

                <h3 className="masInformacionTitle">Vamos a lo importante de esta seccion, estas son mis skills:</h3>

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
