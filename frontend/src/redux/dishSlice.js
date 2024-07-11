import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    dishes:[],
};


const dishSlice = createSlice({
    name: 'dishes',
    initialState,
    reducers: {
        getAllDishes:(state,action)=>{
            state.dishes = action.payload;
        }
    },
});

export const {getAllDishes} = dishSlice.actions;
export default dishSlice.reducer;