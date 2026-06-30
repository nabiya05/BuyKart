import express, { urlencoded } from 'express';
import cors from "cors";
import mongoose from 'mongoose';
import bcrypt from "bcrypt"
import Products from  "./model/schema.js"
import Productdata from './model/data.js';
import router from "./routes/routes.js";
import userroutes from "../backend/usermodel/userroutes.js"
import dotenv from "dotenv/config";
import path from "path";
import { fileURLToPath } from 'url';
import cartroutes from "../backend/cartmodel/cartroute.js"

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use("/uploads", express.static("uploads"));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'uploads')));
app.use("/", router);
app.use("/user", userroutes);
app.use("/", cartroutes);

const connectDB = async(req,res)=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        const data = await Products.insertMany(Productdata);
        //console.log(data);
        console.log("database is connected");
    }catch(err){
        console.log(err);
    }
}

app.listen(port , (req,res)=>{
    connectDB();
    console.log("app is listening")
})