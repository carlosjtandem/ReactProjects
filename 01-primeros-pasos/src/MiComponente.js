import React from 'react'

export const MiComponente = () => {
    const libros = ["Harry Potter", "Juego de tronos", "Clean code"];
    return (
        <div className='micomponente'>
            <h1>Listado libros</h1>
            <ul>
                {libros.map((libro, indice) => {
                    return <li key={indice}>{libro}</li>
                })
                }
            </ul>
        </div>
    )
}
