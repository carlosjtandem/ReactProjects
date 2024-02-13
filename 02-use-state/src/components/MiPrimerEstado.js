import React, { useState } from 'react'

export default function MiPrimerEstado() {
    // problematica
    //   let nombre="CArlos J";
    //   const cambiarNombre = e=>{
    //     nombre= "PAco el flaco"
    //   }

    const [nombre, setNombre] = useState("PAcoo");

    const cambiarNombre = (e, nombreFijo) => {
        setNombre(nombreFijo);
    }

    return (
        <div>
            <h3>Componente mi primer estado</h3>
            <strong>
                <p></p> Mi nombre es: <strong className={nombre.length >= 4 ? 'verde' : 'rojo'}>{nombre}</strong><p />
            </strong>
            &nbsp;
            <button onClick={e => cambiarNombre(e, "Edwin")}>Cambiar a Edwin</button>
            &nbsp;
            <input type="text" onKeyUp={e => cambiarNombre(e, e.target.value)} />
        </div>
    )
}
