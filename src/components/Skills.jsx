import React, { useEffect } from 'react';
import SkillCardNew from "./SkillCardNew";
import TextoDinamico from "./TextoDinamico";
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

const Skills = () => {
    const textosSkills = [
        "Elijo herramientas por su valor, no por su moda.",
        "Elijo lo simple cuando lo simple funciona.",
        "Mi stack cambia, mi criterio permanece.",
        "La mejor herramienta es la que resuelve el problema de forma clara.",
        "Si una tecnología no resuelve un problema, no es la adecuada."
    ];

    const skills = [
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
            id: 23,
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

        const sections = document.querySelectorAll('.skill-section');
        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    const skillCategories = {
        frontend: skills.filter(skill => 
            ['HTML', 'CSS', 'JavaScript', 'REACT', 'REACT Hooks', 'REACT Router', 'Tailwind CSS'].includes(skill.titulo)
        ),
        backend: skills.filter(skill => 
            ['NodeJS', 'Express', 'Sequelize', 'SQLServer', 'MySQL'].includes(skill.titulo)
        ),
        herramientas: skills.filter(skill => 
            ['Git', 'Postman', 'SCRUM', 'MVC', 'API´s'].includes(skill.titulo)
        ),
        adicionales: skills.filter(skill => 
            ['Excel', 'Wordpress', 'WooCommerce', 'SEO', 'PowerBI', 'EmailJS'].includes(skill.titulo)
        )
    };

    return (
        <div className="homeGeneral">
            <div className="skills-container">
                <div className="skills-header">
                    <h1 className="skills-title">Habilidades Técnicas</h1>
                    <TextoDinamico textos={textosSkills} />
                </div>

                <div className="skill-section">
                    <p className="skills-description">
                        Como desarrollador, domino un conjunto integral de tecnologías y herramientas que me permiten crear soluciones robustas y escalables. Mi experiencia abarca desde el desarrollo frontend hasta la implementación de sistemas backend, siempre enfocado en mantener estándares de calidad y seguridad conjuntamente con la mejor experiencia que le pueda brindar al Usuario, quien es el que consume el servicio desarrollado.
                    </p>
                </div>

                <div className="skills-content">
                    <section className="skill-section">
                        <h2 className="category-title">Frontend Development</h2>
                        <div className="skills-grid">
                            {skillCategories.frontend.map(element => (
                                <SkillCardNew key={element.id} skill={element} />
                            ))}
                        </div>
                    </section>

                    <section className="skill-section">
                        <h2 className="category-title">Backend Development</h2>
                        <div className="skills-grid">
                            {skillCategories.backend.map(element => (
                                <SkillCardNew key={element.id} skill={element} />
                            ))}
                        </div>
                    </section>

                    <section className="skill-section">
                        <h2 className="category-title">Herramientas de Desarrollo</h2>
                        <div className="skills-grid">
                            {skillCategories.herramientas.map(element => (
                                <SkillCardNew key={element.id} skill={element} />
                            ))}
                        </div>
                    </section>

                    <section className="skill-section">
                        <h2 className="category-title">Habilidades Adicionales</h2>
                        <div className="skills-grid">
                            {skillCategories.adicionales.map(element => (
                                <SkillCardNew key={element.id} skill={element} />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Skills;
