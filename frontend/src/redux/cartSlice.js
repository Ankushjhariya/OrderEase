import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cart:{
            items:[]
        }
    },
    reducers: {
        setCart: (state,action)=> {
            state.cart = action.payload;
        },
        addItem: (state,action)=> {
            // state.cart = action.payload;
            state.cart.items.push(action.payload);
        },
        // setItems: (state, action) => {
        //     state.cart.items = action.payload;
        // }
    },

});
 export const  { addItem, setCart, setItems } = cartSlice.actions;
 export default cartSlice.reducer;