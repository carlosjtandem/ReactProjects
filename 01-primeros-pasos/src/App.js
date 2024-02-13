import logo from './logo.svg';
import './App.css';
import { MiComponente } from './MiComponente';
import { TercerComponente } from './TercerComponente';
import { EventosComponente } from './EventosComponente';

function App() {
  const ficha_medica = {
    altura: "178cm",
    grupo: "1",
    peso: "73Kg",

  }

  return (
    <div className="App">
      <header className="App-header">
        
        <MiComponente />
        <TercerComponente
          ficha={ficha_medica}
        />
        <EventosComponente />
      </header>
    </div>
  );
}

export default App;
