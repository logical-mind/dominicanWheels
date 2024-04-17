import { FC, useState, useMemo } from "react"
import { Add, Update, Delete, Get, handleChange } from '../eli-crud';
import "./comun.css"
import { Trash, Create } from "react-ionicons"

type DataSet = {
    [key: string]: any;
};

type DataAgregar = {
    id:number | null,
    diametro:number | undefined
};


export const Diametro: FC = () => {

    const [diametro, setdiametro] = useState<DataSet[]>([]);
    const [formData, setFormDiametro] = useState<DataAgregar>({diametro: undefined, id: null});


    useMemo(() => {
        const fetchData = () => {
            const urls = [{ url: 'diametroOpciones', func: setdiametro }]
            
            urls.forEach(({ url, func }: { url: string; func: Function }) => {
                Get({ url, func })
            });
        };
        fetchData()
    }, []);


    const materiaSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        if ('id' in formData && formData.id != null) {
            Update(event, 'diametro', formData, setdiametro, setFormDiametro);
        } else {
            Add(event, 'diametro', formData, setdiametro, setFormDiametro);
        }
    };


    return (
        <div className="velocidadContenedor">
            <div className="card-body">
                <form id="diametro" onSubmit={materiaSubmit}>
                    <label htmlFor="name">Diametro:</label>
                    <input className="myInput" type="number" name="diametro" required 
                    value={formData.diametro !== undefined ? formData.diametro : ''} 
                    onChange={(event) => handleChange(event, formData, setFormDiametro)} />


                    <div className="card-footer">
                        <input className="button" type="submit" value="Guardar" />
                    </div>
                </form>
            </div>


            <table>
                <caption>Diametro {"(SS)"} count: {diametro.length} </caption>
                <thead>
                    <tr>
                        <th scope="col">Diametro</th>
                        <th scope="col">Tools</th>
                    </tr>
                </thead>

                <tbody>
                    {diametro.map((item, index) => (
                        <tr key={item.id || index}>
                            <td data-label="SS">{item.diametro}</td>
                            <td data-label="Eliminar">
                                <Create
                                    color={"blue"}
                                    width={'30px'}
                                    height={'30px'}
                                    style={{ cursor: "Pointer" }}
                                    onClick={(event:any) => handleChange(event, item, setFormDiametro)}
                                />

                                <Trash
                                    color={"red"}
                                    width={'30px'}
                                    height={'30px'}
                                    style={{ cursor: "Pointer", marginLeft: "20px", fontSize: "50px" }}
                                    onClick={() => Delete("diametro", item, setdiametro, formData,setFormDiametro)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>

        </div>
    )
}