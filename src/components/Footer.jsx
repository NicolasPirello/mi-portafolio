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
                    <p>Este es mi pagina web personal. Esta web esta <strong>Desarrollada en REACT</strong>. | ©Nicolas Alejandro Pirello | 2023 <strong></strong>.</p>
                </div>

                <div className="newFooter__box">

                    <div className="newFooter__itemsBox">
                        <h4>INFORMACION</h4>
                        <p>Curriculum</p>
                        <p>Skills</p>
                        <p></p>
                    </div>
            
                    <div className="newFooter__itemsBox">
                        <h4>LINKS</h4> 
                        <p>Proyectos</p>
                        <p>Contacto</p>
                    </div>
            
                    <div className="newFooter__itemsBox">
                        <h4>SOCIAL</h4>
                        <p>LinkedIn</p>
                        <p>GitHub</p>
                    </div>

                </div>

            </section>
              
        </footer>

    )

}

export default Footer;