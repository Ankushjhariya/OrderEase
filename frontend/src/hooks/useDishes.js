import { useEffect } from "react";
import { useDispatch, } from "react-redux"
import { getAllDishes } from "../redux/dishSlice";
import axios from "axios";
import { DISH_API_END_POINT } from "../utils/constant";



export const useDishes = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchDishes = async () => {
            try {
                const res = await axios.get(`${DISH_API_END_POINT}/getdishes`,{
                    withCredentials:true
                });
                console.log(res);
                dispatch(getAllDishes(res.data.dishes));
            } catch (error) {
                console.log(error);
            }
        }
        fetchDishes();
    },[dispatch]);
    
};