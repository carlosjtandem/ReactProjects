import logo from './logo.svg';
import './App.css';
import { Listado } from './components/Listado'
import { Buscador } from './components/Buscador';
import { Crear } from './components/Crear';
import { useState } from 'react';

function App() {
  const [listadoState, setListadoState] = useState([])
  return (
    <div className="layout">
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>

        <h1>MisPelis</h1>
      </header>

      <nav className="nav">
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Peliculas</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>

      <section id="content" className="content">
        {/* aqui va listado peliculas */}
        <Listado listadoState={listadoState} setListadoState={setListadoState} />
      </section>

      <aside className="lateral">
        {/* envio los dos props a listado porque 1 necesito para obtener el listado y 2 porq voy a actualizar el listado tras la busqueda */}
        <Buscador listadoState={listadoState} setListadoState={setListadoState} />

        <Crear setListadoState={setListadoState} />
      </aside>

      <footer className="footer">
        &copy; Máster en React - <a href="https://victorroblesweb.es">victorroblesweb.es</a>
      </footer>

    </div>
  );
}

export default App;
