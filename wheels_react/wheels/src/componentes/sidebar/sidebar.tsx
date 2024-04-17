import { FC, useState, useEffect } from "react";
import "./sidebar.css";
import Select from 'react-select';
import { Search } from 'react-ionicons';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';

import logo1 from "../img/sidebar/pasanger.png"
import logo2 from "../img/sidebar/suv.png"
import logo3 from "../img/sidebar/van.png"

import logo4 from "../img/sidebar/habilead.png"
import logo5 from "../img/sidebar/mileking.png"



interface Manufacturer {
    [key: string]: any;

}

export const Sidebar: FC = () => {
    const navigate = useNavigate();

    const [manufacturers, setManufacturers] = useState<Manufacturer[]>([]);
    const [selectedOption, setSelectedOption] = useState<Manufacturer | null>(null);

    const [models, setModels] = useState<Manufacturer[]>([]);
    const [selectedModel, setSelectedModel] = useState<Manufacturer | null>(null);

    const [years, setYears] = useState<Manufacturer[]>([]);
    const [selectedYear, setSelectedYear] = useState<Manufacturer | null>(null);

    const [modifications, setModifications] = useState<Manufacturer[]>([]);
    const [selectedModifications, setSelectedModifications] = useState<Manufacturer | null>(null);

    const [wheels, setWheels] = useState<Manufacturer[]>([]);


    useEffect(() => {
        const fetchManufacturers = async () => {
            try {
                const response = await import('./marcas.json');
                setManufacturers(response.data);
            } catch (error) {
                console.error('Error al cargar los datos:', error);
            }
        };

        fetchManufacturers();
    }, []);




    useEffect(() => {
        const fetchModels = async () => {
            try {
                const response = await fetch(`https://api.wheel-size.com/v2/models/?make=${selectedOption?.slug}&year=${selectedYear?.slug}&user_key=6ad714f7f78de3d44cc99f3f852c613d`);
                if (!response.ok) {
                    throw new Error('Error al obtener los datos');
                }
                const data = await response.json();
                if (selectedYear !== null) {
                    const anio = parseInt(selectedYear.slug);
                    const newModificacion: any = []

                    data.data.forEach((element: any) => {


                        const fechasJuntas: any = element.year_ranges
                        const fechas: string[] = fechasJuntas[0].split("-");

                        if (fechas.length === 2) {
                            const fecha1: number = parseInt(fechas[0]);
                            const fecha2: number = parseInt(fechas[1]);

                            if (anio >= fecha1 && anio <= fecha2) {
                                newModificacion.push(element)
                            }
                        }
                    });
                    setSelectedModel(null)
                    setSelectedModifications(null)
                    setModels(newModificacion);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        if (selectedYear) {
            fetchModels();
        }
    }, [selectedYear]);





    useEffect(() => {
        const fetchYears = async () => {
            try {

               

                const response = await fetch(`https://api.wheel-size.com/v2/years/?make=${selectedOption?.slug}&user_key=6ad714f7f78de3d44cc99f3f852c613d`);
                if (!response.ok) {
                    throw new Error('Error al obtener los datos');
                }
                const data = await response.json();
                setSelectedYear(null)
                setSelectedModel(null)
                setSelectedModifications(null)
                setYears(data.data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        if (selectedOption) {
            fetchYears();
        }
    }, [selectedOption]);




    useEffect(() => {
        const fetchModifications = async () => {
            try {
                const response = await fetch(`https://api.wheel-size.com/v2/modifications/?make=${selectedOption?.slug}&model=${selectedModel?.slug}&year=${selectedYear?.slug}&user_key=6ad714f7f78de3d44cc99f3f852c613d`);
                if (!response.ok) {
                    throw new Error('Error al obtener los datos');
                }
                const data = await response.json();
                setSelectedModifications(null)
                setModifications(data.data);

            } catch (error) {
                console.error('Error:', error);
            }
        };

        if (selectedModel && selectedYear) {
            fetchModifications();
        }

    }, [selectedModel]);





    const findWheels = async () => {
        const elemento2 = document.getElementById('contenedor');
        const elemento = document.getElementById('left');
        const elemento1 = document.getElementById('right');

        if (elemento && elemento1 && elemento2) {
           
            elemento2.classList.add('contenedor-2');
            elemento.classList.add('left-2');
            elemento.classList.remove('left-3')
            elemento2.classList.remove('contenedor-3');
            elemento1.style.display = 'block';
            }


        try {
            const response = await fetch(`https://api.wheel-size.com/v2/search/by_model/?make=${selectedOption?.slug}&model=${selectedModel?.slug}&modification=${selectedModifications?.slug}&year=${selectedYear?.slug}&user_key=6ad714f7f78de3d44cc99f3f852c613d`);
            if (!response.ok) {
                throw new Error('Error al obtener los datos');
            }
            const data = await response.json();
            setWheels(data.data);


        

        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        if (wheels.length > 0) {
            navigate("/vehiculo", { state: { key: wheels } });
        }
    }, [wheels, navigate]);

    return (
        <div className="sidebar-contenedor">
            <h2 className="text-center">Selecciona tu Vehículo</h2>
            <h6 className="text-center2">LAS MEJORES GOMAS PARA TU VEHICULO</h6>

            <Select
                placeholder="Busca tu vehiculo"
                options={manufacturers}
                formatOptionLabel={country => (
                    <div className="country-option">
                        <img src={country.logo ?? ""} alt="country-image" style={{ width: '30px', marginRight: '10px', marginLeft: '10px' }} />
                        <span>{country.name}</span>
                    </div>
                )}
                getOptionValue={option => option.slug}
                className="select-marca"
                value={selectedOption}
                onChange={(selectedOption: Manufacturer | null) => setSelectedOption(selectedOption)}
            />

            <Select
                placeholder="Año"
                options={years}
                formatOptionLabel={country => (
                    <div className="country-option">
                        <span style={{ marginLeft: "15px" }}>{country.name}</span>
                    </div>
                )}
                getOptionValue={option => option.slug}
                className="select-marca"
                value={selectedYear}
                onChange={(selectedYear: Manufacturer | null) => setSelectedYear(selectedYear)}
            />

            <Select
                placeholder="Modelo"
                options={models}
                formatOptionLabel={country => (
                    <div className="country-option">
                        <span style={{ marginLeft: "15px" }}>{country.name}</span>
                    </div>
                )}
                getOptionValue={option => option.slug}
                className="select-marca"
                value={selectedModel}
                onChange={(selectedModel: Manufacturer | null) => setSelectedModel(selectedModel)}
            />

            <Select
                placeholder="Modificación"
                options={modifications}
                formatOptionLabel={country => (
                    <div className="country-option">
                        <span style={{ marginLeft: "15px" } }>{country.name} Engine: {country.engine?.type}, {country.engine?.power.hp}hp</span>
                       
                    </div>
                )}
                getOptionValue={option => option.slug}
                className="select-marca"
                value={selectedModifications}
                onChange={(selectedModifications: Manufacturer | null) => setSelectedModifications(selectedModifications)}
            />


            <div onClick={findWheels} className="boton-find">
                <Search
                    color={"white"}
                    height="20px"
                    width="20px"
                />
                <span className="texto-boton"> Buscar </span>
            </div>

            <h2 className="text-center">Nuestros Productos</h2>
            <ListGroup style={{ marginTop: "30px", fontSize: "18px", cursor: "pointer" }}>
                <ListGroup.Item> <div onClick={() => navigate("/productos", { state: { key: "Pasanger_car" } })}><img width={35} src={logo1} alt="" /> Passanger Cars</div></ListGroup.Item>
                <ListGroup.Item> <div onClick={() => navigate("/productos", { state: { key: "suv_4wd" } })}><img width={35} src={logo2} alt="" /> SUV/4WD</div></ListGroup.Item>
                <ListGroup.Item> <div onClick={() => navigate("/productos", { state: { key: "van_lihgt" } })}><img width={35} src={logo3} alt="" /> VAN/LIHGT</div></ListGroup.Item>
            </ListGroup>

            <h2 className="text-center">Nuestras Marcas</h2>
            <ListGroup.Item key={"habilead"} style={{marginBottom: 10}}>
                <img width={150} src={logo4} alt="" onClick={() => navigate("/filtros", { state: { key: "HABILEAD" } })} />
            </ListGroup.Item>
            <ListGroup.Item key={"mileking"} style={{ marginTop: 5, marginBottom: 20 }}>
                <img width={110} src={logo5} alt="" onClick={() => navigate("/filtros", { state: { key: "MILEKING" } })} />
            </ListGroup.Item>
        </div>
    );
};
