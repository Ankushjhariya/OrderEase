import axios from "axios"
import { useEffect } from "react"
import { ORDER_API_END_POINT } from "../utils/constant"
import { useDispatch } from "react-redux"
import { getEveryOrder } from "../redux/orderSlice"



export const useEveryOrder = ()=> {
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchEveryOrder = async ()=> {
            try {
                const res = await axios.get(`${ORDER_API_END_POINT}/getallorder`, {
                    withCredentials:true
                })
                console.log(res);
                dispatch(getEveryOrder(res.data.order));
            } catch (error) {
                console.log(error);
            }
        }
        fetchEveryOrder();
    },[dispatch]);
    };
