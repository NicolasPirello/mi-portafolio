import React from 'react'

const SkillCard = ( {skill} ) => {

    console.log(skill)

  return (

        <div className="skillsContainer">
            <h3>{skill.titulo}:</h3>
            <p>{skill.descripcion}.</p>
        </div>

  )

}

export default SkillCard