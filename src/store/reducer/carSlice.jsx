import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carList: [
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
