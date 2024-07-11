import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { CART_API_END_POINT } from "../utils/constant";
import { addItem, setCart } from "../redux/cartSlice";
import { getRefresh } from "../redux/orderSlice";


export const useCart = (id) => {
    const dispatch = useDispatch();

    useEffect(()=> {
        const fetchCart = async ()=> {
            try {
                const res = await axios.get(`${CART_API_END_POINT}/getcart/${id}`,{
                    withCredentials:true
                });
                console.log(res);
                dispatch(setCart(res.data));
                // dispatch(getRefresh());
            } catch (error) {
                console.log("Your cart is empty");
            }
        }
        fetchCart();
    },[dispatch, id]);
};