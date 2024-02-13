import React from 'react'

export const EventosComponente = () => {

    const hasDadoClick = (e, nombre) => {
        alert("Has dado clic" + nombre)
    }
    function hasDadoDocleClick(e, mensaje) {
        alert("Has dado docle clic --" + mensaje)
    }

    const hasEntrado = (e, accion) => {
        alert(`has ${accion} a la caja con el mouse`)
    }

    const estasDentro = () => {
        console.log("estas dentro del input");
    }
    
    const estasFuera = () => {
        console.log("estas fuera del input");
    }
    return (
        <div>
            <h1>Eventos REact</h1>
            {/* evento click */}
            <button onClick={e => hasDadoClick(e, "Javier")} >DAme click</button>

            {/* evento doble click */}
            <button onClick={e => hasDadoDocleClick(e, "Fin")} >DAme doble click</button>

            {/* evento onMouseEnter onMouseLeave */}
            <div id='caja'
                onMouseEnter={e => hasEntrado(e, "entrado")}
                onMouseLeave={e => estasFuera(e, "salido")}
            >
                Pasa por encima
            </div>

            <p>
                <input type="text"
                    onFocus={estasDentro}
                    onBlur={estasFuera}
                    placeholder="Introduce texto"></input>
            </p>
        </div>
    )
}
