import { Admin } from "../models/adminSchema.js";
import bcryptsjs from 'bcryptjs';
import jwt from "jsonwebtoken";

export const Register = async(req,res)=>{
    try {
        const {mobile, password } = req.body;
        if(!mobile || !password){
            return res.status(401).json({
                message:"All feilds are required.",
                success:false
            })
        }
        const user = await Admin.findOne({mobile});
        if(user){
            return res.status(401).json ({
                message:"User already exist",
                success:false
            })
        }
        const hashedPassword = await bcryptsjs.hash(password,10);
        await Admin.create({
            mobile,
            password:hashedPassword
        });

        return res.status(201).json ({
            message:"Account created successfully",
            success:true
        })
}catch (error) {
        console.log(error);
    }
}

export const Login = async (req,res)=>{
    try{
        const {mobile,password} = req.body;
        if (!mobile || !password) {
            return res.status(401).json({
                message: "All fields are required.",
                success: false
            })
        };
        const user = await Admin.findOne({ mobile });
        if (!user) {
            return res.status(401).json({
                message: "Incorrect email or password",
                success: false
            })
        }
        const isMatch = await bcryptsjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                message: "Incorect email or password",
                success: false
            });
        }
        const tokenData = {
            userId: user._id
        }
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: "1d" });
        return res.status(201).cookie("token", token, { expiresIn: "1d", httpOnly: true }).json({
            message: `Welcome back Sir jii`,
            user,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}
export const Logout = (req,res) => {
    return res.cookie("token", "", { expiresIn: new Date(Date.now()) }).json({
        message: "user logged out successfully.",
        success: true
    })
};