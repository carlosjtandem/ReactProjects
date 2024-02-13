import React, { useState } from 'react'

export const FormularioComponent = () => {

    const [usuario, setUsuario] = useState({});

    const conseguirDatosFormulario = e => {
        e.preventDefault();  //es para evitar que se recarga la pagina cuando se hace un submit
        let datos = e.target;
        let usuario = {
            nombre: datos.nombre.value,
            apellido: datos.apellido.value,
            genero: datos.genero.value,
            bio: datos.bio.value,
            enviar: datos.enviar.value
        }
        console.log(usuario);
        setUsuario(usuario);
    }

    const cambiarDatos = e => {
        let name_del_input = e.target.name;
        setUsuario(estadoPrevio => {
            return {
                ...estadoPrevio,
                [name_del_input]: e.target.value
            }
        })

    }
    return (
        <div><h1>Formularios con React</h1>
            {usuario.enviar &&   //condicion if que solo muestra si hay algo en bio
                (
                    <div className='info-user label-gray'>
                        {usuario.nombre} {usuario.apellido} es {usuario.genero} y esta es su bio:
                        {usuario.bio}
                    </div>
                )
            }
            <form onSubmit={conseguirDatosFormulario}>
                <input type="text" placeholder='Nombre' name='nombre' onChange={cambiarDatos} />
                <input type="text" placeholder='Apellido' name='apellido' onChange={cambiarDatos} />
                <select name='genero' onChange={cambiarDatos}>
                    <option value='Hombre'>Hombre</option>
                    <option value='Mujer'>Mujer</option>
                </select>
                <textarea placeholder='Biografia' name='bio' onChange={cambiarDatos}></textarea>
                <input type="submit" value="Enviar" name='enviar' />
            </form>
        </div>
    )
}
