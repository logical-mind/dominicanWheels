import { FC, useState, useEffect } from "react";
import "../card/card.css";
import { useNavigate } from "react-router-dom";

import  NS601  from "../img/pasanger/ns601.jpg";
import  NS501  from "../img/4wd/ns501.jpg";
import  NS523  from "../img/4wd/ns523.jpg";
import  DYNTRAC  from "../img/4wd/dyntrac.jpg";
import  NS913  from "../img/van/ns913.jpg";

interface Props {
    datos: String;
}

interface Option {
    [key: string]: any;
}

export const Card_productos: FC<Props> = ({ datos }) => {
    const [opciones, setOpciones] = useState<Option[]>([]);
    const navigate = useNavigate()

    useEffect(() => {
        if (datos === "Pasanger_car") {
            setOpciones([
                { name: "NS601", image: {NS601} },
               
            ]);
        } else if (datos === "suv_4wd") {
            setOpciones([
                { name: "NS523", image: {NS523} },
                { name: "NS501", image: {NS501} },
                { name: "DYNTRAC", image: {DYNTRAC} },
             
            ]);
        } else if (datos === "van_lihgt") {
            setOpciones([
                { name: "NS913", image: {NS913} },
                
            ]);
        }else{
            setOpciones([
                { name: "NS601", image: {NS601} },
                { name: "NS523", image: {NS523} },
                { name: "NS501", image: {NS501} },
                { name: "DYNTRAC", image: {DYNTRAC} },
                { name: "NS913", image: {NS913} },
            ]);

        }
    }, [datos]);


    return (
        <>
            <div className="padreCard">
                {opciones.map((opcion, index) => (
                    <div className="cardContenedor" key={index} onClick={() => navigate("/detalles", {state: {dato: opcion.name}}) }>
                        <div className="articulo">
                            <img width={180} src={opcion.image[opcion.name]} alt="" />
                        </div>
                        <div className="contenedorDetalles">
                            <h1 className="textoTitulo">
                                <span style={{ fontSize: "25px", color: "black" }}>
                                    {opcion.name}
                                </span>
                            </h1>
                            <h1 className="textoTitulo"></h1>
                            <h1 className="textoPrecio"></h1>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
