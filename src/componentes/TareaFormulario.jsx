import React from 'react';
import '../styles/TareaFormulario.css';

function TareaFormulario( { onChange, onSubmit, input, taskEdit } ) {

    
    return (
        <form 
        className='tarea-formulario'
        onSubmit = { onSubmit }
        >
            <input
            className='tarea-input'
            type='text'
            placeholder='Ingresa una tarea'
            onChange = { onChange }
            value={input}
            />
            <button
            className='tarea-boton'
            >
                {taskEdit ? 'Editar Tarea' : 'Agregar Tarea'}
            </button>
        </form>
    )
}

export default TareaFormulario;
