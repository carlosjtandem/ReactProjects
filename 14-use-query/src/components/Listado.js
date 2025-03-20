import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) throw new Error("Error al obtener los usuarios");
  //   return response.json();
  const users = await response.json();

  // Mezcla aleatoria de los usuarios y toma los primeros 5
  return users.sort(() => Math.random() - 0.5).slice(0, 5);
};

export default function Listado() {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["users"], // Identificador único para la consulta
    queryFn: fetchUsers, // Función que obtiene los datos
    retry: 1, // Solo reintenta una vez en caso de error
    refetchOnWindowFocus: false, // No vuelve a cargar al cambiar de ventana
  });

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button onClick={() => refetch()}>Actualizar Usuarios</button>
    </>
  );
}
