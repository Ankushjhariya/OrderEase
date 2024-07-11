import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mobile:{
        type: String,
    required: true,
    unique: true,
    match: [/^\d{10}$/, 'Please enter a valid mobile number with exactly 10 digits']
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
},{timestamps:true});

export const User = mongoose.model("User", userSchema);