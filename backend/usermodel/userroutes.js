import express from "express"
import bcrypt from "bcrypt"
import Products from "../model/schema.js";
import User from "../usermodel/userschema.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv/config";

const router = express.Router();

router.post("/signup",async(req,res)=>{
    const {username, email, password} = req.body;
    try{
        const exsitinguser = await User.findOne({email});
        const hashpassword = await bcrypt.hash(password,10);
        if(exsitinguser){
            res.json({message:"user exists"})
        }
        const newuser = new User({
            username, email, password : hashpassword
        })
        await newuser.save();
        res.json(newuser);
    }catch(err){
        console.log(err)
    }
})

router.post("/login",async(req,res)=>{
    const {username, password} = req.body;
    try{
        const user = await User.findOne({username});
        if(!user){
            return res.json({message:"User not found"})
        }
        const ismatch = await bcrypt.compare(password, user.password)
        if(!ismatch){
            return res.json({message:"Invalid password"})
        }

        const token = jwt.sign(
            {userid:user._id}, process.env.JWT_TOKEN ,{expiresIn: '1d'}
        )

        return res.json(token,user);
    }catch(err){
        console.log(err)
    }
})

export default router;