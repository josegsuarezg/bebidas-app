import { createContext, useEffect, useState } from "react";
import axios from "axios";

//Creamos el Contexto
export const RecetasContext = createContext();

//Creamos el Privider
const RecetasProvider = (props) => {
  //Creamos es State del Context
  const [recetas, setRecetas] = useState([]);
  const [busquedaRecetas, setBusquedaRecetas] = useState({
    nombre: '',
    categoria: ''
  })
  
  //Ejecutamos el Llamado a la Api
  useEffect(() => {
    
    const obtenerRecetas = async () => {
      const {nombre, categoria} = busquedaRecetas;
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
      const recetas = await axios.get(url);
      setRecetas(recetas.data.drinks);
      // setRecetas(recetas);
    }
    obtenerRecetas();
  }, [busquedaRecetas])
  
  
  return (
    <RecetasContext.Provider
      value={{
        setBusquedaRecetas,
        recetas
      }}
    >
      {props.children}
    </RecetasContext.Provider>
  )
}

export default RecetasProvider;