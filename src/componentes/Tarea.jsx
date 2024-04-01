import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { TiEdit } from "react-icons/ti";
import '../styles/Tarea.css';

function Tarea({ texto, id, completo, deletear, completed, taskEdit, setTaskEdit }) {
    return (
        <div
        className = { completo ? 'tarea-contenedor completada' : taskEdit === id ? 'tarea-contenedor editando' : 'tarea-contenedor' }
        key={id}
        >
            <div 
            className='tarea-texto'
            onClick={ () => completed( id ) }>
                {texto}
            </div>

            <div className='tarea-contenedor-iconos' onClick={ () => setTaskEdit( id ) }>
                <TiEdit 
                className='tarea-icono' />
            </div>

            <div className='tarea-contenedor-iconos' onClick = { () => deletear( id ) }>
                <AiOutlineCloseCircle 
                className='tarea-icono' />
            </div>
            
        </div>
    )
}

export default Tarea;