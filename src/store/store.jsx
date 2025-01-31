import { configureStore } from "@reduxjs/toolkit";
import carSlice from "./reducer/carSlice"


export const store = configureStore({
    reducer:{
        car : carSlice,
   


    }
})