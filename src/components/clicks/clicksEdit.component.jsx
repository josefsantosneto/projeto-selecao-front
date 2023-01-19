import useEmployees from "../../hooks/useEmployees";
import redirect from 'react-router-dom';



const ClickEdit =(props)=>{
    
    const employee = props.employee;

    const handleClick = ()=>{

      
    }

    return(
        <span onClick={handleClick} className="click"> <i class="fa-solid fa-pencil icon"></i> </span>
    )
}



export default ClickEdit