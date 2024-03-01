import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import TarjetaLocalizar from './Componentes/TarjetaLocalizar';
import TarjetaResident from './Componentes/TarjetaResident';

function App() {
  //const [localizacion, setLocalizacion] = useState()
  const [ apiData, obtenerApi, esCargando, haveError] = useFetch();
  const [encontrar, setEncontrar] = useState(Math.floor(Math.random()*126))
  
  useEffect(() => {
    //const randomNumero = Math.floor(Math.random()*126);
    const url =`https://rickandmortyapi.com/api/location/${encontrar}`;
    obtenerApi(url)
    
  }, [encontrar])
  //console.log(apiData)
  //console.log(randomNumero)
  const colocarText =  useRef();
 console.log(encontrar)

  const botonMano = event => {
    event.preventDefault();
    setEncontrar(colocarText.current.value.trim())
  }
  return (
   <div  className='app'>
   
   <>
       {esCargando?
       <h2>is loading</h2>
       :
       <>
          <h1>Rick y Morty</h1>
          <form onSubmit={botonMano}
                className='app_form'>
           <input
           className='app_texto'
             type="number" 
             ref = {colocarText}/>
            <button className='app_btn'
            >buscar</button>
          </form>

          { haveError  || encontrar === '0' ?
          <h2>hey! you must provide an id from 1 to 126</h2>
           :
           <>
            <TarjetaLocalizar
             rick = {apiData}/>
              
              <div className='app_container'>
              {
             apiData?.residents.map(user => (
               
              
                <TarjetaResident
              key={user}
               url = {user}
              /> 
              
               ))
              }
              </div>

           </>
          }
          
       </>
       }
    </>
  </div>
)

}


export default App;
