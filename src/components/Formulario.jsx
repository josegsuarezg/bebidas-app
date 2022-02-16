import { useContext, useState } from "react";
import { CategoriasContext } from "../context/CategoriasContext";
import { RecetasContext } from "../context/RecetasContext";

const Formulario = () => {
  
  const [busqueda, setBusqueda] = useState({
    nombre: '',
    categoria: ''
  })
  
  //Funsión para guardar los datos que introduce el usuario
  const hadleOnChange = e => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    })
  }
  
  const { categorias } = useContext(CategoriasContext);
  const { setBusquedaRecetas } = useContext(RecetasContext);
  
  const handleSubmit = e => {
    e.preventDefault();
    setBusquedaRecetas(busqueda);
  }
  
  return (
    <form 
      className='col-12'
      onSubmit={handleSubmit}
    >
      <fieldset className='text-center mb-4'>
        <legend>Busca Bebidas por Categorias o Ingredientes</legend>
      </fieldset>
      
      <div className="row">
        <div className="col-md-4 mb-3">
          <input 
            type="text" 
            name='nombre'
            className='form-control'
            placeholder='Buscar por Ingrediente'
            onChange={hadleOnChange}
          />
        </div>
        <div className="col-md-4 mb-3">
          <select 
            name="categoria" 
            className='form-control'
            onChange={hadleOnChange}
          >
            <option value="">-- Selecciona Categoria --</option>
            {categorias.map(categoria => (
              <option 
                key={categoria.strCategory}
                value={categoria.strCategory}
              >{categoria.strCategory}</option>
            ))}
          </select>
        </div>
        <div className="col-md-4 mb-3">
          <input 
            type="submit" 
            className='btn btn-primary btn-block'
            value='Buscar'
          />
        </div>
        
      </div>
      
    </form>
  )
}

export default Formulario