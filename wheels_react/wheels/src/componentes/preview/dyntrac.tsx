import "./todas.css"
import "./ns601.css"
import { FC, useEffect} from "react"
import { Row, Col } from "react-bootstrap"
import etiqueta from "../img/pasanger/etiqueta.jpg"
import Table from 'react-bootstrap/Table';
import goma from "../img/4wd/ns501.jpg"
import logo1 from "../img/4wd/logo1.png"
import logo4 from "../img/4wd/logo4.png"
import logo7 from "../img/4wd/logo7.png"



export const Dyntrac: FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);

      
    const neumaticos = [
        {"tamaño": "215/65R16", "índice_carga": 98, "índice_velocidad": "H"},
        {"tamaño": "215/70R16", "índice_carga": 100, "índice_velocidad": "H"},
        {"tamaño": "225/70R16", "índice_carga": 103, "índice_velocidad": "H"},
        {"tamaño": "235/70R16", "índice_carga": 106, "índice_velocidad": "H"},
        {"tamaño": "245/70R16", "índice_carga": 111, "índice_velocidad": "H", "clase_carga": "XL"},
        {"tamaño": "265/70R16", "índice_carga": 112, "índice_velocidad": "H"},
        {"tamaño": "215/60R17", "índice_carga": 96, "índice_velocidad": "V"},
        {"tamaño": "225/60R17", "índice_carga": 99, "índice_velocidad": "H"},
        {"tamaño": "225/65R17", "índice_carga": 102, "índice_velocidad": "H"},
        {"tamaño": "235/60R17", "índice_carga": 102, "índice_velocidad": "H"},
        {"tamaño": "235/55R17", "índice_carga": 103, "índice_velocidad": "V"},
        {"tamaño": "235/65R17", "índice_carga": "104/108", "índice_velocidad": "H"},
        {"tamaño": "245/65R17", "índice_carga": 111, "índice_velocidad": "H", "clase_carga": "XL"},
        {"tamaño": "265/65R17", "índice_carga": 112, "índice_velocidad": "H"},
        {"tamaño": "215/55R18", "índice_carga": 95, "índice_velocidad": "V"},
        {"tamaño": "235/50R18", "índice_carga": 101, "índice_velocidad": "V"},
        {"tamaño": "235/55R18", "índice_carga": 104, "índice_velocidad": "V", "clase_carga": "XL"},
        {"tamaño": "235/60R18", "índice_carga": 107, "índice_velocidad": "V", "clase_carga": "XL"},
        {"tamaño": "255/55R18", "índice_carga": 109, "índice_velocidad": "V"},
        {"tamaño": "285/60R18", "índice_carga": 116, "índice_velocidad": "V"},
        {"tamaño": "255/55R19", "índice_carga": 111, "índice_velocidad": "V", "clase_carga": "XL"},
        {"tamaño": "215/75R15", "índice_carga": 100, "índice_velocidad": "H", "clase_carga": ""},
        {"tamaño": "225/75R15", "índice_carga": 102, "índice_velocidad": "H", "clase_carga": ""},
        {"tamaño": "235/75R15", "índice_carga": 109, "índice_velocidad": "H", "clase_carga": "XL"},
        {"tamaño": "235/50R17", "índice_carga": 100, "índice_velocidad": "V", "clase_carga": "XL"},
        {"tamaño": "225/60R18", "índice_carga": 104, "índice_velocidad": "V", "clase_carga": "XL"},
        {"tamaño": "225/55R18", "índice_carga": 102, "índice_velocidad": "V", "clase_carga": "XL"},
        {"tamaño": "235/65R18", "índice_carga": 110, "índice_velocidad": "H", "clase_carga": "XL"},
        {"tamaño": "245/60R18", "índice_carga": 105, "índice_velocidad": "H"},
        {"tamaño": "255/60R18", "índice_carga": 112, "índice_velocidad": "H", "clase_carga": "XL"},
        {"tamaño": "225/55R19", "índice_carga": 99, "índice_velocidad": "V"},
        {"tamaño": "235/55R19", "índice_carga": 105, "índice_velocidad": "V", "clase_carga": "XL"},
        {"tamaño": "245/55R19", "índice_carga": 103, "índice_velocidad": "V"},
        {"tamaño": "255/50R19", "índice_carga": 107, "índice_velocidad": "V", "clase_carga": "XL"},
        {"tamaño": "255/40R19", "índice_carga": 100, "índice_velocidad": "V", "clase_carga": "XL"},
        {"tamaño": "235/55R20", "índice_carga": 105, "índice_velocidad": "V", "clase_carga": "XL"},
        {"tamaño": "245/50R20", "índice_carga": 102, "índice_velocidad": "V"},
        {"tamaño": "255/45R20", "índice_carga": 105, "índice_velocidad": "V", "clase_carga": "XL"},
        {"tamaño": "255/50R20", "índice_carga": 109, "índice_velocidad": "V", "clase_carga": "XL"},
        {"tamaño": "275/40R20", "índice_carga": 106, "índice_velocidad": "V", "clase_carga": "XL"},
        {"tamaño": "275/45R20", "índice_carga": 110, "índice_velocidad": "V", "clase_carga": "XL"}

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
                                <img className="logo2-p" width={100} src={logo4} alt="" />
                            </Col>
                            <Col>
                                <img className="logo2-p" width={100} src={logo7} alt="" />
                            </Col>


                        </Row>
                        <img width={300} src={etiqueta} alt="" />

                    </div>
                </Col>

                <Col style={{ marginLeft: "25px", marginTop: "25px" }}>
                    <h1 className="titulo_d">DYNTRAC</h1>
                    <p style={{ marginTop: "10px" }}>


                        El DYNTRAC es un neumático versátil diseñado para ofrecer tranquilidad en condiciones de carretera secas, mojadas o con nieve ligera. El neumático cuenta con
                        laminillas cruzadas en la bandade rodadura para una tracción adicional en superficies resbaladizas, mientras que los cuatro surcos circunferenciales mejoran
                        la resistencia al aquaplaning.</p>

                    <Row>
                        <Col>

                            <Table>
                                <thead>
                                    <tr>

                                        <th>SIZE HT</th>
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