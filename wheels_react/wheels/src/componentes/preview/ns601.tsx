import "./todas.css"
import "./ns601.css"
import { FC, useEffect } from "react"
import { Row, Col } from "react-bootstrap"
import logo1 from "../img/pasanger/logo1.png"
import logo2 from "../img/pasanger/logo2.png"
import goma from "../img/pasanger/ns601.jpg"
import etiqueta from "../img/pasanger/etiqueta.jpg"
import Table from 'react-bootstrap/Table';



export const Ns601: FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);

    const neumaticos = [
        { "tamaño": "155/70R13", "índice_carga": 75, "índice_velocidad": "T" },
        { "tamaño": "165/65R13", "índice_carga": 77, "índice_velocidad": "H" },
        { "tamaño": "165/70R13", "índice_carga": 79, "índice_velocidad": "T" },
        { "tamaño": "165/80R13", "índice_carga": 83, "índice_velocidad": "T" },
        { "tamaño": "175/70R13", "índice_carga": 82, "índice_velocidad": "T" },
        { "tamaño": "185/70R13", "índice_carga": 86, "índice_velocidad": "H" },
        { "tamaño": "155/65R14", "índice_carga": 75, "índice_velocidad": "T" },
        { "tamaño": "155/70R14", "índice_carga": 77, "índice_velocidad": "T" },
        { "tamaño": "165/60R14", "índice_carga": 75, "índice_velocidad": "H" },
        { "tamaño": "165/65R14", "índice_carga": 79, "índice_velocidad": "T" },
        { "tamaño": "165/70R14", "índice_carga": 81, "índice_velocidad": "T" },
        { "tamaño": "175/65R14", "índice_carga": 82, "índice_velocidad": "H" },
        { "tamaño": "175/70R14", "índice_carga": 84, "índice_velocidad": "H" },
        { "tamaño": "185/60R14", "índice_carga": 82, "índice_velocidad": "H" },
        { "tamaño": "185/65R14", "índice_carga": 86, "índice_velocidad": "H" },
        { "tamaño": "185/70R14", "índice_carga": 88, "índice_velocidad": "H" },
        { "tamaño": "195/60R14", "índice_carga": 86, "índice_velocidad": "H" },
        { "tamaño": "195/70R14", "índice_carga": 91, "índice_velocidad": "H" },
        { "tamaño": "175/60R15", "índice_carga": 81, "índice_velocidad": "H" },
        { "tamaño": "175/65R15", "índice_carga": 84, "índice_velocidad": "H" },
        { "tamaño": "185/60R15", "índice_carga": 88, "índice_velocidad": "H XL" },
        { "tamaño": "185/65R15", "índice_carga": 88, "índice_velocidad": "H" },
        { "tamaño": "195/60R15", "índice_carga": 88, "índice_velocidad": "V" },
        { "tamaño": "195/65R15", "índice_carga": 91, "índice_velocidad": "H/V" },
        { "tamaño": "205/60R15", "índice_carga": 91, "índice_velocidad": "V" },
        { "tamaño": "205/65R15", "índice_carga": 94, "índice_velocidad": "V" },
        { "tamaño": "205/70R15", "índice_carga": 96, "índice_velocidad": "H" },
        { "tamaño": "205/60R16", "índice_carga": 92, "índice_velocidad": "H" },
        { "tamaño": "205/65R16", "índice_carga": 95, "índice_velocidad": "H" },
        { "tamaño": "215/60R16", "índice_carga": 95, "índice_velocidad": "V" },
        { "tamaño": "215/60R16", "índice_carga": 99, "índice_velocidad": "V XL" },
        { "tamaño": "215/65R16", "índice_carga": 98, "índice_velocidad": "H" },
        { "tamaño": "175/60R13", "índice_carga": 77, "índice_velocidad": "T" },
        { "tamaño": "185/55R14", "índice_carga": 80, "índice_velocidad": "H" },
        { "tamaño": "195/65R14", "índice_carga": 89, "índice_velocidad": "H" },
        { "tamaño": "205/60R14", "índice_carga": 88, "índice_velocidad": "H" },
        { "tamaño": "205/70R14", "índice_carga": 95, "índice_velocidad": "H" },
        { "tamaño": "215/70R14", "índice_carga": 96, "índice_velocidad": "H" },
        { "tamaño": "175/55R15", "índice_carga": 77, "índice_velocidad": "T" },
        { "tamaño": "215/60R15", "índice_carga": 94, "índice_velocidad": "H" },
        { "tamaño": "215/65R15", "índice_carga": 96, "índice_velocidad": "H" },
        { "tamaño": "215/70R15", "índice_carga": 98, "índice_velocidad": "H" },
        { "tamaño": "225/60R15", "índice_carga": 96, "índice_velocidad": "V" },
        { "tamaño": "175/60R16", "índice_carga": 82, "índice_velocidad": "H" },
        { "tamaño": "225/60R16", "índice_carga": 98, "índice_velocidad": "H" },
        { "tamaño": "235/60R16", "índice_carga": 100, "índice_velocidad": "H" }
    ]


    const  neumaticos2 = [
        {"tamaño": "185/55R15", "índice_carga": 82, "índice_velocidad": "V"},
        {"tamaño": "195/50R15", "índice_carga": 82, "índice_velocidad": "V"},
        {"tamaño": "195/55R15", "índice_carga": 85, "índice_velocidad": "V"},
        {"tamaño": "195/45R16", "índice_carga": 84, "índice_velocidad": "V"},
        {"tamaño": "195/50R16", "índice_carga": 84, "índice_velocidad": "V"},
        {"tamaño": "195/55R16", "índice_carga": 91, "índice_velocidad": "W"},
        {"tamaño": "205/50ZR16", "índice_carga": 87, "índice_velocidad": "W"},
        {"tamaño": "205/45ZR16", "índice_carga": 87, "índice_velocidad": "W XL"},
        {"tamaño": "205/55R16", "índice_carga": 91, "índice_velocidad": "V"},
        {"tamaño": "205/55ZR16", "índice_carga": 94, "índice_velocidad": "W XL"},
        {"tamaño": "225/50R16", "índice_carga": 92, "índice_velocidad": "V"},
        {"tamaño": "225/50ZR16", "índice_carga": 96, "índice_velocidad": "W XL"},
        {"tamaño": "225/55ZR16", "índice_carga": 99, "índice_velocidad": "W XL"},
        {"tamaño": "205/40ZR17", "índice_carga": 84, "índice_velocidad": "W XL"},
        {"tamaño": "205/45ZR17", "índice_carga": 88, "índice_velocidad": "W XL"},
        {"tamaño": "205/50ZR17", "índice_carga": 93, "índice_velocidad": "W XL"},
        {"tamaño": "215/40ZR17", "índice_carga": 87, "índice_velocidad": "W XL"},
        {"tamaño": "215/45ZR17", "índice_carga": 91, "índice_velocidad": "W XL"},
        {"tamaño": "215/50ZR17", "índice_carga": 95, "índice_velocidad": "W XL"},
        {"tamaño": "215/55ZR17", "índice_carga": 98, "índice_velocidad": "W XL"},
        {"tamaño": "225/45ZR17", "índice_carga": 94, "índice_velocidad": "W XL"},
        {"tamaño": "225/50R17", "índice_carga": 94, "índice_velocidad": "V"},
        {"tamaño": "225/50ZR17", "índice_carga": 98, "índice_velocidad": "W XL"},
        {"tamaño": "225/55ZR17", "índice_carga": 101, "índice_velocidad": "W XL"},
        {"tamaño": "235/45ZR17", "índice_carga": 97, "índice_velocidad": "W XL"},
        {"tamaño": "235/50R17", "índice_carga": 100, "índice_velocidad": "WXL"},
        {"tamaño": "235/55ZR17", "índice_carga": 103, "índice_velocidad": "V XL"},
        {"tamaño": "245/40R17", "índice_carga": 95, "índice_velocidad": "W XL"},
        {"tamaño": "245/45ZR17", "índice_carga": 99, "índice_velocidad": "W XL"},
        {"tamaño": "215/35R18", "índice_carga": 84, "índice_velocidad": "W XL"},
        {"tamaño": "215/45R18", "índice_carga": 93, "índice_velocidad": "W XL"},
        {"tamaño": "215/40ZR18", "índice_carga": 89, "índice_velocidad": "W XL"},
        {"tamaño": "225/40ZR18", "índice_carga": 92, "índice_velocidad": "W XL"},
        {"tamaño": "225/45ZR18", "índice_carga": 95, "índice_velocidad": "W XL"},
        {"tamaño": "235/40ZR18", "índice_carga": 95, "índice_velocidad": "W XL"},
        {"tamaño": "235/45ZR18", "índice_carga": 100, "índice_velocidad": "W XL"},
        {"tamaño": "245/40ZR18", "índice_carga": 97, "índice_velocidad": "W XL"},
        {"tamaño": "245/45ZR18", "índice_carga": 100, "índice_velocidad": "W XL"},
        {"tamaño": "245/50ZR18", "índice_carga": 104, "índice_velocidad": "W XL"},
        {"tamaño": "255/35ZR18", "índice_carga": 94, "índice_velocidad": "W XL"},
        {"tamaño": "255/45ZR18", "índice_carga": 103, "índice_velocidad": "W XL"},
        {"tamaño": "255/55ZR18", "índice_carga": 109, "índice_velocidad": "W XL"},
        {"tamaño": "225/35ZR19", "índice_carga": 88, "índice_velocidad": "W XL"},
        {"tamaño": "235/35ZR19", "índice_carga": 91, "índice_velocidad": "W XL"},
        {"tamaño": "245/35ZR19", "índice_carga": 93, "índice_velocidad": "W XL"},
        {"tamaño": "245/45ZR19", "índice_carga": 102, "índice_velocidad": "W XL"},
        {"tamaño": "255/30ZR19", "índice_carga": 91, "índice_velocidad": "W XL"},
        {"tamaño": "255/35ZR19", "índice_carga": 96, "índice_velocidad": "W XL"},
        {"tamaño": "255/40ZR19", "índice_carga": 100, "índice_velocidad": "W XL"},
        {"tamaño": "255/30ZR20", "índice_carga": 92, "índice_velocidad": "W XL"},
        {"tamaño": "275/35ZR20", "índice_carga": 102, "índice_velocidad": "W XL"},
        {"tamaño": "295/40ZR22", "índice_carga": 112, "índice_velocidad": "W XL"}
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
                            <Col></Col>
                            <Col></Col>
                        </Row>
                        <img width={300} src={etiqueta} alt="" />
                    </div>
                </Col>

                <Col style={{ marginLeft: "25px", marginTop: "25px" }}>
                    <h1 className="titulo_d">NS601</h1>
                    <p style={{ marginTop: "10px" }}>El NS601 es un nuevo neumático de ultra alto rendimiento. Este diseño ha sido específicamente diseñado para vehículos de alto rendimiento y ofrece la combinación ideal de excelente agarre en mojado y en seco, manejo preciso y comodidad.&nbsp;</p>
                    <p>UTQG:360AA/400AA/320AA</p>
                    <Row>
                        <Col>

                            <Table>
                                <thead>
                                    <tr>

                                        <th>SIZE HP</th>
                                        <th></th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {neumaticos.map((fila, indice) => (
                                        <tr key={indice}>
                                            <td>{fila.tamaño}</td>
                                            <td>{fila.índice_carga}{fila.índice_velocidad}</td>
                                        </tr>
                                    ))}

                                </tbody>
                            </Table>

                        </Col>
                        

                        <Col>
                        <Table>
                                <thead>
                                    <tr>

                                        <th>SIZE UHP</th>
                                        <th></th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {neumaticos2.map((fila, indice) => (
                                        <tr key={indice}>
                                            <td>{fila.tamaño}</td>
                                            <td>{fila.índice_carga}{fila.índice_velocidad}</td>
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