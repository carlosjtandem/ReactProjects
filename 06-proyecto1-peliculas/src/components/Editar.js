import React from 'react'

export const Editar = ({ peli, conseguirPeliculas, setEditar, setListadoState }) => {
    const titulo_componente = 'Editar';

    const guardarEdicion = (e, id) => {
        e.preventDefault();
        //Conseguir el target del evento
        let target = e.target;

        //buscar indice del objeto de la pelicula a actualizar
        const pelis_almacenadas = conseguirPeliculas();   // este como no lo tenemos se lo pasa como prop
        const indice = pelis_almacenadas.findIndex(peli => peli.id === id);
        // console.log(indice);

        //Crear objeto
        let peli_actualizada = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value
        }

        //Actualizar el elemento con ese indice
        pelis_almacenadas[indice] = peli_actualizada
        // console.log(indice, peli);
        //Guardar nuevo array en localstorage
        localStorage.setItem("pelis", JSON.stringify(pelis_almacenadas));

        //Actualizar estados
        setListadoState(pelis_almacenadas);
        setEditar(0);
    }

    return (
        <div className='edit_form'>
            <h3 className='title'>{titulo_componente}</h3>
            <form onSubmit={e => guardarEdicion(e, peli.id)}>
                <input type='text'
                    name='titulo'
                    className='titulo_editado'
                    defaultValue={peli.titulo} />

                <textarea name='descripcion'
                    defaultValue={peli.descripcion}
                    className='descripcion_editada' />

                <input type='submit' className='editar' value='Actualizar' />
            </form>
        </div >
    )
}
