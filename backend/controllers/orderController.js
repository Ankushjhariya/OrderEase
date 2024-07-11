import {Order} from '../models/orderSchema.js';
import { User } from '../models/userSchema.js';


export const CreateOrder = async (req,res)=>{
    try {
        const {tableNumber, items, id, totalPrice, specialInstructions} = req.body;
        if(!tableNumber || !items || !id || !totalPrice){
            return res.status(401).json ({
                message:"Feilds are Required",
                success:false
            });
        };
        // console.log("hello");
        await Order.create({
            tableNumber,
            userId:id,
            items,
            totalPrice,
            specialInstructions,
        });
        return res.status(201).json({
            message:"Order created Successfully",
            success:true
        })
    } catch (error) {
        console.log(error);
    }
}

export const getOrder = async (req,res)=>{
    try {
        const id = req.params.id;
        const loggedInUser = await User.findById(id);
        const loggedInUserOrder = await Order.find({userId:id}).populate('items.dish');
        return res.status(200).json ({
            order:loggedInUserOrder
        })
    } catch (error) {
        console.log(error);
    }
}

export const getAllOrder = async (req, res)=> {
    try {
        const allOrder = await Order.find().populate('items.dish');
        return res.status(200).json ({
            order:allOrder
        })
    } catch (error) {
        console.log(error);
    }
}