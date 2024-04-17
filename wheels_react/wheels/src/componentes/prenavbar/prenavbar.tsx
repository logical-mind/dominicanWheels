
import { FC } from "react"
import Logo from "../img/dominican.png"
import "./prenavbar.css"
import { Row, Col } from "react-bootstrap"
import { LogoWhatsapp } from "react-ionicons"
import {Map} from "react-ionicons"


export const PreNavbar: FC = () => {

    return (
        <>
       
        <Row>
            <Col xs={4} ><img  className="imagen-logo" width={150} src={Logo} alt="" /></Col>
            <Col className="contenedor-contacto">
            <div className="contacto">
                <div className="contacto2"><LogoWhatsapp/> 809-455-2454   <span className="direccion"><Map/> Calle Progreso, Esq. Juan Pablo Duarte</span></div>
            </div>  
            </Col>
        
        </Row>
         
         </>
    )
}