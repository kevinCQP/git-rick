import axios from "axios"
import { useState } from "react"

const useFetch = () => {
  const [apisData, setapisData] = useState();
  const [estaCargue, setestaCargue] = useState(true);
  const [tieneError, setTieneError] = useState(false);

  const getApi = url => {
    
    axios.get(url)
        .then(res =>  {
           setTieneError(false);
           setapisData(res.data)})
        .catch(err => {
           setTieneError(true);
           console.log(err)})
        .finally(()=>{
           setestaCargue(false)});

    }
    return [apisData, getApi, estaCargue,  tieneError];
  }


export default useFetch;