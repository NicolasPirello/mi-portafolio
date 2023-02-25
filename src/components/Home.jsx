import { Link } from "react-router-dom";
import RedesSociales from "./RedesSociales";



function Home () {
    
    return (

        <div className="homeGeneral">
            
            <div className="homeContainer">

                <span className="homeTitle">Bienvenidos a mi Web Personal</span>
                <h1>Me llamo Nicolas y soy Desarrollador Web.</h1>

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

                    <p className="homeParrafos">Estudie en DigitalHouse y me sigo capacitando constantemente. Me encantan los diseños responsives. Como usuario constante de internet me gusta encontrarme webs con diseños comodos e intuitivos. La mayor parte de la navegacion mundial actualmente es Mobile ¿No es suficiente excusa? Espero que te guste y encuentres interesante mi portafolio, lo mejorare constantemente.</p>

                </div>

                <h3 className="masInformacionTitle">Te dejo con un poco mas de informacion sobre mi:</h3>

                <div>

                    <section className="homeSections">
                        
                        <div className="homeCards">
                            <div className="card-content">

                                <h3>Skills</h3> 
                                <p>Si queres conocer un poco mas sobre mis habilidades de programación te invito a que veas este apartado. Conoceras las herramientas con las que he trabajado.</p>
                                
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
                                <p>Me gusta hacer proyectos para aprender nuevas tecnologias, modulos y todo lo que me sea de utilidad, te invito a que revises los proyectos que llevo realizados.</p>

                                <Link to="/proyectos">
                                    <button className="card-link-info botonHome">
                                        <span>Mira mis proyectos</span>
                                    </button>
                                </Link>

                            </div>    
                        </div>

                        <div className="homeCards">
                            <div className="card-content">

                                <h3>Curriculum</h3>
                                <p>Si queres conocer un poco mas sobre mi, podrias pasar a ver mi CV, detallare mejor mis experiencias laborales y profesional, pasate y miralo.</p>

                                <Link to="https://drive.google.com/file/d/18b2L_2isa60mToZrHfixFg6V1HtoGwfG/view?usp=sharing" target="_blank">
                                    <button className="card-link-info botonHome">
                                        <span>Visita mi CV</span>
                                    </button>
                                </Link> 

                            </div> 
                        </div>

                        <div className="homeCards">
                            <div className="card-content">
                                
                                <h3>Contacto</h3>
                                <p>¿Te intereso algo de mi portafolio y quieres contactarme? Te dejo un formulario para poder hacerlo. Te contestare con brevedad.</p>

                                <Link to="/contacto">
                                    <button className="card-link-info botonHome">
                                        <span>Contacta conmigo</span>
                                    </button>
                                </Link> 

                            </div> 
                        </div>

                    </section>

                </div>

            </div>

        </div>

    )
    
}

export default Home;