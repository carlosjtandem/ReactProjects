export const GuardarEnStorage = (clave, elemento) => {
    // conseguir elementos que ya tiene el local storage
    let elementos = JSON.parse(localStorage.getItem(clave));
    console.log(elementos);
    // comprobar si es un Array
    if (Array.isArray(elementos)) {
        //añadir dentro del array un nuevo elemento
        elementos.push(elemento);
    }
    else {
        //Crear un nuevo array con la nueva peli
        elementos = [elemento];
    }
    // guardar en el local Storage mi array de peliculas
    localStorage.setItem(clave, JSON.stringify(elementos));
    // devolver objeto
    return elemento;
}