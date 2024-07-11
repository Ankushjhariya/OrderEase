import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { ORDER_API_END_POINT } from "../utils/constant";
import { getMyOrder, getRefresh } from "../redux/orderSlice.js";




export const useGetMyOrder = (id)=> {
    const dispatch = useDispatch();
   useEffect(()=> {
    const fetchMyOrders = async ()=> {
        try {
            const res  = await axios.get(`${ORDER_API_END_POINT}/getorder/${id}`, {
                withCredentials:true
            });
            console.log(res);
            dispatch(getMyOrder(res.data.order));
            dispatch(getRefresh());
        } catch (error) {
            console.log(error);
        }
    }
    fetchMyOrders();
   },[dispatch,id]);
};