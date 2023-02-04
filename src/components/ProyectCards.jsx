import React from 'react'

const ProyectCards = ( {proyecto} ) => {


  return (

    <div className="homeCards">
        <div className="card-content">
            <h3>{proyecto.titulo}</h3> 
            <p>{proyecto.descripcion}</p>

                <span className="card-link-info-proyects">
                    <a target="_blank" href={proyecto.repositorio}><button>Repositorio</button></a>
                    <a target="_blank" href={proyecto.deploy}><button>Deploy</button></a>
                    
                </span>
        </div>
    </div>
  )
}

export default ProyectCards