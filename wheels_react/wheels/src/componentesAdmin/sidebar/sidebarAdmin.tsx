import "./sidebarAdmin.css"
import { FC } from "react";
import {SettingsOutline } from "react-ionicons";
import { Link } from 'react-router-dom';


export const SidebarAdmin: FC = () => {

    return(
        <div className="sidebarAdmin">
            <ul>
                
            <li>
                <SettingsOutline
                color={'#ffffff'}    
                height="22px"         
                width="22px" 
                />
                <Link to="goma" >Wheels</Link>
            </li>


                <div className="divider"></div>
                <li>
                <SettingsOutline
                color={'#ffffff'}    
                height="22px"         
                width="22px" 
                />
                    <Link to="portada">Portada</Link></li>
                <div className="divider"></div>
                
                <li>
                <SettingsOutline
                color={'#ffffff'}    
                height="22px"         
                width="22px" 
                />
                <Link to="diametro">Diametros</Link></li>
                <li>
                <SettingsOutline
                color={'#ffffff'}    
                height="22px"         
                width="22px" 
                /><Link to="diseno">Diseños</Link></li>
                <li>
                <SettingsOutline
                color={'#ffffff'}    
                height="22px"         
                width="22px" 
                /><Link to="marca">Marcas</Link></li>
                <li>
                <SettingsOutline
                color={'#ffffff'}    
                height="22px"         
                width="22px" 
                /><Link to="categoria">Categorias</Link></li>
                <li>
                <SettingsOutline
                color={'#ffffff'}    
                height="22px"         
                width="22px" 
                /><Link to="velocidad">Velocidad</Link></li>
                <li>
                <SettingsOutline
                color={'#ffffff'}    
                height="22px"         
                width="22px" 
                /><Link to="size">Size</Link></li>
            </ul>

        </div>
    )
}


