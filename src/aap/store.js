import { configureStore } from "@reduxjs/toolkit";
import Notesreducer from "../fetures/notesslice";
import ToggleReducer from "../fetures/toggleslice";
const store=configureStore({
    reducer:{
       note: Notesreducer,
       toggle:ToggleReducer,
    }
})
export default store;