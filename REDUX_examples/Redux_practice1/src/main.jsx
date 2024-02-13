import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { store } from "./redux/store"
import { Provider } from 'react-redux'  // paso1 Para englobar toda la aplicacion y que puedan escuchar el estado de la aplicacion con todos los componentes hijos
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>  {/*paso2 englobamos dentro de APP y vamos a pasar una prop llamada store */}
      <App />
    </Provider>
  </React.StrictMode>,
)
