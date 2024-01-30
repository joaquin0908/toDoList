import { useState } from "react";
import { useRef } from "react";

const NoControlado = () => {

  
  const [error, setError] = useState("");
  const form = useRef(null)
  
    const handelSubmit = (evento) =>{
        evento.preventDefault()
        setError("")
        //capturar valores
        const data = new FormData(form.current)
        const {title, description, state} = Object.fromEntries([...data.entries()])
      
     
    
    //validar los datos
    if(!title.trim() || !description.trim() || !state.trim())  return setError( "llena este campo" )
     
    console.log(title, description, state)
      };

  
  
    return (
    <form onSubmit={ handelSubmit} ref={form}>
      <input
        type="text"
        placeholder="Ingrese Todo"
        className="form-control mb-2"
        name="title"
        defaultValue="todo #01"
      />
      <textarea
        className="form-control mb-2"
        placeholder="Ingrese descripcion"
        name="description"
        defaultValue="todo #02"
      />
      <select className="from-control mb-2" name="state" defaultValue="completado">
        <option value="pendiente"> Pendiente</option>
        <option value="completado"> Completado</option>
      </select>
      <button type="submit" className="btn btn-primary">Procesar</button>
    {
      error !== "" && error 
    }

    </form>
  );
};
export default NoControlado;
