import { useState } from "react";
import Swal from 'sweetalert2'

const Formulario = ({addTodo}) => {
  const [todo, setTodo] = useState({
    title: "todo #o1",
    description: "descripcion #01",
    state: "pendiente",
    priority: true,
  });

  const [error, setError] = useState(false);

  const { title, description, state, priority } = todo;

  const handelSubmit = (evento) => {
    evento.preventDefault();

    if(!title.trim() || !description.trim()){
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Titulo y descripcion obligatorios"
      });
    
     } 
     addTodo({
      id: Date.now(),
      ...todo,
      state: state === "completado" 
     })
     return Swal.fire({
      position: "center",
      icon: "success",
      title: "Todo agregado correctamente",
      showConfirmButton: false,
      timer: 1500
    });
  };

  const handleChange = (evento) => {
    const { name, type, checked, value } = evento.target;

    setTodo({
      ...todo,
      [name]: type === "checkbox" ? checked : value,
    });

    if (!title.trim() || !description.trim()) {
      console.log("campos vacios");
      setError(true);
      return;
    } else {
      setError(false);
    }
  };
  const PintarError = () => (
    <div className="alert alert-danger">
      {" "}
      todos los campos son obligatorios
      {" "}
    </div>
  );

  return (
    <form onSubmit={handelSubmit}>
      <div className="container mt-2">
        <h2>Formulario</h2>
        {error && <PintarError />}
      </div>

      <input
        type="text"
        placeholder="Ingrese Todo"
        className="form-control mb-2"
        name="title"
        value={title}
        onChange={handleChange}
      />
      <textarea
        className="form-control mb-2"
        placeholder="Ingrese descripcion"
        name="description"
        value={description}
        onChange={handleChange}
      />
      <div className="form-check mb-2">
        <input
          type="checkbox"
          name="priority"
          className="form-check-input"
          id="inputChek"
          checked={priority}
          onChange={handleChange}
        />
        <label htmlFor="inputChek">Dar Prioridad</label>
      </div>
      <select
        className="from-control mb-2"
        name="state"
        value={state}
        onChange={handleChange}
      >
        <option value="pendiente"> Pendiente</option>
        <option value="completado"> Completado</option>
      </select>
      <button type="submit" className="btn btn-primary">
        Agregar Todos
      </button>
    </form>
  );
};
export default Formulario;
