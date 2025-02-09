import { Link } from "react-router-dom";
import RedesSociales from "./RedesSociales";


function Home () {
    
    return (

        <div className="homeGeneral">
            
            <div className="homeContainer">

                <span className="homeTitle">Bienvenidos a mi Web Personal</span>
                <h1>¡Hola! Soy Nicolás Pirello, Desarrollador Web</h1>

                <div className="wrapper">
                    <ul className="texto-dinamico">
                        <li><span>www.nicolaspirello.com</span></li>
                        <li><span>www.github.com/NicolasPirello</span></li>
                        <li><span>linkedin.com/in/nicolas-pirello</span></li>
                    </ul>
                </div>

                <hr />

                <RedesSociales/>

                <div className="textInfo">

                    <p className="homeParrafos">Estudié en Digital House y continúo capacitándome para mantenerme al día con las últimas tecnologías. Me apasionan los diseños responsivos y la experiencia de usuario intuitiva. Dado que gran parte del tráfico en internet proviene de dispositivos móviles, creo firmemente en optimizar sitios para pantallas de todos los tamaños. ¡Te invito a explorar mi portafolio, que seguiré mejorando constantemente!</p>

                </div>

                <h3 className="masInformacionTitle">¿Querés saber más de mí? Aquí encontrarás secciones con información adicional:</h3>

                <div>

                    <section className="homeSections">
                    
                        <div className="homeCards">
                            <div className="card-content">
                                <h3>Habilidades</h3> 
                                <p>Si querés conocer más sobre mis habilidades de programación, te invito a explorar esta sección. Descubrirás las herramientas y tecnologías que utilizo a diario.</p>
                                
                                <Link to="/skills">
                                    <button className="card-link-info botonHome">
                                        <span>Descubre mis skills</span>
                                    </button>
                                </Link> 

                            </div>
                        </div>

                        <div className="homeCards">
                            <div className="card-content">

                                <h3>Proyectos</h3>
                                <p>Me encanta desarrollar proyectos para aprender nuevas tecnologías y mejorar mis habilidades. Te invito a revisar los que tengo realizados y a conocer sus detalles.</p>

                                <Link to="/proyectos">
                                    <button className="card-link-info botonHome">
                                        <span>Mirar proyectos</span>
                                    </button>
                                </Link>

                            </div>    
                        </div>

                        <div className="homeCards">
                            <div className="card-content">

                                <h3>Curriculum</h3>
                                <p>¿Querés más detalles sobre mi experiencia laboral? Te invito a revisar mi CV, donde encontrarás información sobre mi trayectoria profesional.</p>

                                <Link to="https://drive.google.com/file/d/18b2L_2isa60mToZrHfixFg6V1HtoGwfG/view?usp=sharing" target="_blank">
                                    <button className="card-link-info botonHome">
                                        <span>Ver mi CV</span>
                                    </button>
                                </Link> 

                            </div> 
                        </div>

                        <div className="homeCards">
                            <div className="card-content">
                                
                                <h3>Contacto</h3>
                                <p>¿Te interesa algo de mi trabajo y querés ponerte en contacto? Completá el formulario y te responderé lo antes posible.</p>

                                <Link to="/contacto">
                                    <button className="card-link-info botonHome">
                                        <span>Contactame</span>
                                    </button>
                                </Link> 

                            </div> 
                        </div>

                    </section>

                </div>

            </div>

            <br />
            <br />
            <br />

        </div>

    )
    
}

export default Home;