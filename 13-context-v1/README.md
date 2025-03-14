useContext es un hook en React que te permite acceder a valores de un Contexto (Context) sin necesidad de pasar props manualmente a través de cada nivel del árbol de componentes. Es especialmente útil para compartir datos globales, como temas, preferencias del usuario, autenticación, o cualquier información que necesite ser accesible en muchos componentes.


¿Cuándo usar useContext?
Debes usar useContext en las siguientes situaciones:

Evitar el "prop drilling":

Cuando tienes que pasar props a través de muchos niveles de componentes (por ejemplo, un valor que necesita un componente profundo en el árbol), y esto se vuelve tedioso y difícil de mantener.

Datos globales:

Cuando necesitas compartir datos en muchos componentes, como el tema de la aplicación, el estado de autenticación, el idioma, o configuraciones globales.

Estado compartido:

Cuando varios componentes necesitan acceder y actualizar el mismo estado (por ejemplo, un carrito de compras o un sistema de notificaciones).

Simplificar el código:

