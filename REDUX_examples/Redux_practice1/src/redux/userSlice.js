// paso4 .. aqui si vamos a tener la logica del estado de la aplicacion

//este fichero va a tener la logica del estado de la aplicacion.
//SLICE = una porcion de estado

import { createSlice } from "@reduxjs/toolkit"

const initialState = {  //la parte inicial del estado global
    name: "",
    username: "",
    email: "",
};

export const userSlice = createSlice({  // con create Slice vamos a crear una porcion del estado
    name: "user", //para poder identificarlo al llamarlo desde los componentes
    initialState,
    reducers: {
        addUser: (state, action) => {
            const { name, username, email } = action.payload;  // aqui se hace un destructuring porq viene todo el objecto
            state.name = name;
            state.username = username;
            state.email = email;
        },
        changeEmail: (state, action) => {
            state.email = action.payload;
        }
    }
});
export const { addUser, changeEmail } = userSlice.actions;
export default userSlice.reducer;

// antes se hacia el uso del spread operator para poder modificar __DO_NOT_USE__ActionTypes,, ahora con redux toolkit se puede mutar o cambiar directamente el estado