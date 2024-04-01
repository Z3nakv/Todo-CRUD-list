import React from 'react';
import '../styles/Contendor-tareas.css';
import ListaDeTareas from './ListaDeTareas';

function ContenedorTareas() {

    return (
        <div className='tareas-lista-principal'>

            <h1>Lista de Tareas</h1>

            <ListaDeTareas />

        </div>
    )
}

export default ContenedorTareas;