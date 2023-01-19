import CompleteInput from '../form-input/form-input.component';
import { useState, useEffect } from 'react';
import { isCPF } from 'validation-br';
import useEmployees from '../../hooks/useEmployees';
import {Link, useNavigate } from 'react-router-dom';
import usePosts from '../../hooks/usePosts';

const Formulario = (employee)=>{

    const {posts} = usePosts();
    

    const defaultFormFields = {
        nome:'',
        cpf:'',
        email:'',
        status:'Ativo',
        cargo:'',
        dataContratacao:'',
        senha:'',
        repetirSenha:'',
        matricula:'',
        dataCadastro: new Date()
    };
   
     
    
    const [formFields, setFormFields]= useState(defaultFormFields);

    useEffect(()=>{
        if(Object.keys(employee).length!==0){
            const default1 = {
                nome:employee.employee.nome,
                cpf:employee.employee.cpf,
                email:employee.employee.email,
                status:employee.employee.status,
                cargo:employee.employee.cargo,
                dataContratacao:employee.employee.dataContratacao,
                senha:employee.employee.senha,
                repetirSenha:employee.employee.senha,
                matricula:employee.employee.matricula,
                dataCadastro: employee.employee.dataCadastro
            };
            setFormFields(default1);
        }
    },[])
 




    const handleChange = (event)=>{
        event.preventDefault();
        const {name, value} = event.target;
        setFormFields({...formFields, [name]:value});
    }

    const {createEmployee} = useEmployees();

    const navigate = useNavigate();
    const goToEdit = ()=>(navigate("/edit"));

    const handleSubmit = async (event)=>{
        event.preventDefault();
        if(isCPF(formFields.cpf)===false){
            alert('CPF Inválido');
        }else if (formFields.senha === formFields.repetirSenha) {
            const date = new Date();
            setFormFields({...formFields, ['dataCadastro']: new Date(formFields.dataCadastro)});
            setFormFields({...formFields, ['dataContratacao']: new Date(formFields.dataContratacao)});
            delete formFields.repetirSenha;
            createEmployee(formFields);
            setFormFields(defaultFormFields);

            alert('Dados Validados e enviados com sucesso');
            goToEdit();
        } else {
            alert('Senhas não conferem');
        }

    };


    
    return(
        <div className='formulario'>
        <form onSubmit={handleSubmit} action='/test' method='POST'>
            <CompleteInput required onChange={handleChange} value= {formFields.nome }name='nome' type='text' label="Nome"/>
            <CompleteInput required onChange={handleChange} value= {formFields.matricula }name='matricula' type='text' label="Matrícula"/>
            <CompleteInput required onChange={handleChange} value= {formFields.cpf }name='cpf' type='text' label="CPF"/>
            <CompleteInput required onChange={handleChange} value= {formFields.email}name='email' type='email' label="email"/>

            <select name='cargo' onChange={handleChange}>
            <option value=''>Selecione um cargo</option>
            {posts.map((post)=>(
                <option value={post.cargo}>{post.cargo}</option>
                ))}
            </select>
                <Link className='link' to='/cadastsrocargo'><i class="fa-solid fa-circle-plus"></i></Link>
            
            <CompleteInput required onChange={handleChange} value= {formFields.dataContratacao}name='dataContratacao' type='date' label="Data de Contratação"/>
            <CompleteInput required onChange={handleChange} value= {formFields.senha}name='senha' type='password' label="Senha" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Sua senha precisa conter um número, uma letra maiúscula, e, no mínimo oito caracteres."/>
            <CompleteInput required onChange={handleChange} value= {formFields.repetirSenha}name='repetirSenha' type='password' label="Repetir Senha"/>

            <div className='form-input'>
                <button className='form-input' type='submit'>Cadastrar</button>
            </div>
        </form>

        </div>
    )
}

export default Formulario;