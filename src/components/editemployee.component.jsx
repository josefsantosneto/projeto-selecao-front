import FormularioEdit from './form/formEdit.component'
import './cadastro.styles.scss';
import { useLocation } from 'react-router-dom';


const EditEmployee = ()=>{
    const location = useLocation();
   const employee = location.state;

   return(
        <div>
            <h2>Editar Funcionário</h2>
            <FormularioEdit employee={employee} />
        </div>
    )
};

export default EditEmployee;