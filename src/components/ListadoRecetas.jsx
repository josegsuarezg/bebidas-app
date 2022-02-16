import {useState, useEffect, useContext} from 'react'
import { RecetasContext } from "../context/RecetasContext";
import Receta from './Receta';


const ListadoRecetas = () => {
  
const { recetas } = useContext(RecetasContext);

console.log(recetas);
  return (
    <div className="container">
        <div className="grid">
          <div>
          {recetas !== undefined && (
            recetas.map(receta => (
              <Receta 
                key={receta.idDrink}
                receta={receta}
              />
            ))
          )}
          </div>
        </div>
    </div>
  )
}

export default ListadoRecetas