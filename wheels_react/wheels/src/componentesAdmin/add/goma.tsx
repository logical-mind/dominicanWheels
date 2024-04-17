import React, { FC, useState, useEffect, useRef } from "react";
import Avatar from "react-avatar-edit";
import Select from 'react-select';
import { Card2 } from "../../componentes/card/card2";
import { Add, Update, Get } from '../eli-crud';
import DataTable from "react-data-table-component";
import "./goma.css";
import { Menu } from "react-ionicons";
import foto from "../../componentes/img/4wd/dyntrac.jpg"


interface Diccionario {
    [clave: string]: any;
}

type DataSet = {
    [key: string]: any;
};


type Col = {
    id: number 
    imagenURL: string,
    diametro: number,
    tamano: string,
    size: string,
    peso: string,
    diseno: string,
    marca: string,
    categoria: string
    precio: number
}


export const Goma: FC = () => {

    //const [src, setSrc] = useState<string | undefined>(undefined);
    //const [preview, setPreview] = useState<string | undefined>(undefined);

    const [formData, setFormData] = useState<Col>();
    const [labelData, setLabelData] = useState<Col>();


    const [imagen, setFoto] = useState<DataSet[]>([]);
    const [fotoOpcion, setFotoOpcion] = useState<DataSet[]>([{ value: null }]);

    const [marca, setMarca] = useState<DataSet[]>([]);
    const [marcaOpcion, setMarcaOpcion] = useState<DataSet[]>([{ value: null }]);

    const [size, setSize] = useState<DataSet[]>([]);
    const [sizeOpcion, setSizeOpcion] = useState<DataSet[]>([{ value: null }]);

    const [diametro, setDiametro] = useState<DataSet[]>([]);
    const [diametroOpcion, setDiametroOpcion] = useState<DataSet[]>([{ value: null }]);

    const [tamano, setTamano] = useState<DataSet[]>([]);
    const [tamanoOpcion, setTamanoOpcion] = useState<DataSet[]>([{ value: null }]);

    const [peso, setPeso] = useState<DataSet[]>([]);
    const [pesoOpcion, setPesoOpcion] = useState<DataSet[]>([{ value: null }]);

    const [precio, setPrecio] = useState<DataSet[]>([]);
    const [precioOpcion, setPrecioOpcion] = useState<DataSet[]>([{ value: null }]);

    const [diseno, setDiseno] = useState<DataSet[]>([]);
    const [disenoOpcion, setDisenoOpcion] = useState<DataSet[]>([{ value: null, label: "" }]);

    const [categoria, setCategoria] = useState<DataSet[]>([]);
    const [categoriaOpcion, setCategoriaOpcion] = useState<DataSet[]>([{ value: null, label: "" }]);

    const [velocidad, setVelocidad] = useState<DataSet[]>([]);
    const [velocidadOpcion, setVelocidadOpcion] = useState<DataSet[]>([{ value: null, label: "" }]);


    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isRtl, setIsRtl] = useState(false);

    const [swalProps, setSwalProps] = useState({});

    useEffect(() => {
        const fetchData = async () => {


            const urls = [
                { url: 'marcaOpciones', func: setMarca },
                { url: 'sizeOpciones', func: setSize },
                { url: 'diametroOpciones', func: setDiametro },
                { url: 'disenoOpciones', func: setDiseno },
                { url: 'categoriaOpciones', func: setCategoria },
                { url: 'velocidadOpciones', func: setVelocidad }
            ];

            urls.forEach(({ url, func }: { url: string; func: Function }) => {
                Get({ url, func })
            });

        };
        fetchData()
    }, []);

    useEffect(() => {
        const updatedMarcaOpcion = marca.map(item => ({ value: item.id, label: item.nombre }));
        const updatedSizeOpcion = size.map(item => ({ value: item.id, label: item.nombre }));
        const updatedDiametroOpcion = diametro.map(item => ({ value: item.id, label: item.diametro }));
        const updatedCategoriaOpcion = categoria.map(item => ({ value: item.id, label: item.nombre }));
        const updatedDisenoOpcion = diseno.map(item => ({ value: item.id, label: item.nombre }));
        const updatedVelocidadOpcion = velocidad.map(item => ({ value: item.id, label: item.nombre }));

        setMarcaOpcion(updatedMarcaOpcion)
        setSizeOpcion(updatedSizeOpcion)
        setDiametroOpcion(updatedDiametroOpcion)
        setCategoriaOpcion(updatedCategoriaOpcion)
        setDisenoOpcion(updatedDisenoOpcion)
        setVelocidadOpcion(updatedVelocidadOpcion)

    }, [marca, size, diametro, categoria, diseno]);




    const materiaSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
      if(formData){
            if (formData.id) {
                Update(event, 'goma', formData, setDiametro, setFormData);
            } else {
                console.log(formData)
                Add(event, 'goma', formData, setDiametro, setFormData);
               
            }
        }
    };


    const handleChange = (opcion: any, name: string, setFormData: any) => {
        let valor = opcion
        if (name === "tamano" || name === "precio" || name === "imageUrl" || name === "peso") {
            valor = opcion.target;
        }

        setFormData((FormData: any) => ({
            ...FormData,
            [name]: valor.value
        }));
        
        if (name === "tamano" || name === "precio" || name === "imageUrl" || name === "peso") {
        setLabelData((LabelData: any) => ({
            ...LabelData,
            [name]: valor.value
        }));
    }else{
        setLabelData((LabelData: any) => ({
            ...LabelData,
            [name]: valor.label
        }));
    }
    };



    return (
        <>
            <div className="gomaContenedor">

                <div className="encabezado">
                    <h2 style={{ marginBottom: "30px" }}>Agrega una nueva goma </h2>

                </div>

                <div className="marcoFoto">

                    <form className="formulario" id="goma" onSubmit={materiaSubmit}>
                        <div className="form-group">
                            <label htmlFor="nombre" className="label">Diametro:</label>
                            <Select
                                placeholder="Diametro"
                                isDisabled={isDisabled}
                                isLoading={isLoading}
                                isClearable={isClearable}
                                isRtl={isRtl}
                                isSearchable={isSearchable}
                                options={diametroOpcion}
                                className="select-marca"
                                onChange={(diametroOpcion) => handleChange(diametroOpcion, 'diametro', setFormData,)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="tamano" className="label label2">Tamaño:</label>
                            <div>
                                <input id="tamano"
                                className="input2"
                                    onChange={(event) => handleChange(event, 'tamano', setFormData,)}
                                    type="text" /></div>
                                    
                        </div>



                        <div className="form-group">
                            <label htmlFor="size" className="label">Size:</label>
                            <Select
                                placeholder="Size"
                                isDisabled={isDisabled}
                                isLoading={isLoading}
                                isClearable={isClearable}
                                isRtl={isRtl}
                                isSearchable={isSearchable}
                                options={sizeOpcion}
                                className="select-marca"
                                onChange={(sizeOpcion) => handleChange(sizeOpcion, "size", setFormData)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="marca" className="label">Marca:</label>
                            <Select
                                placeholder="Marca"
                                isDisabled={isDisabled}
                                isLoading={isLoading}
                                isClearable={isClearable}
                                isRtl={isRtl}
                                isSearchable={isSearchable}
                                options={marcaOpcion}
                                className="select-marca"
                                onChange={(marcaOpcion) => handleChange(marcaOpcion, "marca", setFormData)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="categoria" className="label">Categoria:</label>
                            <Select
                                placeholder="Categoria"
                                isDisabled={isDisabled}
                                isLoading={isLoading}
                                isClearable={isClearable}
                                isRtl={isRtl}
                                isSearchable={isSearchable}
                                options={categoriaOpcion}
                                className="select-marca"
                                onChange={(categoriaOpcion) => handleChange(categoriaOpcion, "categoria", setFormData)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="velocidad" className="label">Velocidad (SS):</label>
                            <Select
                                placeholder="Velocidad (SS)"
                                isDisabled={isDisabled}
                                isLoading={isLoading}
                                isClearable={isClearable}
                                isRtl={isRtl}
                                isSearchable={isSearchable}
                                options={velocidadOpcion}
                                className="select-marca"
                                onChange={(velocidadOpcion) => handleChange(velocidadOpcion, "velocidad", setFormData)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="peso" className="label label2">Peso:</label>
                            <div>
                                <input id="peso" name="peso"
                                    className="input2"
                                    onChange={(event) => handleChange(event, 'peso', setFormData,)}
                                    type="text" /></div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="diseno" className="label">Diseño:</label>
                            <Select
                                placeholder="Diseño"
                                isDisabled={isDisabled}
                                isLoading={isLoading}
                                isClearable={isClearable}
                                isRtl={isRtl}
                                isSearchable={isSearchable}
                                options={disenoOpcion}
                                className="select-marca"
                                onChange={(disenoOpcion) => handleChange(disenoOpcion, "diseno", setFormData)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="precio" className="label label2">Precio RD$:</label>
                            <div>
                                <input id="precio"
                                    className="input2"
                                    onChange={(event) => handleChange(event, 'precio', setFormData,)}
                                    type="number" /></div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="precio" className="label label2">Imagen URL:</label>
                            <div>
                                <input id="foto" 
                                    className="input2"
                                    onChange={(event) => handleChange(event, 'imageUrl', setFormData,)}
                                    type="text" />
                            </div>
                        </div>

                        <div className="buttonContainer">
                            <input
                             className="button" type="submit" value="Guardar" />
                        </div>

                    </form>
                </div>


                <div className="carta">
                    <Card2 
                    datos = {labelData || []} 
                    />
                </div>


            </div>



        </>

    );
};
