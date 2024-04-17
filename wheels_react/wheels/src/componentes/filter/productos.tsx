import { FC, useEffect, useState } from "react"
import "./productos.css"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useLocation } from 'react-router-dom';
import { Card_productos } from "./card_productos";



export const Productos: FC = () => {

    const location = useLocation();
    const estado = location.state?.key || [];
    const [key, setKey] = useState<string>('Pasanger_car');
   

    useEffect(() => {
         setKey(estado)
         window.scrollTo(0, 0); 
    },[estado])

    return (
        <>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => k && setKey(k)}
                className="mb-3"
            >
                <Tab className="productos2" eventKey="Pasanger_car" title="Passanger Cars">
                    <Card_productos datos={"Pasanger_car"}/>
                </Tab>
                <Tab eventKey="suv_4wd" title="SUV/4WD">
                <Card_productos datos={"suv_4wd"}/>
                </Tab>
                <Tab eventKey="van_lihgt" title="VAN/LIHGT">
                <Card_productos datos={"van_lihgt"}/>
                </Tab>
            </Tabs>

        </>
    )
}