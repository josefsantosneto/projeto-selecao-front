import './createPost.styles.scss';
import CompleteInput from '../form-input/form-input.component';
import { useState } from 'react';
import usePosts from '../../hooks/usePosts';
import {useNavigate} from 'react-router-dom';


const CreatePost = ()=>{
    const {posts}= usePosts();
    const postCode = Number(posts.length + 1);
    
    const defaultFormFields = {
        codigoCargo:postCode,
        cargo:''
    }
    
    const {addNewPost}=usePosts();
    const [cargo, setCargo] = useState(defaultFormFields);

    const handleChange = (event)=>{
        event.preventDefault();
        const {name, value} = event.target;
        setCargo({...cargo, [name]:value,codigoCargo:postCode});
    }

    const navigate = useNavigate();
    const redirectCadastro = ()=> navigate('/')
    
    const handleSubmit = async (event)=>{
        event.preventDefault();
        addNewPost(cargo);
        redirectCadastro();
    }


    return (
        <div>
            <form onSubmit={handleSubmit} action='/cargos' method='POST'>
                <CompleteInput required disabled onChange={handleChange} value= {postCode} name='codigoCargo' type='text' label="Código do Cargo"/>
                <CompleteInput required onChange={handleChange} name='cargo' type='text' label="Nome do Cargo"/>
                <div className='form-input'>
                    <button className='form-input' type='submit'>Cadastrar Cargo</button>
                </div>
            </form>
        </div>
    )

}

export default CreatePost;