import {httpGetEmployees, httpAddNewEmployee, httpDeleteEmployee} from '../hooks/requests';
import { useCallback, useState, useEffect } from "react";

function useEmployees(){
    const [employees, saveEmployees ] = useState([]);

    const getEmployees = useCallback(async ()=>{
        const fetchedEmployees = await httpGetEmployees();
        saveEmployees(fetchedEmployees);
    });

    useEffect(()=>{
        getEmployees();
    },[employees]);


    const createEmployee = async (employee)=>{
        await httpAddNewEmployee(employee);
    }

    const deleteEmployee = useCallback(async (id)=>{
        const response = await httpDeleteEmployee(id);

    });

    return {employees, createEmployee, deleteEmployee};
    }




export default useEmployees;
