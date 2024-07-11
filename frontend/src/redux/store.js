import {configureStore,combineReducers} from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import categorySlice from "./categorySlice";
import dishSlice from './dishSlice.js';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'
import cartSlice from "./cartSlice.js";
import orderSlice from "./orderSlice.js";



const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }

const rootReducer = combineReducers({
    user:userSlice,
    category:categorySlice,
    dishes:dishSlice,
    cart: cartSlice,
    order: orderSlice,
    
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export default store;