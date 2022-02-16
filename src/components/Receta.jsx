import React from 'react'

const Receta = ({receta}) => {
  
  const {idDrink, strDrink, strDrinkThumb} = receta
  
  return (
    <div className='g-col-3'>
      <img  className='mb-4 md-3' src={strDrinkThumb} alt="Receta" />
      <p>{strDrink}</p>
    </div>
  )
}

export default Receta