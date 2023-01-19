import useEmployees from "../../hooks/useEmployees";



const ClickPassword =(props)=>{
    const {createEmployee} = useEmployees();

    const employee = props.employee.employee;

    const handleClick = async ()=>{
        const employeeToUpdate = {...employee, 'senha':'Abcd@1234'}
        createEmployee(employeeToUpdate);
        alert(`Sua senha do funcionário ${employeeToUpdate.nome} foi resetada para padrão Abcd@1234`)
        
    }

    return(
        <span onClick={handleClick} className="click"> <i class="fa-solid fa-key"></i> </span>
    )
}



export default ClickPassword