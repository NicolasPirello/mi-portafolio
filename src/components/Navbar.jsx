import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "../Styles/main.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <div className="logo-monogram"></div>
          <div className="logo-text">
            <span className="logo-name">Nicolás Pirello</span>
            <span className="logo-title">Desarrollador Web</span>
          </div>
        </Link>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <NavLink 
            to="/" 
            onClick={closeMenu}
            className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
          >
            Inicio
          </NavLink>
          <NavLink 
            to="/skills" 
            onClick={closeMenu}
            className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
          >
            Skills
          </NavLink>
          <NavLink 
            to="/proyectos" 
            onClick={closeMenu}
            className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
          >
            Proyectos
          </NavLink>
          {/*<NavLink 
            to="/curriculum" 
            className={ ({isActive}) => isActive ? "active" : "" }
          >Curriculum
          </NavLink>*/}
          <NavLink 
            to="/contacto" 
            onClick={closeMenu}
            className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
          >
            Contacto
          </NavLink>
        </div>

        <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;