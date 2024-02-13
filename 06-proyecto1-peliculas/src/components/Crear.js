import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear = ({setListadoState}) => {

    const tituloComponente = "Añadir pelicula"
    const [peliState, setPeliState] = useState({
        titulo: '',
        descripcion: ''
    });

    const { titulo, descripcion } = peliState;
    const getFormValues = e => {
        e.preventDefault();

        //conseguir datos del formulario
        let target = e.target;
        let titulo = target.title.value;
        let descripcion = target.description.value;

        // Crear objeto de la pelicula a guardar
        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion
        }
        setPeliState(peli);

        //GUARDAR EN LOCAL STORAGE
        GuardarEnStorage("pelis",peli);

        //actualizar estado , usando un callback,esto es la magia de los estados
        setListadoState(elementos =>{
            return[...elementos,peli]   // trae todos los elementos que tiene y añade un elemento
        })

    }

    return (
        <div className="add">
            <h3 className="title">{tituloComponente}</h3>
            {/* Muestra si exite titulo y descripcion */}
            <strong>
                {(titulo && descripcion) && "Has creado la película:" + titulo}
            </strong>
            <form onSubmit={getFormValues}>
                <input type="text" id="title" name='title' placeholder="Titulo" />
                <textarea id="description" name='description' placeholder="Descripción"></textarea>
                <input type="submit" id="save" value="Guardar" />
            </form>
        </div>
    )
}
