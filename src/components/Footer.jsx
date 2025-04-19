import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="newFooter">
      <div className="newFooter__container">
        <div className="footer-content">
          <div className="footer-brand">
            <p>© {new Date().getFullYear()} Nicolás Pirello</p>
          </div>
          
          <div className="footer-links">
            <Link to="/skills">Skills</Link>
            <Link to="/proyectos">Proyectos</Link>
            <Link to="/contacto">Contacto</Link>
            <a href="https://drive.google.com/file/d/18b2L_2isa60mToZrHfixFg6V1HtoGwfG/view" target="_blank" rel="noopener noreferrer">CV</a>
          </div>
          
          <div className="footer-social">
            <a href="https://github.com/NicolasPirello" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/nicolas-pirello/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;