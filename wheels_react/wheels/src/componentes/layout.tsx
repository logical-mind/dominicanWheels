import { FC } from "react"
import $ from 'jquery';
import "./layout.css"
import "./marcas.css"
import { Sidebar } from "./sidebar/sidebar"
import { Marcas } from "./marcas/marcas"
import { Navbar2 } from "./navbar/navbar"
import { PreNavbar } from "./prenavbar/prenavbar"
import { Card } from "./card/card"

import { Outlet } from "react-router-dom"
import { Menu } from 'react-ionicons';


export const Layout: FC = () => {

    const handleResize = () => {
        const elemento5 = document.getElementById('right');
        const elemento2 = document.getElementById('contenedor');
        if (window.innerWidth > 900) {
            if(elemento5){
                elemento5.style.display = 'block';
            }
        }else{
            if(elemento5 && elemento2)
            if(elemento2.classList.contains('contenedor-3')){
                elemento5.style.display = 'none'
            }
          
        }
    };
    
    window.addEventListener('resize', handleResize);
    

   
    const verificarTranslate = () => {
        const elemento2 = document.getElementById('contenedor');
        const elemento = document.getElementById('left');
        const elemento1 = document.getElementById('right');

        if (elemento && elemento1 && elemento2) {
            if (elemento2.classList.contains('contenedor-2')) {

                elemento2.classList.remove('contenedor-2');
                elemento.classList.remove('left-2');
                elemento.classList.add('left-3');
                elemento2.classList.add('contenedor-3');
                elemento1.style.display = 'none';
            }
            else {

                elemento2.classList.add('contenedor-2');
                elemento.classList.add('left-2');
                elemento.classList.remove('left-3')
                elemento2.classList.remove('contenedor-3');
                elemento1.style.display = 'block';
            }
        }

    };


    return (
        <>
            <div id="contenedor" className="contenedor contenedor-2">
              
                <div className="preNavbar">
                 
                <PreNavbar/>

                </div>

                <div className="navbar1">
                    <div className="menu-sidebar" onClick={verificarTranslate} >
                        <Menu
                            height="38px"
                            width="38px"
                            color="gray"
                        />

                    </div>

                    <Navbar2 />
                </div>

                <div className="navbar2">
                       
                </div>

                <div id="left" className="left left-2">
                    <Sidebar />
                </div>

                <div id="right" className="right">
                    <Outlet />
                </div>

                <div className="right2">
                    <Marcas />
                </div>


            </div>


        </>
    )
}