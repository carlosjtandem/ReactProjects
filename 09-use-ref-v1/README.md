En este ejemplo, usaremos useRef para contar cuántas veces se ha hecho clic en un botón, sin causar un re-renderizado cada vez que el contador cambia. Esto es útil cuando quieres almacenar un valor que no necesita mostrarse en la interfaz o que no debe causar una actualización visual.



Explicación paso a paso:
1. Crear la referencia:

Usamos useRef(0) para crear una referencia llamada contadorRef y la inicializamos con el valor 0.

contadorRef es un objeto que tiene una propiedad current, donde almacenamos el valor actual del contador.

2. Actualizar la referencia:

En la función manejarClic, incrementamos el valor de contadorRef.current cada vez que se hace clic en el botón.

Como useRef no causa un re-renderizado, el componente no se actualiza visualmente, pero el valor de contadorRef.current sí cambia.

3. Mostrar el resultado:

En este caso, no mostramos el valor del contador en la interfaz, sino que lo imprimimos en la consola usando console.log.


_____

¿Por qué usar useRef aquí?
Si usáramos useState para el contador, cada vez que el estado cambie, el componente se re-renderizaría, lo cual no es necesario en este caso porque no estamos mostrando el valor en la interfaz.

useRef es perfecto para almacenar valores que no necesitan desencadenar una actualización visual.