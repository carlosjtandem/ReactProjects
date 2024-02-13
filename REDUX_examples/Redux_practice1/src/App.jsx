import { useEffect, useState } from 'react'
import { Header } from "./components/Header";
import { Email } from "./components/Email";
import { useDispatch } from 'react-redux';
import { addUser } from './redux/userSlice';

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => dispatch(addUser(data)))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className='App'>
      <Header />
      <Email />
    </div>
  )
}

export default App


//lo que facilita redux es... teniendo un estado global no hace falta pasar el estado por propiedasdes de padres a hijos,
// sino que desde cualquier parte de la aplicacion podemos acceder al estado global y podemos modificarlo.
// cuando la aplicacion es grande el props driling es el problema es pasar muchos estados a los camponenests