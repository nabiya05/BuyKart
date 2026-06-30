//jwt middleware
import jwt from "jsonwebtoken"
import dotenv from "dotenv/config";

const usermiddleware = (req,res,next)=>{
    const token = req.headers.authorization?.split(" ")[1]
    if(!token){
        return res.status(401).json({msg:"token required/wrong token"})
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_TOKEN)
        req.userid = decoded.userid

        next();
    }catch(err){
        res.status(500).json({msg:"requried token"})
        console.log(err)
    }

}

export default usermiddleware;

