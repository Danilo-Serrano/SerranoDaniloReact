import React, { useState } from 'react';
import "../Formulario/Formulario.css";
import { db } from "../../Components/services/config.js";
import { collection, addDoc } from "firebase/firestore";

const Formulario = ({ onSubmit }) => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");

    const manejadorFormulario = (e) => {
    e.preventDefault();

    addDoc(collection(db, "usuarios"), {
        nombre: nombre,
        apellido: apellido,
        telefono: telefono
    })
    .then(() => {
    
        setNombre("");
        setApellido("");
        setTelefono("");

        onSubmit();
    })
    .catch((error) => {
        console.error("Error al agregar el documento: ", error);
    });
    }

return (
    <div className='form--container'>
    <form className="formulario" onSubmit={manejadorFormulario}>
        <h2 className='form--h2'>Formulario de clientes</h2>

        <label className='form--label' htmlFor=''> Nombre: </label>
        <input required className='form--input' type='text' onChange={(e) => setNombre(e.target.value)} value={nombre} />

        <label className='form--label' htmlFor=''> Apellido: </label>
        <input required className='form--input' type='text' onChange={(e) => setApellido(e.target.value)} value={apellido} />

        <label className='form--label' htmlFor=''> Teléfono: </label>
        <input required className='form--input' type='text' onChange={(e) => setTelefono(e.target.value)} value={telefono} />

        <button className='form--button'>Enviar</button>
    </form>
    </div>
);
}

export default Formulario;
