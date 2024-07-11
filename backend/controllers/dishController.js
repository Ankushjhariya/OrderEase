import { Dish } from "../models/dishSchema.js";

export const Create = async (req,res) =>{
    try {
        const {name, price, category, description, image} = req.body;
        if(!name,!price,!category, !description, !image){
            return res.status(401).json({
                message:"All feilds are required.",
                success:false
            })
        }
        const dish = await Dish.findOne({name});
        if(dish){
            return res.status(401).json ({
                message:"dish already added",
                success:false
            })
        }
        await Dish.create({
            name,
            price,
            category,
            description,
            image,
        });
        return res.status(201).json ({
            message:"Dish added successfully",
            success:true
        })
    } catch (error) {
        console.log(error);
    }
}
export const deletedish = async (req,res) => {
    try {
        const {id}  = req.params;
        await Dish.findByIdAndDelete(id);
        return res.status(200).json({
            message:"dish deleted successfully.",
            success:true
        })
    } catch (error) {
        console.log(error);
    }
}
export const getDishes = async (req,res)=>{
    try {
        const allDishes = await Dish.find();
        return res.status(200).json ({
            dishes:allDishes
        })
    } catch (error) {
        console.log(error);
    }
}