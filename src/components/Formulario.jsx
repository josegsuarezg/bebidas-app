import { useContext } from "react"
import { CategoriasContext } from "../context/CategoriasContext"

const Formulario = () => {
  
  const { categorias } = useContext(CategoriasContext);
  
  return (
    <form className='col-12'>
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
          />
        </div>
        <div className="col-md-4 mb-3">
          <select 
            name="categoria" 
            className='form-control'
          >
            <option value="">-- Selecciona Categoria --</option>
            {categorias.map((categoria, index) => (
              <option key={index}>{categoria.strCategory}</option>
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