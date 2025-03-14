import React, { useRef } from "react";

export default function ContadorDeClics() {
  const contadorRef = useRef(0);

  const manejarClic = () => {
    // Incrementamos el valor de la referencia
    contadorRef.current += 1;
    console.log(`Número de clics: ${contadorRef.current}`);
  };

  return (
    <div>
      <button onClick={manejarClic}>Haz clic aquí</button>
      <p>Revisa la consola para ver el número de clics.</p>
    </div>
  );
}
