import ProyectCards from "./ProyectCards";

function Proyectos () {

    const proyectos = 
        [
            {
                id: 1,
                titulo: "Tienda de Cafe | Proyecto Integrador",
                descripcion: "Este es el proyecto integrador de mi grupo en Digital House. Es una tienda que vende productos de cafe. Tiene distintos perfiles de usuarios que permite realizar compras o administrar la tienda.",
                tecnologias: "NodeJS | Javascript | Express | CSS | HTML | MySQL",
                repositorio: "https://github.com/NicolasPirello/MecafeG6-DH-Pirello",
                deploy: "https://mecafeg6-dh-pirello-production.up.railway.app/",
                repoName: "Repositorio",
                deployName: "Deploy"
            },
            {
                id: 2,
                titulo: "Dashboard Tienda de Cafe",
                descripcion: "Un dashboard analitico que consume la APi del proyecto integrador, donde se muestra informacion de la cantidad de productos en cada categoria, el ultimo producto creado y el ultimo usuario creado.",
                tecnologias: "NodeJS | Javascript | Express | CSS | HTML",
                repositorio: "https://github.com/NicolasPirello/MecafeREACT-DH-Pirello",
                deploy: "https://nicolaspirello.github.io/MecafeREACT-DH-Pirello/",
                repoName: "Repositorio",
                deployName: "Deploy"
            },
            {
                id: 3,
                titulo: "Tarjetas Responsive",
                descripcion: "Es un proyecto chico de REACT donde se listan 3 tarjetas con diferente contenido utilizando un unico componente, fue una de mis primeras practicas con esta tecnologia.",
                tecnologias: "NodeJS | Javascript | Express | CSS | HTML",
                repositorio: "https://github.com/NicolasPirello/react-cards-responsive",
                deploy: "https://nicolaspirello.github.io/react-cards-responsive/",
                repoName: "Repositorio",
                deployName: "Deploy"
            },
            {
                id: 4,
                titulo: "Personajes de Rick and Morty",
                descripcion: "Una Web desarrollada con REACT y el concepto de SPA donde consumo una API Publica con el fin de listar los personajes de la famosa serie de Rick and Morty. Estilada con CSS puro.",
                tecnologias: "NodeJS | Javascript | Express | CSS | HTML",
                repositorio: "https://github.com/NicolasPirello/react-rick-and-morty",
                deploy: "https://nicolaspirello.github.io/react-rick-and-morty/",
                repoName: "Repositorio",
                deployName: "Deploy"
            },
            {
                id: 5,
                titulo: "Listador de Tareas",
                descripcion: "Una app para listar tareas que trae listadas algunas por defecto y a medida que se actualizan se va modificando el Archivo JSON pero no se guarda en ningun lado, realizado para entender el CRUD en REACT.",
                tecnologias: "NodeJS | Javascript | Express | CSS | HTML",
                repositorio: "https://github.com/NicolasPirello/app-task-react",
                deploy: "https://nicolaspirello.github.io/app-task-react/",
                repoName: "Repositorio",
                deployName: "Deploy"
            },
            {
                id: 6,
                titulo: "Listador de Peliculas",
                descripcion: "Una app para listar peliculas, donde el CRUD se hace y guarda en el LocalStorage. Cuenta con un buscador que va actualizando las peliculas a medida que el usuario realiza una busqueda.",
                tecnologias: "NodeJS | Javascript | Express | CSS | HTML",
                repositorio: "https://github.com/NicolasPirello/app-movies-list-react",
                deploy: "https://nicolaspirello.github.io/app-movies-list-react/",
                repoName: "Repositorio",
                deployName: "Deploy"
            },
            {
                id: 7,
                titulo: "Portafolio Personal",
                descripcion: "Este es mi mi portafolio, en el que estas actualmente navegando, pero tambien forma parte de mis proyectos ya que lo realice con REACT y estoy mejorandolo constantemente.",
                tecnologias: "NodeJS | Javascript | Express | CSS | HTML",
                repositorio: "https://nicolaspirello.com/#/proyectos",
                deploy: "https://nicolaspirello.com/",
                repoName: "Repositorio privado",
                deployName: "Ir a la Web"
            },
            {
                id: 7,
                titulo: "Nudo de Brujas (Wordpress)",
                descripcion: "Hecha en base a un Keyword Research para posicionar en Google. Enfocada a Mobile. Con palabras claves posicionadas en las primeras posiciones de Google. Monitoreada con Search Console y Google Analitycs.",
                tecnologias: "NodeJS | Javascript | Express | CSS | HTML",
                repositorio: "https://nicolaspirello.com/#/proyectos",
                deploy: "https://nudodebruja.es/",
                repoName: "Sin repositorio",
                deployName: "Ir a la Web"
            },
            {
                id: 7,
                titulo: "Landing Page | React y Tailwind CSS",
                descripcion: "Primera web estilizada con el Framwork de Tailwind CSS. Desarrollada con REACT (Create react app) y con su deploy en GitHub con gh-pages.",
                tecnologias: "React | Tailwind CSS",
                repositorio: "https://github.com/NicolasPirello/landing-page-react-tailwind-css",
                deploy: "https://nicolaspirello.github.io/landing-page-react-tailwind-css/",
                repoName: "Repositorio",
                deployName: "Deploy"
            }
        ]

    return(

        <div className="homeGeneral">
            
            <div className="homeContainer">

                <span className="homeTitle">Bienvenidos a la seccion:</span>
                <h1>Mis Proyectos Web</h1>

                <div className="wrapper">
                    <ul className="texto-dinamico">
                        <li><span>Estos son mis Proyectos Web</span></li>
                        <li><span>Espero sean de tu agrado</span></li>
                        <li><span>Y disfrutes tu permanencia aqui 😊</span></li>
                    </ul>
                </div>

                <hr />

                <div className="textInfo">

                    <p className="homeParrafos">Desde que comenze a estudiar programación en Digital House me enamore de este mundo. Yo tenia conocimientos de SEO Web pero siempre hice paginas en Wordpress, conocer todo este abanico de herramientas que tiene el Desarrollo me asombro y fascino, es por eso que aca te voy a dejar mis proyectos desarrollados. Desde mi proyecto integrador hasta mis proyectos personales que voy haciendo.</p>

                </div>


                <h3 className="masInformacionTitle">Si queres revisar mis proyectos te los dejo aca con una mini descripcion:</h3>

                <div>

                    <section className="homeSections">

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