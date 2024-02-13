import React, { useEffect } from 'react'

export const AvisoComponent = () => {

    useEffect(() => {
        //Cuando el componente se monta
        alert("El componente AvisoComponente está montado!")

        //Cuando el componente se desmonta
        return()=>{
            alert("Componente desmontado");
        }

    })

    return (
        <div><h1>Hemos superdo los 20 cambios</h1>
            <button onClick={e => {
                alert("Bienvenido");
            }}>Mostrar Alerta</button>
        </div>
    )
}
