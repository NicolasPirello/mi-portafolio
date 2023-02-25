import React from "react";
import "../App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Skills from "./Skills";
import NotFound from "./NotFound";
import Proyectos from "./Proyectos";
import Contacto from "./Contacto";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>

      <Navbar />

      <div className="contenedorPrincipal">

        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/skills" element={ <Skills/> } />
          <Route path="/proyectos" element={ <Proyectos/> } />
          <Route path="/curriculum" element={ <NotFound/> } />
          <Route path="/contacto" element={ <Contacto/> } />
          <Route path="*" element={ <NotFound/> } />
        </Routes>

      </div>

      <Footer />

    </>
  );
}

export default App;