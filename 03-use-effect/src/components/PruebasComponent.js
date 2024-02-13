import React, { useState, useEffect } from 'react'
import { AvisoComponent } from './AvisoComponent';

export const PruebasComponent = () => {
    const [usuario, setUsuario] = useState("Juan Perez");
    const [contador, setContador] = useState(0);

    const modUsuario = e => {
        setUsuario(e.target.value);
    }

    // este hook se ejecuta siempre
    // useEffect(()=>{
    //     console.log("Has cargado componente prueba, o has cambiado un estado");
    // })

    // este hook se ejecuta una sola vez al cargar el componente
    useEffect(() => {
        console.log("Has cargado componente prueba");
    }, [])

    // este hook se ejecuta una sola vez al modificar el estado de usuario
    useEffect(() => {
        setContador(contador + 1);
        console.log("Has modificado el usuario:" + contador);

    }, [usuario])

    return (
        <div> <h2>Use State</h2>

            <strong className={contador >= 10 ? 'label label-green' : 'label'}>{usuario}</strong>
            <form>
                <input type="text"
                    onChange={modUsuario}
                    placeholder="Cambia nombre"
                />
            </form>
            {contador >= 20 && <AvisoComponent />}
        </div>
    )
}
