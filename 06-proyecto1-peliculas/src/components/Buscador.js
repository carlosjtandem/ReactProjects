import React, { useState } from 'react'

export const Buscador = ({ listadoState, setListadoState }) => {
    const [busqueda, setBusqueda] = useState('')
    const [noEncontrado, setNoEncontrado] = useState(false)  //estado para validar si no encuentra tras una busqueda
    const buscarPeli = (e) => {
        //Crear stado y actualizarlo por si necesito la palabra con la que se busca
        setBusqueda(e.target.value);
        // console.log(busqueda);
        //EL listado completo de peliculas se lo pasó por props
        //nada todo
        //Filtrar par buscar coicidencias
        let pelis_encontradas = listadoState.filter(peli => {
            return peli.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase());
        })
        //Coprobar si hay resultado
        if (busqueda.length <= 1 || pelis_encontradas <= 0) {
            pelis_encontradas = JSON.parse(localStorage.getItem("pelis"));
            setNoEncontrado(true);
        } else {
            setNoEncontrado(false);
        }
        //Dar valor de todo el localstorage
        setListadoState(pelis_encontradas)
        //Actualizar estado del listo principal con lo que logrado filtar
    }

    return (
        <div className="search">
            <h3 className="title">Buscador: {busqueda}</h3>
            {(noEncontrado == true && busqueda.length>1) && (
                <span className='no-encontrado'>No se ha encontrado coincidencias</span>
            )}
            <form>
                <input
                    name='busqueda'
                    type="text"
                    id="search_field"
                    autoComplete='off'
                    onChange={buscarPeli}
                />
                <button id="search">Buscar</button>
            </form>
        </div>
    )
}
