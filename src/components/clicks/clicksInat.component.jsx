import useEmployees from "../../hooks/useEmployees";



const ClicksInat=(props)=>{
    const {createEmployee} = useEmployees();

    const employee = props.employee;

    const handleClick = ()=>{
        if(employee.status ==="Ativo"){
            const employeeToUpdate = {...employee, 'status':'Inativo'}
            createEmployee(employeeToUpdate);
        }else{
            const employeeToUpdate = {...employee, 'status':'Ativo'}
            createEmployee(employeeToUpdate);
        }

    }

    return(
        <span onClick={handleClick} className="click"> {employee.status==="Ativo" ? <i alt='Ativar' class="fa-solid fa-thumbs-down"></i> : <i alt='Ativar' class="fa-solid fa-thumbs-up"></i> } </span>
    )
}



export default ClicksInat