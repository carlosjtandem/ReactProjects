import React, { useEffect, useState } from 'react'
import { SpinnerInfinity } from 'spinners-react';


export const AjaxComponent = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(true);  // por defecto se le asigna true para q siempre esté cargando
    const [error, setError] = useState("");
    // Generico - basico
    const getUsuariosEstaticos = () => {
        setUsuarios([
            { "id": 1, "email": "michael.lawson@reqres.in", "first_name": "Michael", "last_name": "Lawson", "avatar": "https://reqres.in/img/faces/7-image.jpg" },
            { "id": 2, "email": "lindsay.ferguson@reqres.in", "first_name": "Lindsay", "last_name": "Ferguson", "avatar": "https://reqres.in/img/faces/8-image.jpg" },
            { "id": 3, "email": "tobias.funke@reqres.in", "first_name": "Tobias", "last_name": "Funke", "avatar": "https://reqres.in/img/faces/9-image.jpg" }
        ])
    }

    // const getUsuariosAjaxPromesa = () => {
    //     fetch('https://reqres.in/api/users')
    //         .then(respuesta => respuesta.json())
    //         .then(resultado_final => {
    //             setUsuarios(resultado_final.data);
    //             console.log(usuarios)
    //         },
    //             error => {
    //                 console.log(error)
    //             })
    // }

    //con async y await
    const getUsuariosAjaxAsyncAwait = () => {
        setTimeout(async () => {
            try {
                const peticion = await fetch('https://reqres.in/api/users');
                const { data } = await peticion.json();

                console.log(data);

                setUsuarios(data);
                setCargando(false);
            } catch (error) {
                console.log(error.message);
                setError(error.message);
            }
        }, 2000);
    }
    //ejecuta este hook cuando carga la pagina
    useEffect(() => {
        // getUsuariosEstaticos();
        getUsuariosAjaxAsyncAwait();
    }, [])  //se envia  [] para que solo se ejecute una vez

    //Cuando esta cargando
    if (error !== "") {
        //Cuando pasa algun error
        return (
            <div className='cargando'>{error}</div>
        );
    }
    else if (cargando == true) {
        return (
            // <div className='cargando'>CArgando datos....</div>
            <SpinnerInfinity size={80} сolor={'#2d2e2d'} secondaryColor={'#c4f4d0'}  />
        );
    } else if (cargando == false && error === "") {
        //cuando todo ha ido bien
        return (
            <div><h2>Listado de usuarios - Ajax</h2>
                <ol className='usuarios'>
                    {
                        usuarios.map(usuario => {
                            console.log(usuario);
                            return <li key={usuario.id}>
                                <img src={usuario.avatar} width='30px' />
                                {usuario.first_name} {usuario.last_name}</li>
                        })
                    }
                </ol>
            </div>
        )
    }



}
