import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CART_API_END_POINT } from "../utils/constant";

// import { setItems } from "../redux/cartSlice";

const FoodCard = ({ dishId, name, price, description, image }) => {
  const { user } = useSelector((store) => store.user);
  const userId = user._id;
  const {cart} = useSelector(store=>store.cart);
  // Commented this
  const dispatch = useDispatch();
  const addToCart = async (quantity = 1) => {
    try {
      const res = await axios.post(
        `${CART_API_END_POINT}/add`,
        { userId, dishId, quantity },
        {
          withCredentials: true,
        }
      );
      console.log(res);
      // dispatch(setItems(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromCart = async () =>{
    try {
      const res = await axios.post(
        `${CART_API_END_POINT}/remove`,
        {userId, dishId},
        {
          withCredentials:true
        }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  // const addToCart = async () => {
  //     try {
  //         const res = await axios.post(`${CART_API_END_POINT}/add`,{userId,id},{
  //             withCredentials:true
  //         });
  //         console.log(res);
  //     } catch (error) {
  //         console.log(error);
  //     }
  // }
  // const { addToCart } = useAdd();

  const handleAddToCart = () => {
    if (user && user._id) {
      console.log("ankush");
      addToCart(); // Adding one item to the cart
    } else {
      console.log("User is not logged in");
    }
    // console.log("Add button clicked");
  };

  const handleRemoveFromCart = ()=>{
    if(user && user._id) {
      console.log("ankush");
      removeFromCart();
    }else{
      console.log("kya kar arhe ho jiii");
      // res.send("item not in cart");
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center border-b-4 border-x-4">
        <div className="flex justify-between items-center">
          <img
            className="size-[140px] m-1 rounded-full border-4 border-gray-200"
            src={image}
            alt="dish"
          />
          <p className="mx-2 font-mono font-bold ">{name}</p>
          <p className="mx-4 font-semibold">{description}</p>
          <p className="font-semibold mx-2 border-2 px-2">Rs.{price}</p>
        </div>
        <div>
          <button
            onClick={handleAddToCart}
            className="bg-white m-1 border border-green-400 px-2 rounded-full"
          >
            ADD
          </button>
          <button
            onClick={handleRemoveFromCart}
            className="bg-red-400 m-1 border border-green-400 px-2 rounded-full"
          >
            REMOVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
