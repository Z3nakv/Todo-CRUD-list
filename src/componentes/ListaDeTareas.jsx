import React from 'react';
import TareaFormulario from './TareaFormulario';
import Tarea from '../componentes/Tarea';
import { useState, useEffect } from 'react';
import '../styles/ListaDeTareas.css';

function ListaDeTareas() {
    const [input, setInput] = useState('');
    const [tareas, setTareas] = useState([]);
    const [taskEdit, setTaskEdit] = useState(null);

    useEffect(() => {
        const task = tareas.find( tarea => tarea.id === taskEdit );

        if( task ) {
            setInput(task.text)
        }else {
            setInput('');
        }
        
    },[taskEdit])

    function inputValue( e ) {
        setInput( e.target.value );
    }

    const agregarTarea = ( e ) => {
        e.preventDefault();

        if(input.trim()){
            setInput(input.trim())
        }else {
            alert('Tienes que ingresar una tarea...!');
            return;
        }

        let nuevaTarea;

        if( taskEdit ) {
            const tareasAct = tareas.map( tarea => {
                if( tarea.id === taskEdit ){
                    tarea.text = input;
                }
                    return tarea;
            });
            setTareas(tareasAct);
        }else {
                nuevaTarea = {
                id: Date.now(),
                text: input,
                completo: false,
            }
            const nuevasTareas = [ nuevaTarea, ...tareas ];
            setTareas( nuevasTareas );
        }

        e.target.reset();
        setInput('');
        setTaskEdit(null);
    }

    const eliminarTarea = ( id ) => {
        const tareasActualizadas = tareas.filter( tarea => tarea.id !== id )
        setTareas(tareasActualizadas);
    }

    const completarTarea = ( id ) => {
        const tareasActualizadas = tareas.map( tarea => {
            if(tarea.id === id) {
                tarea.completo = !tarea.completo
            }
            return tarea;
        })

        setTareas( tareasActualizadas );
    }  

    return (
        <>

                <TareaFormulario 
                onChange={ inputValue }
                onSubmit={ agregarTarea }
                taskEdit={taskEdit}
                input={input}
                />

            <div
            className='tareas-lista-contenedor'
            >
                {
                    tareas.map( tarea => {
                            const {id, text, completo } = tarea;
                            return (
                                <Tarea
                                texto = { text }
                                id = { id }
                                key = { id }
                                completo = { completo }
                                completed = { completarTarea }
                                deletear = { eliminarTarea }
                                taskEdit= { taskEdit }
                                setTaskEdit = { setTaskEdit }
                                />
                        )}
                    )
                }
            </div>
        </>
    )
}

export default ListaDeTareas;