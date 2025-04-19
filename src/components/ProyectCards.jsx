import React from 'react'


const ProyectCards = ( {proyecto} ) => {

  return (

    <div className="homeCards">

      <div className="card-content">

        <div>
          <h3>{proyecto.titulo}</h3> 
          <p>{proyecto.descripcion}</p>
        </div>

        <div className='esconder'>
          <p>Tecnologias usadas:</p>
          {proyecto.tecnologias.map( elemento => {
            return <img src={elemento} alt="" />
          })}
        </div>
        
        <span className="card-link-info-proyects">
            <a target="_blank" rel="noopener noreferrer" href={proyecto.repositorio}><button className='botonProyect'><span>{proyecto.repoName}</span></button></a>
            <a target="_blank" rel="noopener noreferrer" href={proyecto.deploy}><button className='botonProyect'><span>{proyecto.deployName}</span></button></a>
        </span>

      </div>

      

    </div>
  )
}

export default ProyectCards