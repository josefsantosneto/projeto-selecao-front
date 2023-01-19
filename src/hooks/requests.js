const API_URL = 'http://localhost:8000'

async function httpGetEmployees(){
    const response = await fetch(`${API_URL}/employees`);
    
    return await response.json();
}



async function httpAddNewEmployee(employee){
    try{
        return await fetch(`${API_URL}/employees`, {
            method:"post",
            headers:{"content-type": "application/json",},
            body: JSON.stringify(employee),
        });
    } catch(err){
        return {
            ok:false,
        };
    }
}

async function httpDeleteEmployee(id) {
    try {
        return await fetch(`${API_URL}/employees/${id}`, {
            method: "delete",
        });
    }catch(err){
        console.log(err);
        return {
            ok: false,
        };
    }
}

async function httpGetAllPosts(){
    const response = await fetch(`${API_URL}/cargos`);

    return await response.json();
}

async function httpAddNewPost(post){
    try{
        return await fetch(`${API_URL}/cargos`,{
            method:"post",
            headers:{"content-type":"application/json",},
            body:JSON.stringify(post),
        });
    }catch(err){
        return {
            ok:false,
        }
    }
}

export { httpGetEmployees, httpAddNewEmployee, httpDeleteEmployee, httpGetAllPosts, httpAddNewPost }