// paso3 creamos el store
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

export const store = configureStore({
    reducer: {
        user: userReducer, // creamos solo una porcion para user
    }
});