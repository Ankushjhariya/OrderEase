import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name:'orders',
    initialState:{
        orders:[],
        myorder:[],
        refresh:false,
        isActive:true,
    },
    reducers:{
        getRefresh:(state)=>{
            state.refresh = !state.refresh;
        },
        getIsActive:(state,action)=>{
            state.isActive = action.payload;
        },
        getEveryOrder:(state,action)=> {
            state.orders = action.payload;
        },
        getMyOrder:(state,action)=> {
            state.myorder = action.payload;
        }
    }
});

export const { getRefresh, getIsActive, getEveryOrder, getMyOrder } = orderSlice.actions;
export default orderSlice.reducer;