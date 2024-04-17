import { FC, useState, useMemo, useEffect } from "react"
import { Add, Update, Delete, Get, handleChange } from '../eli-crud';
import "./comun.css"
import { Trash, Create } from "react-ionicons"

type DataSet = {
    [key: string]: any;
};

type DataAgregar = {
    id:number | null,
    nombre:string
};


export const Diseno: FC = () => {

    const [velocidad, setVelocidad] = useState<DataSet[]>([]);
    const [formData, setFormData] = useState<DataAgregar>({nombre: '', id: null});


    useEffect(() => {
        const fetchData = () => {
            const urls = [{ url: 'disenoOpciones', func: setVelocidad }]
            urls.forEach(({ url, func }: { url: string; func: Function }) => {
                Get({ url, func })
            });
        };
        fetchData()
    }, []);


    const materiaSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        if ('id' in formData && formData.id != null) {
            Update(event, 'diseno', formData, setVelocidad, setFormData);
        } else {
            Add(event, 'diseno', formData, setVelocidad, setFormData);
        }
    };


    return (
        <div className="velocidadContenedor">
            <div className="card-body">
                <form id="diseno" onSubmit={materiaSubmit}>
                    <label htmlFor="name">Diseño:</label>
                    <input className="myInput" type="text" name="nombre" required value={formData.nombre} onChange={(event) => handleChange(event, formData, setFormData)} />
                    <div className="card-footer">
                        <input className="button" type="submit" value="Guardar" />
                    </div>
                </form>
            </div>


            <table>
                <caption>Diseños count: {velocidad.length} </caption>
                <thead>
                    <tr>
                        <th scope="col">Diseño</th>
                        <th scope="col">Tools</th>
                    </tr>
                </thead>

                <tbody>
                    {velocidad.map((item, index) => (
                        <tr key={item.id || index}>
                            <td data-label="SS">{item.nombre}</td>
                            <td data-label="Eliminar">
                                <Create
                                    color={"blue"}
                                    width={'30px'}
                                    height={'30px'}
                                    style={{ cursor: "Pointer" }}
                                    onClick={(event:any) => handleChange(event, item, setFormData)}
                                />

                                <Trash
                                    color={"red"}
                                    width={'30px'}
                                    height={'30px'}
                                    style={{ cursor: "Pointer", marginLeft: "20px", fontSize: "50px" }}
                                    onClick={() => Delete("diseno", item, setVelocidad, formData,setFormData)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>

        </div>
    )
}