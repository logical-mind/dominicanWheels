import { FC } from "react"
import "./card.css"
import goma from "../img/goma.png"
import SweetAlert2 from 'react-sweetalert2';

type DataSet = {
     [key: string]: any;
};

interface Props {
     datos: DataSet
}

export const Card2: FC<Props> = ({ datos }) => {

     return (
          <>
               
               <div className="padreCard">
                    <div className="cardContenedor">
                         <div className="articulo">
                              <img width={180} src={datos.imageURL ?? ""} alt="" />
                         </div>

                         <div className="contenedorDetalles">
                              <h1 className="textoDetalles">{datos.categoria ?? ""}</h1>
                              <h1 className="textoTitulo"> #{datos.diametro ?? ""} | {datos.tamano ?? ""} | {datos.peso?? ""}{datos.velocidad ?? ""}</h1>
                              <h1 className="textoTitulo">{datos.marca ?? ""} | {datos.diseno?? ""}</h1>
                              <h1 className="textoPrecio"> {datos.precio && (
                                   <span>
                                        RD$: {datos.precio}
                                   </span>
                              )}  </h1>
                         </div>

                    </div>
               </div>
             

          </>
     )
}