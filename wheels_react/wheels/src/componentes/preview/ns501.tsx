import "./todas.css"
import "./ns601.css"
import { FC, useEffect } from "react"
import { Row, Col } from "react-bootstrap"
import Table from 'react-bootstrap/Table';

import goma from "../img/4wd/ns501.jpg"
import logo1 from "../img/4wd/logo1.png"
import logo2 from "../img/4wd/logo2.png"
import logo3 from "../img/4wd/logo3.png"
import logo4 from "../img/4wd/logo4.png"
import logo5 from "../img/4wd/logo5.png"
import logo6 from "../img/4wd/logo6.png"


export const Ns501: FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);


    const neumaticos = [
        {"tamaño": "235/75R15", "índice_carga": 109, "índice_velocidad": "T", "clase_carga": "XL"},
        {"tamaño": "235/70R16", "índice_carga": 106, "índice_velocidad": "T", "clase_carga": ""},
        {"tamaño": "245/70R16", "índice_carga": 107, "índice_velocidad": "T", "clase_carga": ""},
        {"tamaño": "265/70R16", "índice_carga": 112, "índice_velocidad": "T", "clase_carga": ""},
        {"tamaño": "235/65R17", "índice_carga": 108, "índice_velocidad": "T", "clase_carga": "XL"},
        {"tamaño": "245/65R17", "índice_carga": 107, "índice_velocidad": "T", "clase_carga": ""},
        {"tamaño": "265/65R17", "índice_carga": 112, "índice_velocidad": "T", "clase_carga": ""},
        {"tamaño": "265/70R17", "índice_carga": 115, "índice_velocidad": "T", "clase_carga": ""},
        {"tamaño": "265/60R18", "índice_carga": 110, "índice_velocidad": "T", "clase_carga": ""},
        {"tamaño": "275/65R18", "índice_carga": 116, "índice_velocidad": "T", "clase_carga": ""},
        {"tamaño": "265/50R20", "índice_carga": 111, "índice_velocidad": "T", "clase_carga": "XL"},
        {"tamaño": "275/55R20", "índice_carga": 117, "índice_velocidad": "T", "clase_carga": "XL"},
        {"tamaño": "275/60R20", "índice_carga": 115, "índice_velocidad": "T", "clase_carga": ""},
        {"tamaño": "31×10.5R15LT", "índice_carga": 109, "índice_velocidad": "S", "clase_carga": "C"},
        {"tamaño": "LT215/85R16", "índice_carga": "115/112", "índice_velocidad": "S", "clase_carga": "E"},
        {"tamaño": "LT225/75R16", "índice_carga": "115/112", "índice_velocidad": "S", "clase_carga": "E"},
        {"tamaño": "LT235/85R16", "índice_carga": "120/116", "índice_velocidad": "S", "clase_carga": "E"},
        {"tamaño": "LT235/85R16", "índice_carga": "120/116", "índice_velocidad": "S", "clase_carga": "E"},
        {"tamaño": "LT245/75R16", "índice_carga": "120/116", "índice_velocidad": "S", "clase_carga": "E"},
        {"tamaño": "LT265/75R16", "índice_carga": "123/120", "índice_velocidad": "S", "clase_carga": "E"},
        {"tamaño": "LT285/75R16", "índice_carga": "122/119", "índice_velocidad": "S", "clase_carga": "D"},
        {"tamaño": "LT265/70R17", "índice_carga": "121/118", "índice_velocidad": "S", "clase_carga": "E"},
        {"tamaño": "LT285/70R17", "índice_carga": "121/118", "índice_velocidad": "S", "clase_carga": "D"},
        {"tamaño": "LT275/65R20", "índice_carga": "126/123", "índice_velocidad": "S", "clase_carga": "E"},
        {"tamaño": "LT215/75R15", "índice_carga": "106/103", "índice_velocidad": "S", "clase_carga": "D"},
        {"tamaño": "215/70R16", "índice_carga": 100, "índice_velocidad": "T", "clase_carga": ""},
        {"tamaño": "275/70R16", "índice_carga": 114, "índice_velocidad": "T/H", "clase_carga": ""},
        {"tamaño": "225/65R17", "índice_carga": 102, "índice_velocidad": "T/H", "clase_carga": ""},
        {"tamaño": "285/60R18", "índice_carga": 116, "índice_velocidad": "T/H", "clase_carga": ""}

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
                            <Col>
                                <img className="logo2-p" width={100} src={logo4} alt="" /></Col>
                            <Col>
                                <img className="logo2-p" width={100} src={logo5} alt="" /></Col>
                                <Col>
                                <img className="logo2-p" width={100} src={logo6} alt="" />
                                </Col>
                                
                        </Row>
                        
                    </div>
                </Col>

                <Col style={{ marginLeft: "25px", marginTop: "25px" }}>
                    <h1 className="titulo_d">NS501</h1>
                    <p style={{ marginTop: "10px" }}>

                    El NS501 es un neumático sofisticado para todas las estaciones y terrenos, diseñado específicamente para SUVs y camionetas ligeras. Esta gama ofrecerá un rendimiento 
                    versátil en todas las condiciones con buen manejo y kilometraje, al tiempo que mejora el aspecto del vehículo. Una mezcla ideal de buen aspecto con alto kilometraje
                    y rendimiento todo terreno.</p>

                    <Row>
                        <Col>

                            <Table>
                                <thead>
                                    <tr>

                                        <th>SIZE AT</th>
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