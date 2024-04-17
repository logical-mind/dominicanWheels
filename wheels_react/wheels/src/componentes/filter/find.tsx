import { FC, useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./find.css"
import { useLocation } from 'react-router-dom';
import Select from 'react-select';
import { Get } from '../../componentesAdmin/eli-crud';
import { Card } from '../card/card';


interface Manufacturer {
    [key: string]: any;
}

type DataSet = {
    [key: string]: any;
};

export const Find: FC = () => {
    const [goma, setGoma] = useState<DataSet[]>([]);
    const [gomaFiltros, setGomaFiltros] = useState<DataSet[]>([]);



    useEffect(() => {
        const fetchData = async () => {
            const urls = [
                { url: 'gomaOpciones', func: setGoma },
            ];

            urls.forEach(({ url, func }: { url: string; func: Function }) => {
                Get({ url, func })
            });
        };
        fetchData()
        window.scrollTo(0, 0);
    }, []);

    const location = useLocation();
    const estado = location.state?.key;


    useEffect(() => {
        setGomaFiltros(goma)

        if (estado) {

            const opciones = goma.find(opcion => opcion.marca === estado);
            if (opciones) {
                setMarcasOption(opciones)
            }
        }
        window.scrollTo(0, 0);

    }, [goma, estado])


    const [diametroOption, setDiametroOption] = useState<Manufacturer | null>(null);

    const [nombreOption, setNombreOption] = useState<Manufacturer | null>(null);

    const [productosOption, setProductosOption] = useState<Manufacturer | null>(null);

    const [marcasOption, setMarcasOption] = useState<Manufacturer | null>(null);

    const [categoriaOption, setCategoriaOption] = useState<Manufacturer | null>(null);








    useEffect(() => {
        const coincidenciasFiltradas = goma.filter((elemento) => {
            return (
                (!diametroOption || elemento.diametro === diametroOption.diametro) &&
                (!nombreOption || elemento.tamano === nombreOption.tamano) &&
                (!productosOption || elemento.tipo === productosOption.tipo) &&
                (!marcasOption || elemento.marca === marcasOption.marca) &&
                (!categoriaOption || elemento.categoria === categoriaOption.categoria)
            );
        });
        setGomaFiltros(coincidenciasFiltradas);
    }, [diametroOption, nombreOption, productosOption, marcasOption, categoriaOption])



    return (
        <>
        <div className='selectores-filtros'>
            <Row className='menu-filtros2 no-gutters2'>
                <Col className='px-0'>
                    <div className='vehiculo2'>
                        Vehículo
                    </div>
                </Col>

                <Col className='px-0'>
                    <div className='otros2'>
                        Filtros
                    </div>
                </Col>

            </Row>

            <Row  style={{ marginTop: "20px" }}>
                <Col>
                    <Select
                        placeholder="Diametro"

                        options={goma.filter((country, index, self) =>
                            index === self.findIndex((c) => (
                                c.diametro === country.diametro
                            ))
                        )}

                        formatOptionLabel={country => (
                            <div className="country-option">
                                <span>{country.diametro}</span>
                            </div>
                        )}
                        getOptionValue={option => option.slug}
                        className="select-marca"
                        defaultValue={diametroOption}
                        isClearable={true}
                        onChange={(diametroOption: Manufacturer | null) => setDiametroOption(diametroOption)}
                    />

                </Col>

                <Col>

                    <Select
                        placeholder="Tamaño"
                        options={goma.filter((country, index, self) =>
                            index === self.findIndex((c) => (
                                c.tamano === country.tamano
                            ))
                        )}
                        formatOptionLabel={country => (
                            <div className="country-option">
                                <span>{country.tamano}</span>
                            </div>
                        )}
                        getOptionValue={option => option.slug}
                        className="select-marca"
                        defaultValue={nombreOption}
                        isClearable={true}
                        onChange={(nombreOption: Manufacturer | null) => setNombreOption(nombreOption)}
                    />
                </Col>

                <Col>

                    <Select
                        placeholder="Productos"
                        options={goma.filter((country, index, self) =>
                            index === self.findIndex((c) => (
                                c.tipo === country.tipo
                            ))
                        )}
                        formatOptionLabel={country => (
                            <div className="country-option">
                                <span>{country.tipo}</span>
                            </div>
                        )}
                        getOptionValue={option => option.slug}
                        className="select-marca"
                        defaultValue={productosOption}
                        isClearable={true}
                        onChange={(productosOption: Manufacturer | null) => setProductosOption(productosOption)}
                    />
                </Col>
            </Row>
            <Row >
                <Col>
                    <Select
                        placeholder="Marca"
                        options={goma.filter((country, index, self) =>
                            index === self.findIndex((c) => (
                                c.marca === country.marca
                            ))
                        )}
                        formatOptionLabel={country => (
                            <div className="country-option">
                                <span>{country.marca}</span>
                            </div>
                        )}
                        getOptionValue={option => option.slug}
                        className="select-marca"
                        defaultValue={marcasOption}
                        isClearable={true}
                        onChange={(marcasOption: Manufacturer | null) => setMarcasOption(marcasOption)}
                    />


                </Col>

                <Col>

                    <Select
                        placeholder="Categoria"
                        options={goma.filter((country, index, self) =>
                            index === self.findIndex((c) => (
                                c.categoria === country.categoria
                            ))
                        )}
                        formatOptionLabel={country => (
                            <div className="country-option">
                                <span>{country.categoria}</span>
                            </div>
                        )}
                        getOptionValue={option => option.slug}
                        className="select-marca"
                        defaultValue={categoriaOption}
                        isClearable={true}
                        onChange={(categoriaOption: Manufacturer | null) => setCategoriaOption(categoriaOption)}
                    />
                </Col>
            </Row>
        </div>

            <Row>
                <Col>
                    <Card datos={gomaFiltros} />
                </Col>
            </Row>

        </>
    )

}