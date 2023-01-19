import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import Logo from "../assets/logo512.png"
import './navigation.component.scss'
const Navigation = ()=>{

    return(
        <Fragment>
            <div className="navigation">
                <img className='logo'src={Logo}/>
                <h1 className="title">Cadastro de Clientes React Node JS</h1>
                <div className="links-box"><Link className='link' to='/'>Cadastro</Link>  
                         <Link className='link' to='/edit'>Visualizar/Editar</Link></div>
            
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;