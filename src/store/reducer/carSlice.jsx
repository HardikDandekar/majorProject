import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  carList: [
    {
      name: "Toyota Supra",
      price: "1232",
      type: "Petrol",
      description: "...",
      url: "https://images.unsplash.com/photo-1618205062886-3976f4bb8219?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id: nanoid(),
    },
    {
      name: "Ford Mustang",
      price: "1232",
      type: "Petrol",
      description: "...",
      url: "https://images.unsplash.com/photo-1547744152-14d985cb937f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id: nanoid(),
    },
    {
      name: "Porsche",
      price: "1232",
      type: "Petrol",
      description: "...",
      url: "https://images.unsplash.com/photo-1526069824293-406685e85766?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id: nanoid(),
    },
    {
      name: "BMW M4",
      price: "1232",
      type: "Petrol",
      description: "...",
      url: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=2430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id: nanoid(),
    },
    {
      name: "Mercedies G-wagon",
      price: "1232",
      type: "Petrol",
      description: "...",
      url: "https://images.unsplash.com/photo-1648413653877-ade5eefd2f1b?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id: nanoid(),
    },
    {
      name: "Audi Q7",
      price: "1232",
      type: "Petrol",
      description: "...",
      url: "https://images.unsplash.com/photo-1597007030739-6d2e7172ee5b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id: nanoid(),
    },
    {
      name: "Range Rover",
      price: "1232",
      type: "Petrol",
      description: "...",
      url: "https://images.unsplash.com/photo-1620547316190-289b3899e010?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id: nanoid(),
    },
    
  ],
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    addCar: (state, action) => {
      state.carList.push(action.payload)
    },
    removeCar : (state , action) => {
      state.carList = state.carList.filter(car => car.id !== action.payload);
    }
  },
});
export default carSlice.reducer;
export const { addCar ,removeCar } = carSlice.actions;
