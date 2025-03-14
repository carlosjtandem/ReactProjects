import React, { useRef, useEffect } from "react";

export default function Ejemplo2InputAutofocus() {
  // Creamos una referencia para el input
  const inputRef = useRef(null);

  // Usamos useEffect para enfocar el input cuando el componente se monta
  useEffect(() => {
    inputRef.current.focus(); // Enfoca el input
  }, []); // El array vacío [] asegura que esto solo se ejecute una vez (al montar)

  return (
    <div>
      <p>Escribe algo:</p>
      <input type="text" ref={inputRef} placeholder="Aqui debe estar el cursor debido al uso de UseRef" />
      <br/>
      <input type="text" placeholder="Escribe aquí..." />
    </div>
  );
}
