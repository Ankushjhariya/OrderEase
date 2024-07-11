import mongoose from "mongoose";

const dishSchema = new mongoose.Schema({
    name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, enum:['starter','main course', 'dessert', 'drinks'], required: true },
  description: { type: String },
  image: { type: String, default:'https://media.istockphoto.com/id/1312663211/photo/stack-of-ceramic-dishware-on-white-background.jpg?s=612x612&w=0&k=20&c=3PFthfikTkgTndwit3lhW4Flf_dXBxZSMGxTHbw8JHg=' },
});

export const Dish = mongoose.model("Dish", dishSchema);