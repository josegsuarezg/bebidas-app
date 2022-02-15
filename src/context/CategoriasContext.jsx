import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Creamos un Context
export const CategoriasContext = createContext();

//Creamos el Provider, que es donde se encuentran las funsiones y el state
const CategoriasProvider = (props) => {
  
  //Creamos el State del Contex
  const [categorias, setCategorias] = useState([]);
  
  //Ejecutando el llamado a la Api
  useEffect(() => {
    const obtenerCategorias = async () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
      const categorias = await axios.get(url)
      setCategorias(categorias.data.drinks);
    }
    obtenerCategorias()
  }, [])
  
  
  return (
    <CategoriasContext.Provider
      value={{
        categorias
      }}
    >
      {props.children}
    </CategoriasContext.Provider>
  )
}

export default CategoriasProvider;
