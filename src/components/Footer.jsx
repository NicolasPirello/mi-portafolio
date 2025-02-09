import { FaTwitter } from "react-icons/fa"


function Footer () {

    return (

        <footer className="newFooter">
            
            <section className="newFooter__container">

                <div className="newFooter__desktop">
                    <h4>
                        <span>PORTAFOLIO | </span>
                        <span className="newFooter__titleSpan">NICOLAS PIRELLO</span>
                    </h4>
                    <p>Este es mi pagina web personal. Esta web esta <strong>Desarrollada en REACT</strong>. | © Nicolas Alejandro Pirello | 2023 - 2025 <strong></strong>.</p>
                </div>

                <div className="newFooter__box">

                    <div className="newFooter__itemsBox">
                        <h4>INFORMACION</h4>
                        <p><a target="_blank" href="https://drive.google.com/file/d/18b2L_2isa60mToZrHfixFg6V1HtoGwfG/view">Curriculum</a></p>
                        <p><a href="/#/skills">Skills</a></p>
                    </div>
            
                    <div className="newFooter__itemsBox">
                        <h4>LINKS</h4> 
                        <p><a href="/#/proyectos">Proyectos</a></p>
                        <p><a href="/#/contacto">Contacto</a></p>
                    </div>
            
                    <div className="newFooter__itemsBox">
                        <h4>SOCIAL</h4>
                        <p><a target="_blank" href="https://www.linkedin.com/in/nicolas-pirello/">LinkedIn</a></p>
                        <p><a target="_blank" href="https://github.com/NicolasPirello">GitHub</a></p>
                    </div>

                </div>

            </section>
              
        </footer>

    )

}

export default Footer;