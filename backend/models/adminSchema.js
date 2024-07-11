import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    mobile:{
        type: String,
    required: true,
    unique: true,
    match: [/^\d{10}$/, 'Please enter a valid mobile number with exactly 10 digits']
    },
    password:{
        type:String,
        required:true
    },
},{timestamps:true});

export const Admin = mongoose.model("Admin", adminSchema);