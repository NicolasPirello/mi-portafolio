import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import NotFound from "./components/NotFound";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";
import Home from "./components/Home";
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