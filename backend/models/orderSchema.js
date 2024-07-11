import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    tableNumber: { type: Number, required: true },
  items: [
    {
      dish: { type: mongoose.Schema.Types.ObjectId, ref: 'Dish', required: true },
      quantity: { type: Number, required: true },
    }
  ],
  totalPrice: { type: Number, required: true },
  specialInstructions: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now },
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
},
});

export const Order = mongoose.model("Order", orderSchema);