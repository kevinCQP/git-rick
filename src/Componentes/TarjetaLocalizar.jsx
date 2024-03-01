import React from 'react'
import './styles/locationCard.css'


const TarjetaLocalizar = ({rick}) => {
   
  return (
    <section className='locacion'>
        <h2 className='locacion_title'>{rick?.name}</h2>
        <ul className='locacion_listas'> 
          <li className='locacion_item'><span className='locacion_span'>Type: </span>{rick?.type}</li>
          <li className='locacion_item'><span className='locacion_span'>Dimension: </span>{rick?.dimension}</li>
          <li className='locacion_item'><span className='locacion_span'>Population: </span>{rick?.residents.length}</li>
        </ul>
        </section>
  )
}

export default TarjetaLocalizar

