import axios from 'axios';
import React from 'react';


type Data = {
    [key: string]: any;
};


export const handleChange = (
  event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  newData: any,
  func: Function,
  imagenSeleccionada: File | null = null
) => {
  
  let formData: { [key: string]: string | File } = {};


  if (event.currentTarget instanceof HTMLSelectElement || event.currentTarget instanceof HTMLInputElement) {
    const formulario = event.currentTarget.form;

   
    
    if (formulario) {
      const elementos = formulario.elements;
      
      for (let i = 0; i < elementos.length; i++) {
        const campo = elementos[i] as HTMLInputElement | HTMLSelectElement;
        
        if (campo.nodeName === 'INPUT' || campo.nodeName === 'SELECT') {
          const nombreCampo = campo.getAttribute('name');
  
          
          if (nombreCampo !== null) {
            formData[nombreCampo] = campo.value;
          }
        }
      }
    }
  } else {
   
    formData = { ...newData }; 
  }
  if (imagenSeleccionada) {
      formData['imagen'] = imagenSeleccionada;
   }

  func((prevData: any) => ({
    ...prevData,
    ...formData
  }));
};



export const Get = async ({ url, func }: { url: string, func: Function }) => {
    try {
          const response = await axios.get(`http://localhost:8000/${url}`);
          const data: Data[] = response.data;
          func(data);
    } catch (error) {
          console.error('Error al obtener los datos:', error);
    }
  };


export const Add = (event: React.FormEvent<HTMLFormElement>,url:string,newData:{}, functionSet: Function, functionAdd:Function) => {
    event.preventDefault()
    axios.post(`http://localhost:8000/${url}Opciones`, {
      ...newData,
    })
      .then(({ data }) => {
        functionSet((_nivel: any) => {
          return [data, ..._nivel];
        });
        if(url !== "goma"){
            Reset2(newData,functionAdd)
        }else{alert("Goma agregada correctamente!")}
      })
      
  }


export function Update(event: React.FormEvent<HTMLFormElement>,url:string,newData:any, functionSet: Function, functionAdd:Function) {
    event.preventDefault();
    axios.put(`http://localhost:8000/${url}Opciones/${newData.id}`, newData)
        .then(({ data }) => {
            functionSet((_datos: any[]) => {
                const objetoEncontradoIndex = _datos.findIndex((objeto: { id: any; }) => objeto.id === newData.id);
                if (objetoEncontradoIndex !== -1) {
                    _datos[objetoEncontradoIndex] = data;
                }
                return [..._datos];
            });
            Reset2(newData,functionAdd)
        });
}


export const Delete = (url: string, todo: any, functionSet: Function, newData:{[key:string]:any},functionAdd:Function) => {

    axios.delete(`http://localhost:8000/${url}Opciones/${todo.id}`)
      .then(() => {
        functionSet((_todos: any) => {
          return _todos.filter((t: any) => t.id !== todo.id)
        })
        Reset2(newData,functionAdd)
      })
  }



const Reset2 = (newData:{[key:string]:any},functionAdd:Function) => { 

   const updatedData: { [key: string]: any } = {};

   for (const key in newData) {
    if (typeof newData[key] === 'number') {
        updatedData[key] = undefined;
    } else if (typeof newData[key] === 'string') {
        updatedData[key] = '';
    } else {
        updatedData[key] = newData[key];
    }
     }

functionAdd(updatedData);
}





