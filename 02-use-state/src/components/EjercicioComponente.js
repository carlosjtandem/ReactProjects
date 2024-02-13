import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const EjercicioComponente = ({ year }) => {

    const [yearNow, setYearNow] = useState(year);

    const siguiente = e => {
        console.log("entra")
        setYearNow(yearNow + 1);
    }

    const anterior = e => {
        let operacion = yearNow - 1;
        setYearNow(operacion);
    }

    const cambiarYear = e => {
        let dato = parseInt(e.target.value);


        if (Number.isInteger(dato)) {
            setYearNow(dato);
        } else {
            setYearNow(year);
        }

    }
    return (
        <div>
            <strong className='label label-green'>{yearNow}</strong>
            <p>
                <button onClick={siguiente}>Proximo</button>
                &nbsp;
                <button onClick={anterior}>Anterior</button>
            </p>
            <p>Cambiar año:
                <input type="text"
                    onChange={cambiarYear}
                    placeholder="Ingresa nuevo año"
                />
            </p>
        </div>
    )
}

EjercicioComponente.propTypes = {
    year: PropTypes.number.isRequired
}
