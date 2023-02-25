import { FaBars, FaTimes } from "react-icons/fa"
import { useRef } from "react"
import "../Styles/main.css"
import { Link, NavLink } from "react-router-dom"
import logo from "../images/Logos/logo-solo-n.png"

function Navbar () {

    // Esto obtiene la barra de navegacion, es como un Document Selector
    const navRef = useRef()

    // Ahora creamos una funcion para eliminar o agregar una clase. Justamente a (navRef)
    // (navRef.current) basicamente accede a la etiqueta nav, por eso lo llamamos asi antes de agregar la clase, sino solo es un objeto con muchas cosas.

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return (
        <>
            <header className="headerTitle">

                <div className="header-logo-Container">

                    <Link to="/">
                        <img className="logo" src={logo} alt="" />
                    </Link>
                    
                </div>

                <nav className="Nicolas" ref={navRef}>

                    <NavLink 
                        onClick={showNavbar} 
                        to="/" 
                        className={({isActive}) => isActive ? "active" : "" }
                        >Inicio
                    </NavLink>

                    <NavLink 
                        onClick={showNavbar} 
                        to="/skills" 
                        className={({isActive}) => isActive ? "active" : "" }
                        >Skills
                    </NavLink>

                    <NavLink 
                        onClick={showNavbar} 
                        to="/proyectos" 
                        className={ ({isActive}) => isActive ? "active" : "" }
                        >Proyectos
                    </NavLink>

                    {/*<NavLink 
                        onClick={showNavbar} 
                        to="/curriculum" 
                        className={ ({isActive}) => isActive ? "active" : "" }
                        >Curriculum
                    </NavLink>*/}

                    <NavLink 
                        onClick={showNavbar} 
                        to="/contacto" 
                        className={ ({isActive}) => isActive ? "active" : "" }
                        >Contacto
                    </NavLink>

                    <button 
                        onClick={showNavbar} 
                        className="nav-btn nav-close-btn headerBtnClose">  {/* Lo ponemos en el boton con el fin de agregar o quitar la clase */}
                        <FaTimes />
                    </button>

                </nav>

                <button 
                    onClick={showNavbar} 
                    className="nav-btn headerBtnOpen"> {/* Lo ponemos en el boton con el fin de agregar o quitar la clase */}
                    <FaBars />
                </button>

            </header>
        </>
    )
}

export default Navbar;