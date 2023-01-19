import { Fragment } from "react";
import './edit.styles.scss';
import ClicksInat from "./clicks/clicksInat.component";
import ClickPassword from "./clicks/clicksPassword.component";
import ClickEdit from "./clicks/clicksEdit.component";
import { Link } from "react-router-dom";

const Edit = (props)=> {
const {employees} = props;




    return (
        <Fragment>
            <h2>Edit</h2>
            <div className="legenda">
            <i class="fa-solid fa-key icon"></i> - Resetar Senha |   
            <i class="fa-solid fa-pencil icon"></i> - Editar |
            <i alt='Ativar' class="fa-solid fa-thumbs-down icon"></i> - Desativar Funcionário |
            <i alt='Ativar' class="fa-solid fa-thumbs-up icon"></i> - Ativar Funcionário |


            </div>
<table class="zebra"> 
<thead> 
<tr> 
    <th>Nome</th> 
    <th>CPF</th> 
    <th>Email</th> 
    <th>Status</th> 
    <th>Cargo</th> 
    <th>Ações</th>
</tr> 
</thead> 

        <tbody>
{employees.map((employee)=>(

        <tr> 
            <td>{employee.nome}</td> 
            <td>{employee.cpf}</td> 
            <td>{employee.email}</td> 
            <td>{employee.status}</td> 
            <td>{employee.cargo}</td> 
            <td><Link to="/employeeedit" state={employee}>
                <ClickEdit/>
                </Link> 
                <ClicksInat text="inativar" employee={employee} />  
                <ClickPassword employee={{employee}}/></td>
        </tr> 
))}             

        </tbody> 
        

    
</table> 
        </Fragment>
        

    )
};

export default Edit;