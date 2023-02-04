import SkillCard from "./SkillCard";


function Dashboard() {

    let skills = [
        {
            id: 1,
            titulo: "HTML",
            descripcion: "Etiquetas | Composicion estructura SEO"
        },
        {
            id: 2,
            titulo: "CSS",
            descripcion: "FlexBox | Grid Layaout | Selectores | Efectos | Animaciones basicas | Querys | Variables"
        },
        {
            id: 3,
            titulo: "JavaScript",
            descripcion: "Variables | Arrays | Funciones y Funciones Flechas | Objetos | Peticiones AJAX | OPP"
        },
        {
            id: 4,
            titulo: "Express",
            descripcion: "Express Validator | Middlewares | Enrutamiento | Peticiones"
        },
        {
            id: 5,
            titulo: "Git",
            descripcion: "Utilizado con GitHub para subir y actualizar repositorios"
        },
        {
            id: 6,
            titulo: "Patron de Arquitectura MVC",
            descripcion: "Modelo, Vista, Controlador"
        },
        {
            id: 6,
            titulo: "Sequelize",
            descripcion: "ORM para manipular Bases de Datos"
        },
        {
            id: 6,
            titulo: "MySQL | SQLServer",
            descripcion: "Consultas Basicas e Intermedias"
        },
        {
            id: 6,
            titulo: "Metodologias Agiles - SCRUM",
            descripcion: "Fomentacion de trabajo en equipo"
        },
        {
            id: 6,
            titulo: "Creacion y Consumo de API´s",
            descripcion: "Creacion de endpoints y consumo de Api´s publicas"
        },
        {
            id: 6,
            titulo: "Postman",
            descripcion: "Testeo de API´s"
        },
        {
            id: 6,
            titulo: "Microsoft Excel",
            descripcion: "Funciones avanzadas | Formatos | Macros | Bases de datos | Analitica | Anidacion de funciones"
        },
        {
            id: 6,
            titulo: "Wordpress",
            descripcion: "Edicion de Temas | Paginas | Entradas | Categorias | Etiquetas | Uso de Plugins"
        },
        {
            id: 6,
            titulo: "SEO",
            descripcion: "Keyword Research | Arquitectura SEO | SEO OnPage | URL´s | Headings | Contenidos | Metadatos | Imagenes | Enlazado Interno | Sitemaps | Indexacion | Canibalizaciones | Mobile | Tiempos de Carga Web"
        },
        {
            id: 6,
            titulo: "PowerBI",
            descripcion: "Creacion de Dashboard basicos e intermedios"
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

                    <p className="homeParrafos">No todos los Desarrolladores tenemos los mismos conocimiento, es por eso que creo importante que conocozcas que habilidades tengo y que herramientas conozco al dia de hoy 😊. Aunque al ser una persona muy curiosa siempre estoy aprendiendo nuevas habilidades de desarrollo, asi que mantendre esta pagina lo mas actualizada posible 🤭</p>

                </div>

                <h3 className="masInformacionTitle">Vamos a lo importante de esta seccion, estas son mis skills:</h3>

                {
                    skills.map( element => {

                       return ( <SkillCard key={element.id} skill={element} /> )
                    })
                }

                

            </div>

        </div>

    );
}

export default Dashboard;
