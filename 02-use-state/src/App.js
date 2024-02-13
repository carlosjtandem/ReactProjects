import logo from './logo.svg';
import './App.css';
import MiPrimerEstado from './components/MiPrimerEstado';
import { EjercicioComponente } from './components/EjercicioComponente';

function App() {

  let fecha = new Date();
  let anioACtual = fecha.getFullYear();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Estado REact</h1>
        <MiPrimerEstado />
        <EjercicioComponente year={anioACtual} />
      </header>
    </div>
  );
}

export default App;
