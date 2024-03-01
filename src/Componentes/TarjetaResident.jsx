import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import './styles/TarjetaResident.css'


const TarjetaResident = ({url}) => {

  const [resident, getResident] = useFetch();
//console.log(residentes)
console.log(resident)
useEffect(() => {
  getResident(url)
}, [])

  return (
    <article className='residente'>
      <figure className='residente_foto'>
        <img src={resident?.image} alt="residente_imagen" />
        <figcaption className='residente_status'>
          <div className={`residente_circle ${resident?.status}`}></div>
          <p>{resident?.status}</p>
        </figcaption>
      </figure>
        <h3 className='residente_nombre'>{resident?.name}</h3>
        <hr />
        <ul className='residente_lista'>
          <li className='residente_item'><span>specie</span><span>{resident?.species}</span></li>
          <li className='residente_item'><span>Origin</span><span>{resident?.origin.name}</span></li>
          <li className='residente_item'><span>Eppisodes where appear</span><span>{resident?.episode.length}</span></li>
        </ul>
      </article>
  )
}

export default TarjetaResident