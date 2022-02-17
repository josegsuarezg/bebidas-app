import {useContext} from 'react'
import { RecetasContext } from "../context/RecetasContext";

import Receta from './Receta';


const ListadoRecetas = () => {

//Extraer las Recetas  
const { recetas } = useContext(RecetasContext);


  return (
    <div className='row mt-5'>
      {recetas !== undefined && (
        recetas.map(receta => (
          <Receta 
            key={receta.idDrink}
            receta={receta}
          />
        ))
      )}
    </div>
  )
}

export default ListadoRecetas