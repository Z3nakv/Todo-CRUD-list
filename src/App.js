import './App.css';
import ContenedorTareas from './componentes/Contenedor-tareas';
import Container from './componentes/Logo';

function App() {

  return (
    
    <div className="App">
      
      <Container />   {/* logo */}

      <ContenedorTareas />  {/* Contenedor de tareas */}
      
    </div>
    
    
    
  );
}

export default App;
