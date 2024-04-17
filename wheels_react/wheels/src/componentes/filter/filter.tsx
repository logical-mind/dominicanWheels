import  { FC, useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Get } from '../../componentesAdmin/eli-crud';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./filter.css"
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Card } from "../card/card";



type DataSet = {
    [key: string]: any;
};

export const Filter: FC = () => {
    const location = useLocation();
    const jsonData = location.state?.key || [];

    const vehicle: any = jsonData[0];
    const marca = vehicle.make.name;
    const modelo = vehicle.model.name;
    const añoFin = vehicle.end_year;
    const modificacion = vehicle.name;
    const imagen = vehicle.generation?.bodies[0]?.image;
    const wheels2 = vehicle.wheels;

    const uniqueWheels = wheels2.filter((current: DataSet, index: number, self: DataSet[]) => {
        return index === self.findIndex((t: DataSet) => (
            t.front.tire === current.front.tire
        ));
    });

    const [goma, setGoma] = useState<DataSet[]>([]);
    const [gomaFiltros, setGomaFiltros] = useState<DataSet[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const urls = [
                { url: 'gomaOpciones', func: setGoma },
            ];
            urls.forEach(({ url, func }: { url: string; func: Function }) => {
                Get({ url, func });
            });
        };
        fetchData();
    }, []);

    useEffect(() => {
        const gomasFiltradas: DataSet[] = goma.filter((goma_: DataSet) => {
            return uniqueWheels.some((wheel: DataSet) => (
                wheel.front && wheel.front.tire && wheel.front.tire === goma_.tamano
            ));
        });
        setGomaFiltros(gomasFiltradas);
    }, [goma]);





    const navigate = useNavigate();

    

    return (
        <>
            <Row className='menu-filtros no-gutters'>
                <Col className='px-0'>
                    <div className='vehiculo'>Vehículo</div>
                </Col>
                <Col className='px-0'>
                    <div onClick={() => navigate("/filtros")}  className='otros'>Filtros</div>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={4}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                        <div style={{ marginBottom: '10px' }}>
                            <h3 style={{ fontSize: '30px', color: '#333', fontWeight: 'bold' }}>{marca}</h3>
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            <h3 style={{ fontSize: '20px', color: '#666' }}>{modelo}</h3>
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            <h3 style={{ fontSize: '18px', color: '#999' }}>{añoFin}</h3>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '16px', color: '#aaa' }}>{modificacion}</h3>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={8}>
                    <img width="80%" style={{ minWidth: "250px" }} src={imagen} alt={marca} />
                </Col>
            </Row>
            <Row>
                {uniqueWheels.map((item: any, index: any) => (
                    item.rear.tire && item.front.tire ? (
                        <Col className='card-tyres' key={index}>
                            <h3><span className='factory'>FACTORY SIZE FRONT</span></h3>
                            <div>
                                <h3><span className='pulgada'>{item.front.rim_diameter}"  </span>  <span className='tyre-name'>{item.front.tire}</span></h3>
                            </div>
                        </Col>
                    ) :
                        <Col className='card-tyres'>
                            <h3><span className='factory'>FACTORY SIZE</span></h3>
                            <div>
                                <h3><span className='pulgada'>{item.front.rim_diameter}"  </span>  <span className='tyre-name'>{item.front.tire}</span></h3>
                            </div>
                        </Col>
                ))}
                {uniqueWheels.map((item: any, index: any) => (
                    item.rear.tire && (
                        <Col className='card-tyres'>
                            <h3><span className='factory'>FACTORY SIZE BACK</span></h3>
                            <div>
                                <h3><span className='pulgada'>{item.rear.rim_diameter}"  </span>  <span className='tyre-name'>{item.rear.tire}</span></h3>
                            </div>
                        </Col>
                    )
                ))}
            </Row>
            <Row>
                <Col>
                    <Card datos={gomaFiltros} />
                </Col>
            </Row>
        </>
    );
}
