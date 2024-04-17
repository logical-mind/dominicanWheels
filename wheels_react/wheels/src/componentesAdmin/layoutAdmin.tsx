import { FC, useState, useEffect } from "react"
import Avatar from "react-avatar-edit"
import "./layoutAdmin.css"
import { SidebarAdmin } from "./sidebar/sidebarAdmin"
import { Velocidad } from "./add/velocidad";
import { Outlet } from 'react-router-dom';
import { Menu } from "react-ionicons";
import { handleChange } from "./eli-crud";


export const LayoutAdmin: FC = () => {

   const [src, setSrc] = useState<string | undefined>(undefined)
   const [preview, setPreview] = useState<string | undefined>(undefined)

   window.addEventListener('resize', function () {
      const miElemento2 = document.querySelector('.contenedorAdmin');
      const sidebar = document.querySelector('.leftAdmin');
      if (miElemento2 && sidebar) {
         miElemento2.classList.add('contenedorAdmin3');
         miElemento2.classList.remove('responsive');
         
      }
   });

   const handleResize = () => {
      const miElemento = document.querySelector('.contenedorAdmin');
      const sidebar = document.querySelector('.leftAdmin');

      if (miElemento && sidebar) {
         var anchoVentana = window.innerWidth;
         var umbralAncho = 770;
         if(anchoVentana <= umbralAncho ){
              
         }

         if (miElemento.classList.contains('contenedorAdmin3') && anchoVentana <= umbralAncho) {
            miElemento.classList.add('ocultar');
            miElemento.classList.remove('responsive');
            miElemento.classList.remove('contenedorAdmin3');
           
           
         } else if(miElemento.classList.contains('contenedorAdmin3') && anchoVentana > umbralAncho){
            miElemento.classList.add('responsive');
            miElemento.classList.remove('contenedorAdmin3');
            
            
         }else{
            miElemento.classList.remove('responsive');
            miElemento.classList.add('contenedorAdmin3');
            miElemento.classList.remove('ocultar');

            
         }


      }
   }

   const onClose = () => {
      setPreview(undefined)
   }

   const onCrop = (view: any) => {
      setPreview(view)
   }

   return (

      <div className="contenedorAdmin contenedorAdmin3">
         <div className="navbarAdmin">
            <h1>Dominican Wheel</h1>
            <Menu
               color={'#ffffff'}
               height="30px"
               width="30px"
               cssClasses="miMenu"
               onClick={handleResize}

            />
         </div>
         <div className="leftAdmin">
            <SidebarAdmin />
         </div>

         <div className="rightAdmin">
            <Outlet />
         </div>

      </div>

   )


}