import React from 'react'
import PropTypes from 'prop-types'

export const TercerComponente = ({
    nombre,
    apellido,
    ficha
}) => {
    // console.log(props);
    return (
        <div>
            <h1>Comunicación entre componentes</h1>
            <ul>
                <li>{nombre}</li>
                <li>{apellido}</li>
                <li>{ficha.peso}</li>
            </ul>
        </div>
    )
}

TercerComponente.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired,
    ficha: PropTypes.object
}

TercerComponente.defaultProps = {
    nombre: "Carlos Javier",
    apellido: "Aucancela",
}
