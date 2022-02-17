import { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}
const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 500,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

const Receta = ({receta}) => {
  
    //Configuración del Modal de Material-UI
  const [ modalStyle ] = useState(getModalStyle);
  const [ open, setOpen ] = useState(false);
  const clases = useStyles();
  
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  
  //
  const { setIdRecetas, informacion, setReceta } = useContext(ModalContext);
  
  //Listar los Ingredientes y cantidades
  const mostrarIngredientes = informacion => {
    let ingredientes = [];
    
    for (let i = 1; i < 16; i++) {
      if(informacion[`strIngredient${i}`]) {
        ingredientes.push(
          <li>{informacion[`strIngredient${i}`]} {informacion[`strMeasure${i}`]}</li>
        )
      }
    }
    
    return ingredientes;
  }
  
  return (
    <div className='col-md-4 mb-3'>
      <div className="card">
        <h2 className="card-header">{receta.strDrink}</h2>
        <img className='card-img-top' src={receta.strDrinkThumb} alt={receta.strDrink} />
        <div className='card-body'>
          <button 
            type='button'
            className='btn btn-primary btn-block'
            onClick={() => {
              setIdRecetas(receta.idDrink);
              handleOpen();
            }}
          >
            Ver Receta
          </button>
          
          <Modal
            open={open}
            onClose={() => {
              handleClose();
              setIdRecetas(null);
              setReceta({})
            }}
          >
            <div style={modalStyle} className={clases.paper}>
              <h2>{informacion.strDrink}</h2>
              <h3 className="mt-4">Instrucciones</h3>
              <p>{informacion.strInstructions}</p>
              <h3 className="mt-4">Ingredientes y Cantidades</h3>
              <ul>
                {mostrarIngredientes(informacion)}
              </ul>
              {/* <img className="img-fluid my-4" src={informacion.strDrinkThumb} /> */}
            </div>
          </Modal>
          
        </div>
      </div>
    </div>
  )
}

export default Receta