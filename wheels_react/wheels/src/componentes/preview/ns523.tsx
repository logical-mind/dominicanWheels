import "./todas.css"
import "./ns601.css"
import { FC, useEffect } from "react"
import { Row, Col } from "react-bootstrap"

import Table from 'react-bootstrap/Table';

import goma from "../img/4wd/ns523.jpg"
import logo1 from "../img/4wd/logo1.png"
import logo2 from "../img/4wd/logo2.png"
import logo3 from "../img/4wd/logo3.png"
import logo4 from "../img/4wd/logo4.png"
import logo5 from "../img/4wd/logo5.png"




export const Ns523: FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);

    const neumaticos = [
    {"tamaño": "27×8.5R14LT", "índice_carga": 95, "índice_velocidad": "Q", "clase_carga": "C"},
    {"tamaño": "31×10.5R15LT", "índice_carga": 109, "índice_velocidad": "Q", "clase_carga": "C"},
    {"tamaño": "33×12.5R15LT", "índice_carga": 108, "índice_velocidad": "Q", "clase_carga": "C"},
    {"tamaño": "33×12.5R17LT", "índice_carga": 114, "índice_velocidad": "Q", "clase_carga": "D"},
    {"tamaño": "33×12.5R18LT", "índice_carga": 118, "índice_velocidad": "Q", "clase_carga": "E"},
    {"tamaño": "32×11.5R15LT", "índice_carga": 113, "índice_velocidad": "Q", "clase_carga": "C"},
    {"tamaño": "35×12.5R17LT", "índice_carga": 121, "índice_velocidad": "Q", "clase_carga": "E"},
    {"tamaño": "35×12.5R18LT", "índice_carga": 123, "índice_velocidad": "Q", "clase_carga": "E"},
    {"tamaño": "33×12.5R20LT", "índice_carga": 114, "índice_velocidad": "Q", "clase_carga": "E"},
    {"tamaño": "35×12.5R20LT", "índice_carga": 121, "índice_velocidad": "Q", "clase_carga": "E"},
    {"tamaño": "37×13.5R20LT", "índice_carga": 127, "índice_velocidad": "Q", "clase_carga": "E"},
    {"tamaño": "33×12.5R22LT", "índice_carga": 109, "índice_velocidad": "Q", "clase_carga": "E"},
    {"tamaño": "35×12.5R22LT", "índice_carga": 127, "índice_velocidad": "Q", "clase_carga": "E"},
    {"tamaño": "37×13.5R22LT", "índice_carga": 123, "índice_velocidad": "Q", "clase_carga": "E"},
    {"tamaño": "LT215/75R15", "índice_carga": 106, "índice_velocidad": "Q", "clase_carga": "D"},
    {"tamaño": "LT235/75R15", "índice_carga": 104, "índice_velocidad": "Q", "clase_carga": "C"},
    {"tamaño": "LT225/75R16", "índice_carga": 115, "índice_velocidad": "Q", "clase_carga": "E"},
    {"tamaño": "LT235/70R16", "índice_carga": 110, "índice_velocidad": "Q", "clase_carga": "D"},
    {"tamaño": "LT235/85R16", "índice_carga": 120, "índice_velocidad": "Q", "clase_carga": "E"},
    {"tamaño": "LT245/70R16", "índice_carga": 113, "índice_velocidad": "Q", "clase_carga": "D"},
    {"tamaño": "LT245/75R16", "índice_carga": 120, "índice_velocidad": "Q", "clase_carga": "E"},
    {"tamaño": "LT265/75R16", "índice_carga": 123, "índice_velocidad": "Q", "clase_carga": "E"},
    {"tamaño": "LT285/75R16", "índice_carga": 122, "índice_velocidad": "Q", "clase_carga": "D"},
    {"tamaño": "LT265/65R17", "índice_carga": 120, "índice_velocidad": "Q", "clase_carga": "E"},
    {"tamaño": "LT265/70R17", "índice_carga": 118, "índice_velocidad": "Q", "clase_carga": "D"},
    {"tamaño": "LT285/70R17", "índice_carga": 121, "índice_velocidad": "Q", "clase_carga": "E"}

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
                                <Col></Col>
                        </Row>
                        
                    </div>
                </Col>

                <Col style={{ marginLeft: "25px", marginTop: "25px" }}>
                    <h1 className="titulo_d">NS523</h1>
                    <p style={{ marginTop: "10px" }}>

                        El NS523 es un neumático de terreno fangoso diseñado específicamente para aplicaciones extremas fuera de carretera. Esta gama se adapta a SUV y camionetas ligeras, y es adecuada para vehículos con kits de elevación. Presenta un casco reforzado de 3 capas para una alta durabilidad y tecnología avanzada de expulsión de piedras que previene la retención de piedras y el subsiguiente daño a los neumáticos.
                        Una elección ideal para conductores que no quieren comprometerse con la tracción y el manejo fuera de carretera.</p>

                    <Row>
                        <Col>

                            <Table>
                                <thead>
                                    <tr>

                                        <th>SIZE MT</th>
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