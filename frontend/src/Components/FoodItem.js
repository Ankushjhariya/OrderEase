import React from "react";
import FoodCard from "./FoodCard.js";
import { useDishes } from "../hooks/useDishes.js";
import categorySlice from "../redux/categorySlice";
import { useSelector } from "react-redux";

const FoodItem = () => {
  useDishes();
  const { dishes } = useSelector((store) => store.dishes);

  return (
    <div>
      {dishes?.map((food) => (
        <FoodCard
          key={food?._id}
          dishId={food._id}
          name={food.name}
          price={food.price}
          description={food.description}
          image={food.image}
        />
      ))}
    </div>
  );
};

export default FoodItem;
