import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Listado = ({ listadoState, setListadoState }) => {

    const [editar, setEditar] = useState(0)

    useEffect(() => {
        console.log("cargando listado de pelis");
        conseguirPeliculas();
    }, [])

    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("pelis"));
        setListadoState(peliculas);
        return peliculas;
    }


    const BorrarPelicula = (id) => {
        // Conseguir peliculas almacenas
        let pelis_almacenadas = conseguirPeliculas();
        // Filtrar esas peliculas para que elimine del array la que no quiero
        let nuevo_array_peliculas = pelis_almacenadas.filter(peli => peli.id !== parseInt(id));
        // console.log(pelis_almacenadas, nuevo_array_peliculas);
        console.log(pelis_almacenadas, nuevo_array_peliculas);
        //Actualizar estado del Listado
        setListadoState(nuevo_array_peliculas);
        //Actualizar los datos en el Localstorage
        localStorage.setItem('pelis', JSON.stringify(nuevo_array_peliculas));
    }

    return (
        <>
            {listadoState != null ?
                listadoState.map(peli => {
                    return (
                        <article key={peli.id} className="peli-item">
                            <h3 className="title">{peli.titulo}</h3>
                            <p className="description">{peli.descripcion}</p>

                            <button className="edit" onClick={() => {
                                setEditar(peli.id)
                            }}>Editar</button>
                            <button className="delete" onClick={() => BorrarPelicula(peli.id)}>Borrar</button>

                            {/* //Mostrar formulario */}
                            {editar === peli.id && (
                                <Editar peli={peli}
                                    conseguirPeliculas={conseguirPeliculas}
                                    setEditar={setEditar}
                                    setListadoState={setListadoState}
                                />
                            )}

                        </article>
                    );
                })
                : <h2>No hay películas</h2>
            };
        </>
    )
}
