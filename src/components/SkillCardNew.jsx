import React from 'react'

const SkillCardNew = ( {skill} ) => {

    /*
    
    <h3>{skill.titulo}:</h3>
    <p>{skill.descripcion}.</p>

    */

    console.log(skill.image)

  return (

        <div className="skillsContainerNew">
            
            <div className='image'>
                <img className='skillImage' src={skill.image} alt="" />
            </div>

            <div className='skillTituloContainer'>
                <h3>{skill.titulo}</h3>
            </div>

        </div>

  )

}

export default SkillCardNew