import "./todas.css"
import "./ns601.css"
import { FC, useEffect } from "react"
import { Row, Col } from "react-bootstrap"
import Table from 'react-bootstrap/Table';

import etiqueta from "../img/van/etiqueta.jpg"
import goma from "../img/van/ns913.jpg"
import logo1 from "../img/van/logo1.png"
import logo2 from "../img/van/logo2.png"
import logo3 from "../img/van/logo3.png"



export const Ns913: FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);
      
    const neumaticos = [
    {"tamaño": "155R13C", "índice_carga": "85/83", "índice_velocidad": "R", "clase_carga": "C"},
    {"tamaño": "165/70R13C", "índice_carga": "88/86", "índice_velocidad": "S", "clase_carga": "C"},
    {"tamaño": "165R13C", "índice_carga": "91/89", "índice_velocidad": "R", "clase_carga": "C"},
    {"tamaño": "165R13C", "índice_carga": "94/93", "índice_velocidad": "R", "clase_carga": "D"},
    {"tamaño": "175/65R14C", "índice_carga": "90/88", "índice_velocidad": "T", "clase_carga": "C"},
    {"tamaño": "175/70R14C", "índice_carga": "95/93", "índice_velocidad": "S", "clase_carga": "C"},
    {"tamaño": "175/70R14LT", "índice_carga": "95/93", "índice_velocidad": "S", "clase_carga": "D"},
    {"tamaño": "175R14C", "índice_carga": "99/97", "índice_velocidad": "Q", "clase_carga": "D"},
    {"tamaño": "175R14C", "índice_carga": "99/98", "índice_velocidad": "Q", "clase_carga": "D"},
    {"tamaño": "185R14C", "índice_carga": "102/100", "índice_velocidad": "R", "clase_carga": "D"},
    {"tamaño": "195R14C", "índice_carga": "105/103", "índice_velocidad": "Q", "clase_carga": "D"},
    {"tamaño": "195R14C", "índice_carga": "106/104", "índice_velocidad": "Q", "clase_carga": "D"},
    {"tamaño": "205/75R14C", "índice_carga": "109/107", "índice_velocidad": "R", "clase_carga": "D"},
    {"tamaño": "205/75R14C", "índice_carga": "102/99", "índice_velocidad": "R", "clase_carga": "D"},
    {"tamaño": "195/70R15C", "índice_carga": "104/102", "índice_velocidad": "S", "clase_carga": "D"},
    {"tamaño": "195/70R15C", "índice_carga": "104/101", "índice_velocidad": "S", "clase_carga": "E"},
    {"tamaño": "195R15C", "índice_carga": "106/104", "índice_velocidad": "R", "clase_carga": "D"},
    {"tamaño": "205/70R15C", "índice_carga": "106/104", "índice_velocidad": "R", "clase_carga": "D"},
    {"tamaño": "205/75R15C", "índice_carga": "103/100", "índice_velocidad": "R", "clase_carga": "D"},
    {"tamaño": "215/70R15C", "índice_carga": "104/101", "índice_velocidad": "R", "clase_carga": "D"},
    {"tamaño": "215/70R15C", "índice_carga": "109/107", "índice_velocidad": "R", "clase_carga": "D"},
    {"tamaño": "225/70R15C", "índice_carga": "112/110", "índice_velocidad": "R", "clase_carga": "D"},
    {"tamaño": "225/70R15C", "índice_carga": "106/103", "índice_velocidad": "R", "clase_carga": "D"},
    {"tamaño": "195/70R15LT", "índice_carga": "104/101", "índice_velocidad": "S", "clase_carga": "E"},
    {"tamaño": "175/75R16C", "índice_carga": "101/99", "índice_velocidad": "R", "clase_carga": "D"},
    {"tamaño": "175/75R16C", "índice_carga": "100/97", "índice_velocidad": "R", "clase_carga": "D"},
    {"tamaño": "185/75R16C", "índice_carga": "104/102", "índice_velocidad": "R", "clase_carga": "D"},
    {"tamaño": "185/75R16C", "índice_carga": "100/97", "índice_velocidad": "R", "clase_carga": "D"},
    {"tamaño": "195/75R16C", "índice_carga": "107/105", "índice_velocidad": "R", "clase_carga": "D"},
    {"tamaño": "195/75R16C", "índice_carga": "102/99", "índice_velocidad": "R", "clase_carga": "D"},
    {"tamaño": "215/70R16C", "índice_carga": "106/102", "índice_velocidad": "R", "clase_carga": "D"},
    {"tamaño": "215/70R16C", "índice_carga": "108/106", "índice_velocidad": "R", "clase_carga": "D"},
    {"tamaño": "215/75R16C", "índice_carga": "107/104", "índice_velocidad": "R", "clase_carga": "D"},
    {"tamaño": "215/75R16C", "índice_carga": "112/109", "índice_velocidad": "R", "clase_carga": "E"},
    {"tamaño": "215/75R16C", "índice_carga": "113/111", "índice_velocidad": "R", "clase_carga": "D"},
    {"tamaño": "185R14C", "índice_carga": "102/100", "índice_velocidad": "R", "clase_carga": "D RWW"},
    {"tamaño": "195R14C", "índice_carga": "105/103", "índice_velocidad": "Q", "clase_carga": "D RWW"},
    {"tamaño": "195R14C", "índice_carga": "106/104", "índice_velocidad": "Q", "clase_carga": "D RWW"},
    {"tamaño": "205/75R14C", "índice_carga": "102/99", "índice_velocidad": "R", "clase_carga": "D RWW"},
    {"tamaño": "205/75R14C", "índice_carga": "109/107", "índice_velocidad": "R", "clase_carga": "D RWW"},
    {"tamaño": "195R15C", "índice_carga": "106/104", "índice_velocidad": "R", "clase_carga": "D RWW"},
    {"tamaño": "205/75R15C", "índice_carga": "103/100", "índice_velocidad": "R", "clase_carga": "D RWW"}

    ]




    return (
        <>
            <Row>
                <Col className="columna-1" sm={5}>
                    <div>
                        <img width={300} src={goma} alt="" />
                        <Row style={{ marginLeft: "20px", marginTop: "10px" }}>
                            <Col>
                                <img className="logo1-p" width={100} src={logo1} alt="" />
                            </Col>
                            <Col>
                                <img className="logo2-p" width={100} src={logo2} alt="" />
                            </Col>
                            <Col>
                                <img className="logo2-p" width={100} src={logo3} alt="" /></Col>
                         
                                
                        </Row>
                        <img width={300} src={etiqueta} alt="" />
                        
                    </div>
                </Col>

                <Col style={{ marginLeft: "25px", marginTop: "25px" }}>
                    <h1 className="titulo_d">NS913</h1>
                    <p style={{ marginTop: "10px" }}>

                    El NS913 es un neumático premium para uso comercial ligero, diseñado para furgonetas medianas a grandes. Es la elección ideal                  
                     para vehículos comerciales ligeros y furgonetas, 
                    ya que ofrece un buen rendimiento en condiciones de mojado y seco, kilometraje y seguridad con una alta capacidad de carga.</p>

                    <Row>
                        <Col>

                            <Table>
                                <thead>
                                    <tr>

                                        <th>SIZE VAN</th>
                                        <th></th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {neumaticos.map((fila, indice) => (
                                        <tr key={indice}>
                                            <td>{fila.tamaño}</td>
                                            <td>{fila.índice_carga}{fila.índice_velocidad}{fila.clase_carga}</td>
                                        </tr>
                                    ))}

                                </tbody>
                            </Table>

                        </Col>



                    </Row>
                </Col>
            </Row>

        </>
    )
}