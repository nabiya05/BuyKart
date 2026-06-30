import express from "express"
import Products from "../model/schema.js";
const router = express.Router();
import User from "../usermodel/userschema.js";
import usermiddleware from "../middlewares/middleware.js";
import upload from "../middlewares/imagemiddleware.js";

router.get("/products", async(req,res)=>{
    try{
        const products = await Products.find({})
        res.json(products);
    }catch(err){
        res.json(err);
        console.log(err);
    }
})

router.post("/products/add",usermiddleware,upload.single("image"), async(req,res)=>{
    const {title, description, price} = req.body;
    const image = req.file?`/uploads/${req.file.filename}`:null;
    try{
        const newproducts = new Products({
            title,
            description,
            price,
            image
        })
        await newproducts.save();
        res.json(newproducts);
    }catch(err){
        res.json(err);
        console.log(err);
    }
})

router.put("/products/:id",usermiddleware, async(req,res)=>{
    const {id} = req.params;
    const {title, description, price} = req.body;
    try{

        const product = await Products.findByIdAndUpdate(id, {
            title,
            description,
            price},
            {new:true}
        )
        res.json(product);
    }catch(err){
        res.json(err);
        console.log(err);
    }
})

router.delete("/products/:id", async(req,res)=>{
    const {id} = req.params;
    try{
        const products = await Products.findByIdAndDelete(id)
        res.json(products);
    }catch(err){
        res.json(err);
        console.log(err);
    }
})

router.get("/products/:id", async(req,res)=>{
    const {id} = req.params;
    try{
        const products = await Products.findById(id);
        res.json(products);
    }catch(err){
        res.json(err);
        console.log(err);
    }
})

router.get("/search", async(req,res)=>{
    try{
        const {search}= req.query;
        if(!search){
            return res.json({msg:"search not found"})
        }
        const products = await Products.find({
            title:{$regex:search, $options:"i"}
        })
        res.json({search:products})
    }catch(err){
        res.json({msg:err.message})
    }
})

export default router;