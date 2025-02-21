import React from 'react'
import { useState } from 'react'
import "../Formulario/Formulario.css"
import {db} from "../../Components/services/config.js"
import { collection, addDoc} from "firebase/firestore"

const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")

    const manejadorFormulario = (e) =>{
    e.preventDefault();
        addDoc(collection(db, "usuarios"),{ 
            nombre: nombre,
            apellido: apellido,
            telefono: telefono
        })
        setNombre("")
        setApellido("")
        setTelefono("")

    }

return (
    <div className='form--container'>
    <form className="formulario" onSubmit={ manejadorFormulario}>
        <h2 className='form--h2'>Formulario de clientes</h2>

        <label className='form--label' htmlFor=''> Nombre: </label>
        <input className='form--input' type='text' onChange={(e) => setNombre(e.target.value)} value={nombre}/>
    
        <label className='form--label' htmlFor=''> Apellido: </label>
        <input className='form--input' type='text' onChange={(e) => setApellido(e.target.value)} value={apellido}/>
    
        <label className='form--label' htmlFor=''> Telefono: </label>
        <input className='form--input' type='text' onChange={(e) => setTelefono(e.target.value)} value={telefono}/>

        <button className='form--button'>Enviar</button>

    </form>
    </div>
)
}
export default Formulario