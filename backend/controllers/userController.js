import {User} from '../models/userSchema.js';
import bcryptsjs from "bcryptjs";
import jwt from 'jsonwebtoken';

export const Register = async(req,res)=>{
    try {
        const {name, mobile, email, password } = req.body;
        if(!name || !mobile || !email || !password){
            return res.status(401).json({
                message:"All feilds are required.",
                success:false
            })
        }
        const user = await User.findOne({email});
        if(user){
            return res.status(401).json ({
                message:"User already exist",
                success:false
            })
        }
        const hashedPassword = await bcryptsjs.hash(password,10);
        await User.create({
            name,
            mobile,
            email,
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
        const {email,password} = req.body;
        if (!email || !password) {
            return res.status(401).json({
                message: "All fields are required.",
                success: false
            })
        };
        const user = await User.findOne({ email });
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
            message: `Welcome back ${user.name}`,
            user,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}
export const Logout = (req, res) => {
    return res.cookie("token", "", { expiresIn: new Date(Date.now()) }).json({
        message: "user logged out successfully.",
        success: true
    })
};
export const getMyProfile = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id).select("-password");
        return res.status(200).json({
            user,
        })
    } catch (error) {
        console.log(error);
    }
};