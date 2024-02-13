//usaremos un componente suspense para el loading
import React from 'react'

function getSuspender(promise) {
  let status = "pending";
  let response;

  const suspender = promise.then(   //Otra forma de manejar promesas
    (res) => {
      status = "success";
      response = res;
    },
    (err) => {
      status = "error";
      response = err;
    }
  );
  const read = () => {
    switch (status) {
      case "pending":
        throw suspender;
      case "error":
        throw response;
      default:
        return response;
    }
  }

  return { read };
}

export function fetchData(url) {
  const promise = fetch(url)
    .then((response) => response.json())
    .then((data) => data)

  return getSuspender(promise);
}

