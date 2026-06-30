import Cart from "./cartschema.js";
import Product from "../model/schema.js"
import User from "../usermodel/userschema.js"
import express from "express"
import usermiddleware from "../middlewares/middleware.js";

const router = express.Router();

router.post("/addtocart", usermiddleware, async(req,res)=>{
    try{
        const userid = req.userid;
        const {productid , quantity} = req.body;
        if(quantity<1){
            return res.json({msg:"pls add a product"})
        }
        const productexsits = await Product.findById(productid);
        if(!productexsits){
            return res.json({msg:"product not found"})
        }
        let cart = await Cart.findOne({user : userid})
        if(!cart){
            cart = await Cart.create({

                user:userid,
                items:[{product:productid,quantity}]
            })
            return res.json({
                success:true,
                message:"cart created & product added",
                cart
            })
        }
        const itemindex = cart.items.findIndex(
            item =>item.product.toString()=== productid
        )
        if(itemindex>-1){
            cart.items[itemindex].quantity
        }else{
            cart.items.push({product:productid, quantity})
        }
        await cart.save()

        res.json({
            success: true,
            message:"product sucessfully ddded"
        })
    }catch(err){
        res.json({msg:err.message})
    }
})

router.get("/cart", usermiddleware, async(req,res)=>{
    try{
        const cart = await Cart.findOne({user:req.userid})
        .populate("user")
        .populate("items.product")
        if(!cart){
            return res.status(404).json({msg:"cart not found"})
        }
        res.json(cart)
    }catch(err){
        res.status(500).json({msg:err.message});
    }
})

export default router;