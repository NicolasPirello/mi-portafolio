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
                    <p>Hola! Me llamo <strong>Nicolas Pirello</strong>, estudie Desarrollo Web Full Stack en <strong>Digital House</strong>. Amante del diseño responsive. Me fascina React y su SPA. Me gusta aprender constantemente y superarme en cada proyecto personal.</p>
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